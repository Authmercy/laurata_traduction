import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { URLS } from "./url";


type Contact = {
    id: number;
    location: number;
    phones: string;
    mail: string;
    website: string;
}
type Company = {
    id: number;
    name: string;
    shortName: string;
    logoId: string;
    city: string;
    diapositives: string[];
    description: string[];
    activities: string[];

    portfolio: string[];
    jobs: string[];
    video: string;
    contact: Contact[];
}


export default function UseEntrepriseUneService() {
    const router = useRouter();
    const [companies, setCompanies] = useState<Company[]>([]);
    const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

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
        async function fetchCompanies() {
            try {
                const BACKEND_URL = URLS.ONDISPLAY_EMPLOYERS;
                if (!BACKEND_URL) {
                    throw new Error("Environment variable URLS.ONDISPLAY_EMPLOYERS is not defined");
                }

                const response = await fetch(BACKEND_URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        locale: "fr",
                    },
                });

                console.log("URL used:", BACKEND_URL);

                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status},
                       Erreur serveur, veuillez réessayer plus tard`);
                }
                const data = await response.json();
                const companiesList = Array.isArray(data) ? data : [data];
                setCompanies(companiesList);
                setSelectedCompany(companiesList[0]);
            } catch (error) {
                handleError(error, "fetching institution");
            } finally {
                setLoading(false);
            }
        }

        fetchCompanies();
    }, []);


    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = e.target.value;
        const company = companies.find(c => c.id.toString() === selectedId);
        setSelectedCompany(company ?? null);
    };

  const [open, setOpen] = useState(null);

    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };

   
 const images = [
        "/images/background.png",
        "/images/backgroundEtudiant.jpeg",
        "/images/image.png",
    ];
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return {

 nextSlide,
  prevSlide,
        companies,
        errorMessage,
        handleSelectChange,
        selectedCompany,
        setSelectedCompany,
        loading,
        open,
        setLoading,
        setErrorMessage




    }
}