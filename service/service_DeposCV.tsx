
import { useEffect, useState } from "react";
import { CV_Class } from "@/service/CV";
import { URLS } from "@/service/url";
import { useRouter } from "next/router";
import UseLanguageService from "./language_switch";
type Sector = {
  key: string;
  text: string;
};

export default function UseDepotCVService() {

  const {

    headers, locale


  } = UseLanguageService()

  const router = useRouter();

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
  const [open, setOpen] = useState(null);

  const handleToggle = (index: any) => {
    setOpen(open === index ? null : index);
  };
  const [foas, setSectors] = useState<Sector[]>([]);
  const [elements, setElements] = useState(new CV_Class());
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);

  useEffect(() => {
    async function fetchSector() {
      try {

        const BACKEND_URL = URLS.GET_INTERNSHIP_SECTOR;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.GET_INTERNSHIP_SECTOR is not defined");
        }
        const response = await fetch(BACKEND_URL, {
          method: "GET",
          headers,
        });
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status},
              Erreur serveur, veuillez réessayer plus tard`);
        }

        const data = await response.json();
        setSectors(data);



      } catch (error: any) {
        handleError(error);
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

  const handleCheckboxChange = (
    type: 'sector' | 'level' | 'adTypes' | 'status',
    value: string
  ) => {
    switch (type) {
      case 'sector':
        setSelectedSectors(prev =>
          prev.includes(value)
            ? prev.filter(v => v !== value)
            : [...prev, value]
        );
        break;
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;

    if (type === 'file' && files && files.length > 0) {

      const file = new File([files[0]], files[0].name, {
        type: files[0].type,
        lastModified: files[0].lastModified
      });

      setElements(prev => updateElement(prev, { [name]: file }));
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

    (selectedSectors || []).forEach((item: string) => {
      data.append("sector[]", item);
    });

    if (elements.cv instanceof File) {
      data.append("cv", elements.cv);
    } else {
      alert(locale === 'en'
        ? 'Please select a CV file'
        : 'Veuillez sélectionner un fichier CV.');
      return;
    }

    try {
      const BACKEND_URL = URLS.CV_UPLOAD;

      console.log("--- FINAL SUBMISSION DATA ---");
      console.log("FormData contents:");
      for (const [key, value] of data.entries()) {
        console.log(key, value);
      }


    const response = await fetch(BACKEND_URL, {
  method: "POST",
  headers: {
    'Accept': 'application/json',
    locale: locale || "fr",  
  },
  body: data, 
});


      if (!response.ok) {
        const error = new Error(
          locale === 'en'
            ? `HTTP error: ${response.status}, Please try later`
            : `Erreur HTTP: ${response.status}, Erreur serveur, veuillez réessayer plus tard`
        );
        (error as any).status = response.status;
        throw error;
      }

      const result = await response.json();
      setSuccessMessage(locale === 'en'
        ? '🎉 CV submitted successfully!'
        : '🎉 CV envoyé avec succès !');

    } catch (error: any) {
      handleError(error, "CV submission");
    }
  };

  return {


    handleToggle,
    errorMessage,
    handleChange,
    successMessage,
    setSelectedSectors,
    selectedSectors,
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
    handleSubmit,

    foas,

    open,



  }
}