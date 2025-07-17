import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { URLS } from "./url";
import { useTranslation } from "react-i18next";
import UseLanguageService from "./language_switch";


type Contact = {
    id: number;
    location: number;
    phones: string;
    mail: string;
    website: string;
}

type Programs = {
    id: number;
    major: string;
    values: string[];
}

type Diapositives = {
    id: number;
    text: string;

    images: string;
}

type Portfolio = {
    id: number;
    category: string;
    programs: Programs[];
}

type Institution = {
    id: number;
    name: string;
      alt: string;
    shortName: string;
    logoId: string;
    city: string;
    diapositives: Diapositives[];
    description: string;
    activities: string[];

    portfolio: Portfolio[];
    infrastructure: string[];
    video: string;
    contact: Contact[];
}

export default function UseInstitutionUneService() {

 const {

   headers


    } = UseLanguageService()

    const [institutions, setInstitutions] = useState<Institution[]>([]);
    const [selectedCompany, setSelectedCompany] = useState<Institution | null>(null);


    const [loading, setLoading] = useState(true);
const [errorMessage, setErrorMessage] = useState<string | null>(null);
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
    useEffect(() => {
        async function fetchInstitutions() {
            try {
                const BACKEND_URL = URLS.ONDISPLAY_SCHOOLS;
                if (!BACKEND_URL) {
                    throw new Error("Environment variable URLS.ONDISPLAY_SCHOOLS is not defined");
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
                const institutionsList = Array.isArray(data) ? data : [data];
                setInstitutions(institutionsList);
                setSelectedCompany(institutionsList[0]);
            } catch (error: any) {
                     handleError(error, "fetching institution");
            } finally {
                setLoading(false);
            }
        }

        fetchInstitutions();
    }, []);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = e.target.value;
        const company = institutions.find(c => c.id.toString() === selectedId);
        setSelectedCompany(company ?? null);
    };

    const images = [
        "/images/background.png",
        "/images/backgroundEtudiant.jpeg",
        "/images/image.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };
    const [activeLink, setActiveLink] = useState('#presentation');
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const [open, setOpen] = useState(null);

    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };

 return {



  errorMessage,
  handleSelectChange,
  images,
  nextSlide,
  prevSlide,
handleToggle,
open,
setOpen,
  institutions,
  selectedCompany,
  setSelectedCompany,
  setLoading,
  setErrorMessage




 }
}