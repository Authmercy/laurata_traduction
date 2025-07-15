import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { URLS } from "./url";

type NewsFeed = {
  id: number;
  year: number;
  month: number;
  day: number;
  type: string;
  title: string;
  text: string;
  formattedDate?: string;
};


export default function UseZoomService() {

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


  const [groupedNewsfeed, setGroupedNewsfeed] = useState<Record<number, NewsFeed[]>>({});

  const getMonthName = (monthNumber: number, locale: string = 'fr-FR'): string => {
    return new Date(2000, monthNumber - 1, 1).toLocaleString(locale, { month: 'long' });
  };
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();
  useEffect(() => {
    async function fetchNewfeed() {
      try {
        const BACKEND_URL = URLS.ZOOM_ACTU;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.ZOOM_ACTU is not defined");
        }

        const url = new URL(BACKEND_URL);
        url.searchParams.append("type", "FOCUS");
        url.searchParams.append("year", currentYear.toString());

        const response = await fetch(url.toString(), {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            locale: "fr",
          },
        });

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        const fetchedData: NewsFeed[] = Array.isArray(data) ? data : [data];

        const transformedData: NewsFeed[] = fetchedData
          .filter((item) => item.year === currentYear && item.month <= currentMonth)
          .map((item) => {
            const monthName = getMonthName(item.month);
            const formattedDate = `${monthName}`;
            return { ...item, formattedDate };
          });

        const grouped = transformedData.reduce((acc: Record<number, NewsFeed[]>, item) => {
          const year = item.year;
          if (!acc[year]) {
            acc[year] = [];
          }
          acc[year].push(item);
          return acc;
        }, {});
        setGroupedNewsfeed(grouped);

        sessionStorage.setItem("allNewsItems", JSON.stringify(transformedData));
      } catch (error) {
        handleError(error, "fetching institution");
      }
    }

    fetchNewfeed();
  }, []);


  const handleViewDetails = (item: NewsFeed) => {
    
    sessionStorage.setItem("selectedNewsItem", JSON.stringify(item));
    sessionStorage.setItem("newsFeedList", JSON.stringify(groupedNewsfeed[item.year] || []));
    router.push(`/zoom/${item.id}`);
  };




  return {



    errorMessage,
    handleViewDetails,
    groupedNewsfeed,
    setGroupedNewsfeed,
    setErrorMessage,
    getMonthName,




  }
}