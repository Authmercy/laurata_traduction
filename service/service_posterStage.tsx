import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { URLS } from "./url";

type Sector = {
  key: string ;
  text: string;
}; 
type Status = {
  key: string ;
  text: string;
}; 
type Level = {
  key: string ;
  text: string;
}; 
type Duration = {
  key: string ;
  text: string;
}; 
type Contrat = {
  key: string;
  text: string;
  items?: { key: string; text: string }[];
};

type Parution = {
  key: string ;
  text: string;
}; 


export default function UsePosterService() {


 

   const [foas, setSectors] = useState<Sector[]>([]);
      const [status, setStatus] = useState<Status[]>([]);
      const [Levels, setLevels] = useState<Level[]>([]);
      const [durations, setDurations] = useState<Duration[]>([]);
      const [contrats, setContrats] = useState<Contrat[]>([]);
      const [parutions, setParutions] = useState<Parution[]>([]);

  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedContracts, setSelectedContracts] = useState<string[]>([]);
  const [selectedOrgTypes, setSelectedOrgTypes] = useState<string[]>([]);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const [selectedPublication, setSelectedPublication] = useState<string | null>(null);
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
                          locale: "fr",
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
                          locale: "fr",
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
                          locale: "fr",
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
                          locale: "fr",
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
                          locale: "fr",
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
                          locale: "fr",
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
    
  
  const handleCheckboxChange = (
    type: 'foa' | 'degreeLevels' | 'orgTypes' | 'adTypes' | 'status',
    value: string
  ) => {
    switch (type) {
      case 'foa':
        setSelectedSectors(prev =>
          prev.includes(value)
            ? prev.filter(v => v !== value)
            : [...prev, value]
        );
        break;
      case 'degreeLevels':
        setSelectedLevels(prev =>
          prev.includes(value)
            ? prev.filter(v => v !== value)
            : [...prev, value]
        );
        break;
      case 'orgTypes':
        setSelectedOrgTypes(prev =>
          prev.includes(value)
            ? prev.filter(v => v !== value)
            : [...prev, value]
        );
        break;
      case 'adTypes':
        setSelectedContracts(prev =>
          prev.includes(value)
            ? prev.filter(v => v !== value)
            : [...prev, value]
        );
        break;
    }
  };
  const handleRadioChange = (type: 'enumDuration' | 'enumPublicationDate', value: string) => {
    if (type === 'enumDuration') {
      setSelectedDuration(value);
    } else {
      setSelectedPublication(value);
    }
    setOpen(null);
  };

 const handleToggle = (index: any) => {
    setOpen(open === index ? null : index);
  };





  return {
    
handleRadioChange,
handleCheckboxChange,
      errorMessage,
    setErrorMessage,
    setSelectedSectors,
    selectedSectors,
    setSelectedLevels,
    selectedLevels,
    selectedContracts,
    setSelectedContracts,
    selectedOrgTypes,
    setSelectedPublication,
    selectedPublication,
    selectedDuration,
    setSectors,
    status,
    setStatus,                                                                                                  
    Levels,
    handleToggle,
    setLevels,
    setDurations,
    durations,
    contrats,
    setContrats,
    parutions,
    setParutions,
    open,
    setOpen,
foas

  }
}