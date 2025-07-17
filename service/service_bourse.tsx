import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { URLS } from "./url";
import { useTranslation } from "react-i18next";

type Offer = {
  id?: string | number;
  regionName: string;
  sponsor: string;
  countryName: string;
  description: string;
  website: string;

};

type Region = {
  id?: string | number;
  regionCode: string;
  regionName: string;
  count: number;
};


export default function UseBourseService() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language; 
   const [open, setOpen] = useState(null);
  const [regions, setRegions] = useState<Region[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [code, setCode] = useState<string | null>(null);
  const [offers, setOffers] = useState<Offer[]>([]);


  const handleToggle = (index: any) => {
    setOpen(open === index ? null : index);
  };
const [errorMessage, setErrorMessage] = useState<string | null>(null)
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
    async function fetchCountry() {
      try {

        console.log("Envoi de la requête...");
        const BACKEND_URL = URLS.SCHOLARSHIP_OVERVIEW;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.SCHOLARSHIP_OVERVIEW is not defined");
        }

        const response = await fetch(BACKEND_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            locale: currentLanguage,
          },


        });
 if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status},
            Erreur serveur, veuillez réessayer plus tard`);
        }
        
        const data = await response.json();
        setRegions(data);
        console.log(data)
        const defaultRegion = data.find((r: any) => r.code === 'africa');
        if (defaultRegion) {
          setSelectedRegion(defaultRegion.name);
          setCode(defaultRegion.code);
        }
      } catch (error: any) {
        handleError(error, "fetching categories");
    }
     }

    fetchCountry();
  }, []);



  const handleClick = async (reg: Region) => {
    try {
      const BACKEND_URL = URLS.SCHOLARSHIPS;
      if (!BACKEND_URL) throw new Error("Environment variable URLS.SCHOLARSHIPS is not defined");

      const queryParams = new URLSearchParams({ region: reg.regionCode.toString() });
      const response = await fetch(`${BACKEND_URL}?${queryParams.toString()}`, {
        method: "GET",
        headers: { 
          "Content-Type": "application/json",
           locale: currentLanguage },
      });

    
      const data = await response.json();
      setOffers(data);
      console.log(data);
      setSelectedRegion(reg.regionName);
      setCode(reg.regionCode);
    } 
    catch (error: any) {
        handleError(error, "fetching categories");
    }
  }

 return {



  errorMessage,
  setCode,
  setSelectedRegion,
  setRegions,
  setErrorMessage,
handleToggle,
open,
setOpen,
  regions,
  selectedRegion,
  code,
  offers,
  handleClick



 }
}