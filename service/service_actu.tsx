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


export default function UseActuService() {

  const [newsfeed, setNewsfeed] = useState<NewsFeed[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
   const [selectedItem, setSelectedItem] = useState<NewsFeed | null>(null);
   const [clicked, setClicked] = useState(false);
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
    async function fetchNewsfeed() {
      try {
        const BACKEND_URL = URLS.ZOOM_ACTU;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.ZOOM_ACTU is not defined");
        }
        const url = new URL(BACKEND_URL);
        url.searchParams.append("type", "NEWS");
        const response = await fetch(url.toString(), {
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

        setNewsfeed(Array.isArray(data) ? data : [data]);
      } catch (error) {
        handleError(error, "fetching institution");
      } finally {
        setLoading(false);
      }
    }

    fetchNewsfeed();
  }, []);

  const getMonthName = (monthNumber: number): string => {
    const months = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];
    return months[monthNumber - 1] || "Mois inconnu";
  };

  const groupedByMonth = newsfeed.reduce((acc, item) => {
    const monthKey = `${item.year}-${item.month}`;
    if (!acc[monthKey]) acc[monthKey] = [];
    acc[monthKey].push(item);
    return acc;
  }, {} as Record<string, NewsFeed[]>);

  const handleViewDetails = (item: NewsFeed) => {
    setClicked(true);
    sessionStorage.setItem("selectedNewsItem", JSON.stringify(item));
    router.push(`/actu/${item.id}`);
  };
  const handleItemClick = (item: NewsFeed) => {
    setSelectedItem(item);
  };

  return {


newsfeed,

    errorMessage,
    selectedItem,
    clicked,
    setClicked,
    setSelectedItem,
    groupedByMonth,
    handleViewDetails,
    handleItemClick,
    
    setErrorMessage,
    getMonthName,
   


  }
}