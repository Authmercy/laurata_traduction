import router, { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { URLS } from "./url";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { useTranslation } from "react-i18next";

type Opendays = {
  id: number;
  year: number;
  month: number;
  day: number;
  logo: string;
  beginTime: string;
  endTime: string;
  schoolName: string;
  text: string;
  city: string;
  address: string;
  url: string;

};






export default function UseJPOService() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language; 
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
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


  const [activeTab, setActiveTab] = useState("jpo");

  const [opendays, setOpendays] = useState<Opendays[]>([]);
  const [values, setValues] = useState<DateObject[]>([]);
  const [schoolName, setSchoolName] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [searchResults, setSearchResults] = useState<Opendays[]>([]);


  const handleSubmit = async () => {
    const from = values[0]?.format("YYYY-MM-DD") || null;
    const until = values[1]?.format("YYYY-MM-DD") || null;
    setSearchTriggered(true);

    const payload = {
      schoolName: schoolName.trim(),
      ...(from && { from }),
      ...(until && { until }),
    };

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(URLS.OPENDAYS_SEARCH, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          locale: currentLanguage,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Raw API response:", data);

      const internshipsArray = Array.isArray(data) ? data : [];
      console.log("Processed internships:", internshipsArray);

      sessionStorage.setItem("searchJPO", JSON.stringify(internshipsArray));
      setSearchResults(internshipsArray);

   
      console.log("Current searchResults state (after set):", internshipsArray);
console.log("searchResults:", searchResults);
console.log("searchResults.length:", searchResults.length);

    } catch (error: any) {
      console.error("Error:", error);
      setMessage("Error: " + error.message);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

console.log("searchResults:", searchResults);
console.log("searchResults.length:", searchResults.length);

  }, [searchResults]);

  useEffect(() => {
    async function fetchOpendays() {
      try {
        const BACKEND_URL = URLS.OPENDAYS;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.OPENDAYS is not defined");
        }
        const url = new URL(BACKEND_URL);
        url.searchParams.append("category", "NOSCHOOL");
        const response = await fetch(url.toString(), {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            locale: currentLanguage,
          },
        });


        const data = await response.json();

        console.log(data)
        setOpendays(Array.isArray(data) ? data : [data]);
      } catch (error) {

        handleError(error, "fetching regions");

      } finally {
        setLoading(false);
      }
    }

    fetchOpendays();
  }, []);







  return {


    handleSubmit,
    errorMessage,
    opendays,
    loading,
    setOpendays,
    setErrorMessage,
    values,
    message,
    schoolName,
    setValues,
    setSchoolName,
    searchResults,

    searchTriggered
  }
}