import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { URLS } from "./url";
import { useTranslation } from "react-i18next";
import UseLanguageService from "./language_switch";


export default function UseRegistrationService() {
 const {

   headers


    } = UseLanguageService()

   const [elements, setElements] = useState({ username: "", email: "", password: "" });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setElements(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();


    if (elements.password !== confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas.");
      setSuccessMessage("");
      return;
    }

    try {
      const BACKEND_URL = URLS.REGISTRATION;
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
      setSuccessMessage("🎉 Inscription réussie ! Bienvenue chez LAURATA !");
      setErrorMessage("");
      setElements({ username: "", email: "", password: "" });
      setConfirmPassword("");
    } catch (error: any) {
      setErrorMessage("Erreur lors de l'envoi du formulaire : " + error.message);
      setSuccessMessage("");
    }
  };
 return {



  errorMessage,
  handleChange,
  successMessage,
  confirmPassword,
  setErrorMessage,
  setElements,
 setConfirmPassword ,
  setSuccessMessage,
 handleConfirmPasswordChange ,
 handleSubmit ,

elements,

open,



 }
}