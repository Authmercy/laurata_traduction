import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { URLS } from "./url";
import { useTranslation } from "react-i18next";

type Institution = {
  id: number;
  name: string;
  shortName: string;
  logoId: string;
  faculties?: string[];
  schools?: string[];
  institutions?: string[];
  website?: string;
  addressEntries: Array<{ key: string; value: string }>
  city?: string;
};
export default function UseInstitutionService() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language; 
  const [institutionsTransnational, setInstitutionsTransnational] = useState<Institution[]>([]);
  const [institutionPublic, setInstitutionsPublic] = useState<Institution[]>([]);
  const [institutionsLaiques, setInstitutionsLaiques] = useState<Institution[]>([]);
  const [institutionsConfess, setInstitutionsConfess] = useState<Institution[]>([]);
  const [institutionsParticulier, setInstitutionsParticulier] = useState<Institution[]>([]);
 const [institutionsUnivPublic, setInstitutionsUnivPublic] = useState<Institution[]>([]);



  const [loading, setLoading] = useState(true);
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
  useEffect(() => {
    async function fetchInstitutionsTrans() {
      try {
        const BACKEND_URL = URLS.SCHOOLS;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.SCHOOLS is not defined");
        }
        const url = new URL(BACKEND_URL);
        url.searchParams.append("type", "TRANSNATIONAL");
        const response = await fetch(url.toString(), {
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


        setInstitutionsTransnational(Array.isArray(data) ? data : [data]);
      } catch (error) {
        handleError(error, "fetching institution");

      } finally {
        setLoading(false);
      }
    }

    fetchInstitutionsTrans();
  }, []);

  useEffect(() => {
    async function fetchInstitutionsPublic() {
      try {
        const BACKEND_URL = URLS.SCHOOLS;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.SCHOOLS is not defined");
        }
        const url = new URL(BACKEND_URL);
        url.searchParams.append("type", "PUBLIC_OTHERS");
        const response = await fetch(url.toString(), {
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


        setInstitutionsPublic(Array.isArray(data) ? data : [data]);
      } catch (error) {
        handleError(error, "fetching institution");

      } finally {
        setLoading(false);
      }
    }

    fetchInstitutionsPublic();
  }, []);

  useEffect(() => {
    async function fetchInstitutionsLaiques() {
      try {
        const BACKEND_URL = URLS.SCHOOLS;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.SCHOOLS is not defined");
        }
        const url = new URL(BACKEND_URL);
        url.searchParams.append("type", "PRIVATE_LAIC");
        const response = await fetch(url.toString(), {
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


        setInstitutionsLaiques(Array.isArray(data) ? data : [data]);
      } catch (error) {
        handleError(error, "fetching institution");

      } finally {
        setLoading(false);
      }
    }

    fetchInstitutionsLaiques();
  }, []);

  useEffect(() => {
    async function fetchInstitutions() {
      try {
        const BACKEND_URL = URLS.SCHOOLS;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.SCHOOLS is not defined");
        }
        const url = new URL(BACKEND_URL);
        url.searchParams.append("type", "PRIVATE_CONFESIONNAL");
        const response = await fetch(url.toString(), {
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


        setInstitutionsConfess(Array.isArray(data) ? data : [data]);
      } catch (error) {
        handleError(error, "fetching institution");

      } finally {
        setLoading(false);
      }
    }

    fetchInstitutions();
  }, []);
  useEffect(() => {
    async function fetchInstitutions() {
      try {
        const BACKEND_URL = URLS.SCHOOLS;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.SCHOOLS is not defined");
        }
        const url = new URL(BACKEND_URL);
        url.searchParams.append("type", "PUBLIC_SPECIAL");
        const response = await fetch(url.toString(), {
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


        setInstitutionsParticulier(Array.isArray(data) ? data : [data]);
      } catch (error) {
        handleError(error, "fetching institution");

      } finally {
        setLoading(false);
      }
    }

    fetchInstitutions();
  }, []);

   useEffect(() => {
     async function fetchInstitutions() {
       try {
         const BACKEND_URL = URLS.SCHOOLS;
         if (!BACKEND_URL) {
           throw new Error("Environment variable URLS.SCHOOLS is not defined");
         }
         const url = new URL(BACKEND_URL);
         url.searchParams.append("type", "PUBLIC");
         const response = await fetch(url.toString(), {
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
 
 
         setInstitutionsUnivPublic(Array.isArray(data) ? data : [data]);
       } catch  (error: any) {
                      handleError(error, "fetching institution");
 
       } finally {
         setLoading(false);
       }
     }
 
     fetchInstitutions();
   }, []);



  return {


    institutionsTransnational,
    loading,
    errorMessage,
    setErrorMessage,
    open,
    institutionPublic,
    institutionsLaiques,
    institutionsConfess,
    institutionsParticulier,
    institutionsUnivPublic

  }
}