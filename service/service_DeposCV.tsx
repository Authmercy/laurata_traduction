
import { useEffect, useState } from "react";
import { CV_Class } from "@/service/CV";
import { URLS } from "@/service/url";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
type Sector = {
  id: string;
  text: string;

};

export default function UseDepotCVService() {

   const { i18n } = useTranslation();
   const currentLanguage = i18n.language; 
  const router = useRouter();
  
   const handleError = (error: any, context?: string) => {
  console.error(`Error in ${context || 'operation'}:`, error);
  let message = error.message || "Une erreur inconnue est survenue.";
  

  if (error.response?.status) {
    switch(error.response.status) {
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
    const [open, setOpen] = useState(null);
  
    const handleToggle = (index: any) => {
      setOpen(open === index ? null : index);
    };
    const [sectors, setSectors] = useState<Sector[]>([]);
    const [elements, setElements] = useState(new CV_Class());
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showError, setShowError] = useState(false);
  
    useEffect(() => {
      async function fetchSector() {
        try {
  
          console.log("Envoi de la requête...");
          const BACKEND_URL = URLS.GET_INTERNSHIP_SECTOR;
  
  
          const response = await fetch(BACKEND_URL, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              locale: currentLanguage,
            },
  
  
          });
  
  
          const data = await response.json();
          setSectors(data);
          console.log(data)
  
  
        } catch (error: any) {
          handleError(error, "fetching institution");
        }
      }
  
      fetchSector();
    }, []);
  
  
    function updateElement(prev: CV_Class, changes: Partial<CV_Class>) {
      return new CV_Class(
        changes.firstname ?? prev.firstname,
        changes.lastname ?? prev.lastname,
        changes.email ?? prev.email,
        changes.phone ?? prev.phone,
        changes.cv ?? prev.cv,
        changes.sector ?? prev.sector,
        changes.job ?? prev.job,
  
      );
    }
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = e.target;
      setElements(prev => {
        const newSector = checked
          ? [...prev.sector, value]
          : prev.sector.filter(s => s !== value);
  
        return updateElement(prev, { sector: newSector });
      });
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, files } = e.target;
      if (type === 'file' && files) {
        setElements(prev => updateElement(prev, { [name]: files[0] }));
      } else {
        setElements(prev => updateElement(prev, { [name]: value }));
      }
    };
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
  
    const handleSubmit = async (e: any) => {
      e.preventDefault();
      if (!termsAccepted) {
        setShowError(true);
        return;
      }
      const data = new FormData();
      data.append("firstname", elements.firstname);
      data.append("lastname", elements.lastname);
      data.append("email", elements.email);
      data.append("phone", elements.phone);
      data.append("job", elements.job ?? "");
      elements.sector.forEach(id => {
        data.append("sector", id);
      });
  
      if (elements.cv) {
        data.append("cv", elements.cv);
      } else {
        alert("Veuillez sélectionner un fichier CV.");
        return;
      }
  
      try {
        console.log("Envoi de la requête...");
        const BACKEND_URL = URLS.CV_UPLOAD;
  
  
        const response = await fetch(BACKEND_URL, {
          method: "POST",
          headers: {
            locale: currentLanguage,
  
          },
          body: data,
        });
  
  
  
        const result = await response.json();
        setSuccessMessage("🎉 Votre CV a été bien envoyé, Nous vous reconterons  !");
  
  
        console.log("Formulaire soumis avec succès:", result);
        setErrorMessage("");
      } catch (error: any) {
  
    handleError(error, "fetching institution");
      }
    };

 return {


handleToggle,
  errorMessage,
  handleChange,
  successMessage,

  setErrorMessage,
  setElements,
handleCheckboxChange,
updateElement,
  setSuccessMessage,
showError,
setShowError,
setTermsAccepted,
termsAccepted,
elements,
setSectors,
 handleSubmit ,

sectors,

open,



 }
}