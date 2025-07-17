import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { URLS } from "./url";
import { useTranslation } from "react-i18next";
import UseLanguageService from "./language_switch";

type Items = {
  id: number;
  position: number;
  answerType: string | null;
  text: string | null;
}

type Question = {
  id: number;
  categoryId: string;
  categoryName: string;
  type: string;
  text: string;
  min: number | null;
  max: number | null;
  items: Items[];
}
type QuestionPost = {
  username: string
  id: number;
  quizzId: string;
  answer: string;
  answers: string[];

}

type GroupedQuestions = {
  [categoryId: string]: {
    categoryName: string;
    questions: Question[];
  };
};

export default function UseSondageService() {
 const {

   headers


    } = UseLanguageService()
  const [responses, setResponses] = useState<{ [questionId: number]: string | string[] }>({});
  const [question, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [open, setOpen] = useState(null);
  const [elements, setElements] = useState({ username: "", email: "", password: "" });
  const [validatedQuestions, setValidatedQuestions] = useState<number[]>([]);

  const handleResponseChange = (questionId: number, value: string | string[]) => {
    setResponses(prev => ({ ...prev, [questionId]: value }));
  };

  const groupedQuestions: GroupedQuestions = question.reduce((acc, q) => {
    if (!acc[q.categoryId]) {
      acc[q.categoryId] = {
        categoryName: q.categoryName,
        questions: [],
      };
    }
    acc[q.categoryId].questions.push(q);
    return acc;
  }, {} as GroupedQuestions);
  const handleError = (error: any, context?: string) => {
    console.error(`Error in ${context || 'operation'}:`, error);
    let message = error.message || "Une erreur inconnue est survenue.";

    if (error.response?.status) {
      switch (error.response.status) {
        case 404:
          message = "Ressource non trouvée";
          break;
        case 500:
          message = "Erreur serveur, veuillez réessayer plus tard";
          break;
      }
    }

    setErrorMessage(message);
  };


  const handleSubmitQuestion = async (questionId: number) => {
    try {
      const BACKEND_URL = URLS.QUIZZES;
      if (!BACKEND_URL) {
        throw new Error("URLS.QUIZZES not defined");
      }

      const question = Object.values(groupedQuestions)
        .flatMap(group => group.questions)
        .find(q => q.id === questionId);

      if (!question) {
        console.error("Question not found for ID:", questionId);
        return;
      }

      const responseValue = responses[questionId];
      const isMultiple = Array.isArray(responseValue);

      const payload: QuestionPost = {
        username: "",
        id: questionId,
        quizzId: question.categoryId,
        answer: !isMultiple ? (responseValue as string) : "",
        answers: isMultiple ? (responseValue as string[]) : [],
      };

      const url = new URL(`${BACKEND_URL}`);
      console.log(url);
      const response = await fetch(url.toString(), {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        throw new Error(errorData.message || "Failed to submit quiz");
      }

      const result = await response.json();
      setValidatedQuestions(prev => [...prev, questionId]);
      console.log("Success:", result);
    } catch (error) {
      console.error("Request failed:", error);
    }
  };




  useEffect(() => {
    async function fetchQuestionS() {
      try {
        const BACKEND_URL = URLS.QUIZZES;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.QUIZZES is not defined");
        }
        const url = new URL(BACKEND_URL);
        const response = await fetch(url.toString(), {
          method: "GET",
         headers,
        });

        const data = await response.json();
        setQuestions(Array.isArray(data) ? data : [data]);
      } catch (error: any) {
        handleError(error, "fetching quiz");
      } finally {
        setLoading(false);
      }
    }

    fetchQuestionS();
  }, []);

  const handleToggle = (index: any) => {
    setOpen(open === index ? null : index);
  };

  return {
    handleSubmitQuestion,
    errorMessage,
    question,
    setQuestions,
    setLoading,
    setErrorMessage,
    handleToggle,
    open,
    setOpen,
    groupedQuestions,
    responses,
    handleResponseChange,
    validatedQuestions
  };
}