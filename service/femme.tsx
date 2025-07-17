import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { URLS } from "./url";
import { useTranslation } from 'react-i18next';
import UseLanguageService from "./language_switch";
type InterviewItem = {
  id: number;
  index: number;
  question: string;
  answer: string;
}

type Femme = {
  id: number;
  lastName: string;
  firstName: string;
  title: string;
  linkedin: string | null;
  website: string | null;
  interviewLocale: string;
  interview: InterviewItem[];
  image: string
  description: string
}


export default function UseFemmeService() {
  const router = useRouter();
 const {

   headers


    } = UseLanguageService()

  const [open, setOpen] = useState(null);
  const [femmeImpact, setFemmeImpact] = useState<Femme[]>([]);

  const [selectedFemme, setSelectedFemme] = useState<Femme | null>(null);
  const [details, setDetails] = useState<any>(null);
  const handleToggle = (index: any) => {
    setOpen(open === index ? null : index);
  };
  const { id } = router.query;

  const [expertDetails, setExpertDetails] = useState<any>(null);

  const [error, setError] = useState<string | null>(null);
  const BACKEND_URL = URLS.ONDISPLAY_EXPERTS;
  const [currentOfferIndex, setCurrentOfferIndex] = useState<number>(0);
  const [offerList, setOfferList] = useState<any[]>([]);
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
        const BACKEND_URL = URLS.ONDISPLAY_LADIES;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.ONDISPLAY_LADIES is not defined");
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
        const expertList = Array.isArray(data) ? data : [data];
        setFemmeImpact(expertList);
        setSelectedFemme(expertList[0]);

      } catch (error: any) {
        handleError(error, "fetching categories");
      }
    }

    fetchCountry();
  }, []);


  const handleViewDetails = (item: Femme) => {


    router.push(`/parole_dexpert/${item.id}`);
  };
  useEffect(() => {
    async function fetchCountry() {
      try {

        console.log("Envoi de la requête...");
        const BACKEND_URL = URLS.ONDISPLAY_EXPERTS;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.ONDISPLAY_EXPERTS is not defined");
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
        const expertList = Array.isArray(data) ? data : [data];
        setFemmeImpact(expertList);
        setSelectedFemme(expertList[0]);

      } catch (error: any) {
        handleError(error, "fetching categories");
      }
    }

    fetchCountry();
  }, []);




  if (!BACKEND_URL) {
    throw new Error("Environment variable NEXT_PUBLIC_GET_INTERNSHIP_DETAIL is not defined");
  }

  useEffect(() => {
    if (id) {

      const fetchExpertDetails = async () => {
        try {
          const response = await fetch(`${BACKEND_URL}/${id}`, {
            method: 'GET',
              headers,

          });

          const data = await response.json();
          setExpertDetails(data);


          const storedResults = sessionStorage.getItem("selectedFemmeItem");
          if (storedResults) {
            const parsedResults = JSON.parse(storedResults);
            setOfferList(parsedResults);



          }
        } catch (error: any) {
          setError('Error fetching offer details');
          handleError(error, "fetching regions");
        }
      };

      fetchExpertDetails();
    }
  }, [id]);



  const maxImages = 5;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      (prev + maxImages) % femmeImpact.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      (prev - maxImages + femmeImpact.length) % femmeImpact.length
    );
  };

  const displayedImages = [];

  for (let i = 0; i < maxImages; i++) {
    const index = (currentIndex + i) % femmeImpact.length;
    displayedImages.push(femmeImpact[index]);
  }

  useEffect(() => {
    if (expertDetails) {
      console.log('Updated expertDetails:', expertDetails);
    }
  }, [expertDetails]);
  return {
    maxImages,
    handlePrev,
    handleNext,
    displayedImages,
    setSelectedFemme,
    errorMessage,
    selectedFemme,
    setFemmeImpact,
    setErrorMessage,
    handleToggle,
    open,
    setOpen,
    femmeImpact,
    currentIndex,
    setCurrentIndex,
    details,
    handleViewDetails,
    expertDetails, error
  }
}