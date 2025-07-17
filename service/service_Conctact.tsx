
import { useEffect, useState } from "react";
import { URLS } from "./url";
import { useTranslation } from "react-i18next";
import UseLanguageService from "./language_switch";



export default function UseContactService() {

  const {
 
    headers
 
 
     } = UseLanguageService()
 
  const [elements, setElements] = useState({ fullname: "", email: "", phone: "", subject: "", text: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setElements(prev => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e: any) => {
    e.preventDefault();



    try {
      const BACKEND_URL = URLS.MESSAGE;
      if (!BACKEND_URL) {
        throw new Error("Backend URL not set.");
      }

      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers,
        body: JSON.stringify(elements),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erreur serveur ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      setSuccessMessage("🎉 Messages envoyés. On vous recontactera  !");
      setErrorMessage("");
      setElements({ fullname: "", email: "", phone: "", subject: "", text: "" });
    } catch (error: any) {
      setErrorMessage("Erreur lors de l'envoi du formulaire : " + error.message);
      setSuccessMessage("");
    }
  };


 return {



  errorMessage,
  handleChange,
  successMessage,

  setErrorMessage,
  setElements,

  setSuccessMessage,

 handleSubmit ,

elements,




 }
}