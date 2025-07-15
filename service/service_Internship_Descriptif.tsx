import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useState } from 'react';
import { URLS } from './url';
import { InternshipFilter } from '@/service/Internship-filter';


export default function ServiceInternshipDetail() {


   const router = useRouter();
     const { id } = router.query;
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
     const [offerDetails, setOfferDetails] = useState<any>(null);
   
     const [error, setError] = useState<string | null>(null);
     const BACKEND_URL = URLS.GET_INTERNSHIP_DETAIL;
     const [currentOfferIndex, setCurrentOfferIndex] = useState<number>(0);
     const [offerList, setOfferList] = useState<any[]>([]); 
     if (!BACKEND_URL) {
       throw new Error("Environment variable NEXT_PUBLIC_GET_INTERNSHIP_DETAIL is not defined");
     }
   
     useEffect(() => {
       if (id) {
   
         const fetchOfferDetails = async () => {
           try {
             const response = await fetch(`${BACKEND_URL}/${id}`, {
               method: 'GET',
               headers: {
                 'Content-Type': 'application/json',
                 'locale': 'fr',
               },
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
         router.push(`/students/stage/${offerList[nextIndex].id}`);
       }
     };
   
     const goToPreviousOffer = () => {
       if (currentOfferIndex > 0) {
         const prevIndex = currentOfferIndex - 1;
         setCurrentOfferIndex(prevIndex);
         router.push(`/students/stage/${offerList[prevIndex].id}`);
       }
     };
     useEffect(() => {
       if (offerDetails) {
         console.log('Updated offerDetails:', offerDetails);
       }
     }, [offerDetails]);


  const handleClick1 = () => {
    
    const searchParams = sessionStorage.getItem("searchParams");
    
    if (searchParams) {
        router.push({
            pathname: "/students/resultatRecherche",
            query: JSON.parse(searchParams)
        });
    } else {
        router.push("/students/resultatRecherche");
    }
};


    
  return {
    currentOfferIndex,
goToPreviousOffer,
goToNextOffer,
offerList,
setOfferList,
offerDetails,
setOfferDetails,
errorMessage,
handleClick1
  }





















}
