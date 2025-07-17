import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useState } from 'react';
import { URLS } from './url';
import { useTranslation } from 'react-i18next';


export default function ServiceInternshipCriteria() {

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language; 
   const [foas, setSectors] = useState<Sector[]>([]);
      const [status, setStatus] = useState<Status[]>([]);
      const [Levels, setLevels] = useState<Level[]>([]);
      const [durations, setDurations] = useState<Duration[]>([]);
      const [contrats, setContrats] = useState<Contrat[]>([]);
      const [parutions, setParutions] = useState<Parution[]>([]);
  
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState({
    regions: false,
    categories: false,
    rankings: false
  });
  
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
          async function fetchSector() {
              try {
  
                  const BACKEND_URL = URLS.GET_INTERNSHIP_SECTOR;
                  if (!BACKEND_URL) {
                      throw new Error("Environment variable URLS.GET_INTERNSHIP_SECTOR is not defined");
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
                  setSectors(data);
  
  
  
              } catch (error: any) {
                  handleError(error, "fetching regions");
              }
          }
  
          fetchSector();
      }, []);
  
      useEffect(() => {
          async function fetchStatus() {
              try {
  
  
                  const BACKEND_URL = URLS.GET_INTERNSHIP_STATUS;
                  if (!BACKEND_URL) {
                      throw new Error("Environment variable URLS.GET_INTERNSHIP_STATUS is not defined");
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
                  setStatus(data);
  
  
  
              } catch (error: any) {
                  handleError(error, "fetching status");
              }
          }
  
          fetchStatus();
      }, []);
  
      useEffect(() => {
          async function fetchLevels() {
              try {
  
  
                  const BACKEND_URL = URLS.GET_INTERNSHIP_LEVEL;
                  if (!BACKEND_URL) {
                      throw new Error("Environment variable URLS.GET_INTERNSHIP_LEVEL is not defined");
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
                  setLevels(data);
  
  
  
              } catch (error: any) {
                  handleError(error, "fetching Levels");
              }
          }
  
          fetchLevels();
      }, []);
  
      useEffect(() => {
          async function fetchDurations() {
              try {
  
  
                  const BACKEND_URL = URLS.GET_INTERNSHIP_DURATION;
                  if (!BACKEND_URL) {
                      throw new Error("Environment variable URLS.GET_INTERNSHIP_DURATION is not defined");
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
                  setDurations(data);
                  console.log(data)
  
  
              } catch (error: any) {
                  handleError(error, "fetching Durations");
              }
          }
  
          fetchDurations();
      }, []);
  
      useEffect(() => {
          async function fetchContrats() {
              try {
  
  
                  const BACKEND_URL = URLS.GET_INTERNSHIP_CONTRACT;
                  if (!BACKEND_URL) {
                      throw new Error("Environment variable URLS.GET_INTERNSHIP_CONTRACT is not defined");
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
                  setContrats(data);
  
  
              } catch (error: any) {
                  handleError(error, "fetching Contrats");
              }
          }
  
          fetchContrats();
      }, []);
  
  
      useEffect(() => {
          async function fetchParutions() {
              try {
  
  
                  const BACKEND_URL = URLS.GET_INTERNSHIP_DATE;
                  if (!BACKEND_URL) {
                      throw new Error("Environment variable URLS.GET_INTERNSHIP_DATE is not defined");
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
                  setParutions(data);
  
  
  
              } catch (error: any) {
                  handleError(error, "fetching Parutions");
              }
          }
  
          fetchParutions();
      }, []);
      const [open, setOpen] = useState<number | null>(null);
    
  

  return {
    errorMessage,
    setErrorMessage,
 
    setSectors,
    status,
    setStatus,                                                                                                  
    Levels,

    setLevels,
    setDurations,
    durations,
    contrats,
    setContrats,
    parutions,
    setParutions,
    open,
    setOpen,
   

  }





















}
