import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useState } from 'react';
import { URLS } from './url';
import { useTranslation } from 'react-i18next';
import UseLanguageService from './language_switch';



export default function ServiceFormationDetail() {


  const router = useRouter();
  const { id } = router.query;
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formationData, setOfferDetails] = useState<any>(null);
 const {

   headers


    } = UseLanguageService()

  const [error, setError] = useState<string | null>(null);
  const BACKEND_URL = URLS.GET_PROGRAM_DETAIL;
  const [currentOfferIndex, setCurrentOfferIndex] = useState<number>(0);
  const [offerList, setOfferList] = useState<any[]>([]);

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

  if (!BACKEND_URL) {
    throw new Error("Environment variable GET_PROGRAM_DETAIL is not defined");
  }

  useEffect(() => {
    if (id) {

      const fetchOfferDetails = async () => {
        try {
          const response = await fetch(`${BACKEND_URL}/${id}`, {
            method: 'GET',
            headers,
          });

          const data = await response.json();
          setOfferDetails(data);


          const storedResults = sessionStorage.getItem("searchResults");
          if (storedResults) {
            const parsedResults = JSON.parse(storedResults);
            setOfferList(parsedResults);


            const index = parsedResults.findIndex((offer: any) => offer.id === id);
            if (index !== -1) {
              setCurrentOfferIndex(index);
            }
          }
        } catch (error: any) {
          setError('Error fetching offer details');
          handleError(error, "fetching regions");
        }
      };

      fetchOfferDetails();
    }
  }, [id]);
  const goToNextOffer = () => {
    if (currentOfferIndex < offerList.length - 1) {
      const nextIndex = currentOfferIndex + 1;
      setCurrentOfferIndex(nextIndex);
      router.push(`/students/formation/${offerList[nextIndex].id}`);
    }
  };

  const goToPreviousOffer = () => {
    if (currentOfferIndex > 0) {
      const prevIndex = currentOfferIndex - 1;
      setCurrentOfferIndex(prevIndex);
      router.push(`/students/formation/${offerList[prevIndex].id}`);
    }
  };
  
  useEffect(() => {
    if (formationData) {
      console.log('Updated formationData:', formationData);
    }
  }, [formationData]);

  const handleClick2 = () => {
    const searchParams = sessionStorage.getItem("searchParams");

    if (searchParams) {
      router.push({
        pathname: "/students/resultatFormation",
        query: JSON.parse(searchParams)
      });
    } else {
      router.push("/students/resultatFormation");
    }

  };
  return {
    currentOfferIndex,
    goToPreviousOffer,
    goToNextOffer,
    offerList,
    setOfferList,
    formationData,
    setOfferDetails,
    errorMessage,
    handleClick2
  }





















}
