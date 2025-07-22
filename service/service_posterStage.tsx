import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { URLS } from "./url";

import UseLanguageService from "./language_switch";
import { PostInternship } from "@/service/PosterStage";
interface PostInternshipProps {
  publicationDate?: Date;
  deadline?: Date;
  startDate?: Date;
  employer?: string;
  employerDesc?: string;
  city?: string;
  title?: string;
  reference?: string;
  logo?: File;
  level?: string[];
  duration?: string;
  durationUnit?: string;
  remuneration?: string;
  apply?: string;
  employerType?: string[];
  skills?: string;
  tasks?: string;
  address?: string;
  website?: string;
  role?: string;
  adType?: string[];
  firstname?: string;
  lastname?: string;
  phone?: string;
  email?: string;
  sector?: string[];
}


type Sector = {
  key: string;
  text: string;
};
type Status = {
  key: string;
  text: string;
};
type Level = {
  key: string;
  text: string;
};
type Duration = {
  key: string;
  text: string;
};
type Contrat = {
  key: string;
  text: string;
  items?: { key: string; text: string }[];
};

type Parution = {
  key: string;
  text: string;
};
type Employer = {
  id: string;
  name: string;
  type: string;
  typeText: string;
  description: string;
  city: string;

};


export default function UsePosterService() {

  const {

  headers, locale


  } = UseLanguageService()


  const [foas, setSectors] = useState<Sector[]>([]);
  const [status, setStatus] = useState<Status[]>([]);
  const [Levels, setLevels] = useState<Level[]>([]);
  const [durations, setDurations] = useState<Duration[]>([]);
  const [contrats, setContrats] = useState<Contrat[]>([]);
  const [parutions, setParutions] = useState<Parution[]>([]);
  const [employer, setEmployer] = useState<Employer[]>([]);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedContracts, setSelectedContracts] = useState<string[]>([]);
  const [selectedOrgTypes, setSelectedOrgTypes] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const [selectedPublication, setSelectedPublication] = useState<string | null>(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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
    async function fetchSector() {
      try {

        const BACKEND_URL = URLS.GET_INTERNSHIP_SECTOR;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.GET_INTERNSHIP_SECTOR is not defined");
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
        setSectors(data);



      } catch (error: any) {
        handleError(error);
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
          headers,
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
          headers,
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
          headers,
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
          headers,
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
          headers,
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

   useEffect(() => {
    async function fetchEmployer() {
      try {


        const BACKEND_URL = URLS.GET_EMPLOYERS_UPLOAD;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.GET_EMPLOYERS_UPLOAD is not defined");
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
        setEmployer(data);



      } catch (error: any) {
        handleError(error, "fetching employer");
      }
    }

    fetchEmployer();
  }, []);
  const [open, setOpen] = useState<number | null>(null);


  const handleCheckboxChange = (
    type: 'sector' | 'level' | 'adTypes' | 'status',
    value: string
  ) => {
    switch (type) {
      case 'sector':
        setSelectedSectors(prev =>
          prev.includes(value)
            ? prev.filter(v => v !== value)
            : [...prev, value]
        );
        break;
      case 'level':
        setSelectedLevels(prev =>
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
  const handleRadioChange = (type: 'employerType', value: string) => {
    {
      setSelectedOrgTypes(value);
    }
    setOpen(null);
  };

  const handleToggle = (index: any) => {
    setOpen(open === index ? null : index);
  };
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value, type } = e.target;

  if (type === 'file') {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      setElements(prev => updateElement(prev, { [name]: target.files![0] }));
    }
  } else {
    setElements(prev => updateElement(prev, { [name]: value }));
  }
  if (type === 'date') {
  setElements(prev => updateElement(prev, { [name]: new Date(value) }));
}

};

  const [elements, setElements] = useState(new PostInternship());
  function updateElement(
    prev: PostInternship,
    changes: Partial<PostInternshipProps>
  ): PostInternship {
    const merged: PostInternshipProps = {
      ...prev.toObject(),
      ...changes,
    };

    return new PostInternship(merged);
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = new FormData();
   data.append(
  "publicationDate",
  elements.publicationDate instanceof Date && !isNaN(elements.publicationDate.getTime())
    ? elements.publicationDate.toISOString().split('T')[0]
    : ""
);

 data.append(
  "deadline",
  elements.deadline instanceof Date && !isNaN(elements.deadline.getTime())
    ? elements.deadline.toISOString().split('T')[0]
    : ""
);

data.append(
  "startDate",
  elements.startDate instanceof Date && !isNaN(elements.startDate.getTime())
    ? elements.startDate.toISOString().split('T')[0]
    : ""
);

    data.append("employer", elements.employer ?? "");
    data.append("employerDesc", elements.employerDesc ?? "");
    data.append("city", elements.city ?? "");
    data.append("title", elements.title ?? "");
    data.append("reference", elements.reference ?? "");
    data.append("duration", elements.duration ?? "");
    data.append("durationUnit", elements.durationUnit ?? "");
    data.append("remuneration", elements.remuneration ?? "");
    data.append("apply", elements.apply ?? "");
    data.append("skills", elements.skills ?? "");
    data.append("tasks", elements.tasks ?? "");
    data.append("address", elements.address ?? "");
    data.append("website", elements.website ?? "");
    data.append("role", elements.role ?? "");
    data.append("firstname", elements.firstname ?? "");
    data.append("lastname", elements.lastname ?? "");
    data.append("phone", elements.phone ?? "");
    data.append("email", elements.email ?? "");
   data.append("logo", elements.logo ?? "");
    elements.level?.forEach((item: string) => data.append("level", item));
    elements.employerType?.forEach((item: string) => data.append("employerType", item));
    elements.adType?.forEach((item: string) => data.append("adType", item));
    elements.sector?.forEach((item: string) => data.append("sector", item));
console.log(data)
   
    try {
      console.log("Envoi de la requête...");
      const BACKEND_URL = URLS.POST_UPLOAD;


      const response = await fetch(BACKEND_URL, {
        method: "POST",
   headers: {
    'Accept': 'application/json',

    locale: locale || "fr",  
  },
        body: data,
      });


 if (!response.ok) {
        const error = new Error(
          locale === 'en'
            ? `HTTP error: ${response.status}, Please try later`
            : `Erreur HTTP: ${response.status}, Erreur serveur, veuillez réessayer plus tard`
        );
        (error as any).status = response.status;
        throw error;
      }

      const result = await response.json();
      setSuccessMessage("🎉 Votre offre a été bien envoyé, Nous vous reconterons  !");


      console.log("Formulaire soumis avec succès:", result);
      setErrorMessage("");
    } catch (error: any) {

      handleError(error, "fetching institution");
    }
  };


  return {
    handleSubmit,
    elements,
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
    foas,
    handleChange,
 successMessage,

  }
}