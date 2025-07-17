import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { URLS } from "./url";
import { useTranslation } from "react-i18next";
import UseLanguageService from "./language_switch";

type Category = {
  id: number;
  region: string;
  label: string;
};

type Region = {
  code: string;
  name: string;
};


export default function UseClassementService() {
 const {

   headers


    } = UseLanguageService()


  const [regions, setRegions] = useState<Region[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [code, setCode] = useState<string | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [rankings, setRankings] = useState<any[]>([]);
 
const [errorMessage, setErrorMessage] = useState<string | null>(null);
const [isLoading, setIsLoading] = useState({
  regions: false,
  categories: false,
  rankings: false
});
useEffect(() => {
  async function fetchCountry() {
    setIsLoading(prev => ({...prev, regions: true}));
    try {
      const BACKEND_URL = URLS.RANKING_REGIONS;
      if (!BACKEND_URL) {
        throw new Error("URL pour les régions non définie");
      }

      const response = await fetch(BACKEND_URL, {
        method: "GET",
        headers
      });

    if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status},
            Erreur serveur, veuillez réessayer plus tard`);
        }


      const data = await response.json();
      setRegions(data);
      
      const defaultRegion = data.find((r: any) => r.code === 'CM');
      if (defaultRegion) {
        setSelectedRegion(defaultRegion.name);
        setCode(defaultRegion.code);
      }
    } catch (error: any) {
      handleError(error, "fetching regions");
    } finally {
      setIsLoading(prev => ({...prev, regions: false}));
    }
  }

  fetchCountry();
}, []);

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
  if (code) {
    async function fetchCategories() {
      setIsLoading(prev => ({...prev, categories: true}));
      try {
        const BACKEND_URL = URLS.RANKING_CATEGORIES;
        if (!BACKEND_URL) {
          throw new Error("URL pour les catégories non définie");
        }

        const response = await fetch(`${BACKEND_URL}/${code}`, {
          method: "GET",
         headers,
        });

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status},
            Erreur serveur, veuillez réessayer plus tard`);
        }

        const data: Category[] = await response.json();
        setCategories(data);

        if (data.length > 0) {
          const defaultCat = data[0];
          setSelectedCat(defaultCat.label);
          setId(defaultCat.id);
          setSelectedCategory(defaultCat);
          await handleCategoryClick(defaultCat); 
        }
      } catch (error: any) {
        handleError(error, "fetching categories");
      } finally {
        setIsLoading(prev => ({...prev, categories: false}));
      }
    }

    fetchCategories();
  }
}, [code]);


const handleCategoryClick = async (category: Category) => {
  setSelectedCategory(category);
  setIsLoading(prev => ({...prev, rankings: true}));
  
  try {
    const BACKEND_URL = URLS.RANKING_ITEMS;
    if (!BACKEND_URL) {
      throw new Error("URL pour les classements non définie");
    }

    const queryParams = new URLSearchParams({
      region: code || '',
      catid: category.id.toString(),
    });

    const response = await fetch(`${BACKEND_URL}?${queryParams.toString()}`, {
      method: 'GET',
      headers
    });

   if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status},
            Erreur serveur, veuillez réessayer plus tard`);
        }


    const data = await response.json();
    setRankings(data);
  } catch (error: any) {
    handleError(error, "fetching rankings");
  } finally {
    setIsLoading(prev => ({...prev, rankings: false}));
  }
};
 return {

  regions,
  selectedRegion,
  code,
  id,
  categories,
  selectedCat,
  selectedCategory,
  rankings,
  errorMessage,
  isLoading,
  setCategories,
  setRankings,
  setErrorMessage,
  setRegions,
  setCode,
  setSelectedRegion,
  setSelectedCategory,
  setSelectedCat,
  handleCategoryClick



 }
}