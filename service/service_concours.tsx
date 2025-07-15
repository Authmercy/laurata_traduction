import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { URLS } from "./url";

type Concours = {
  id: string;
  title: string;
  shortName:string;
  degrees: string;
  deadline: string;
  category: string;
  date: string;
  publicationDate: string;
  weblink: string;
  fileId: string;
  place: number;
  examReference:string


};


export default function UseConcourService() {

  const [concours, setConcours] = useState<Concours[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
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

  useEffect(() => {
    async function fetchCountry() {
      try {

        console.log("Envoi de la requête...");
        const BACKEND_URL = URLS.EXAMS;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.EXAMS is not defined");
        }

        const response = await fetch(BACKEND_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            locale: "fr",
          },


        });
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status},
            Erreur serveur, veuillez réessayer plus tard`);
        }

        const data = await response.json();
        setConcours(data);
        console.log(data)

      } catch (error: any) {
        handleError(error, "fetching categories");
      }
    }

    fetchCountry();
  }, []);





  return {
    concours,
    setConcours,
    errorMessage


  }
}