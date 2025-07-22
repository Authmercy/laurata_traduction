import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useState } from 'react';
import { URLS } from './url';
import { InternshipFilter } from '@/service/Internship-filter';
import UseLanguageService from './language_switch';
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

export default function ServiceInternshipFilter() {
  const {

    headers


  } = UseLanguageService()

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState(new InternshipFilter());
  const [internships, setInternships] = useState([]);

  const [clicked, setClicked] = useState(false);
  const [foas, setSectors] = useState<Sector[]>([]);
  const [status, setStatus] = useState<Status[]>([]);
  const [degreeLevels, setLevels] = useState<Level[]>([]);
  const [durations, setDurations] = useState<Duration[]>([]);
  const [contrats, setContrats] = useState<Contrat[]>([]);
  const [parutions, setParutions] = useState<Parution[]>([]);

  const [open, setOpen] = useState<number | null>(null);

  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedContracts, setSelectedContracts] = useState<string[]>([]);
  const [selectedOrgTypes, setSelectedOrgTypes] = useState<string[]>([]);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const [selectedPublication, setSelectedPublication] = useState<string | null>(null);

  const allInternships = ["INTERNSHIP_PRO", "INTERNSHIP_ACAD", "INTERNSHIP_FREE"];
  const allEmplois = ["PERMANENT", "FIXED_TERM"];
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

  const handleToggle = (index: any) => {
    setOpen(open === index ? null : index);
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

  const handlePresetSelection = (type: "stage" | "emploi") => {
    const allInternships = ["INTERNSHIP_PRO", "INTERNSHIP_ACAD", "INTERNSHIP_FREE"];
    const allEmplois = ["PERMANENT", "FIXED_TERM"];

    if (type === "stage") {

      const allSelected = allInternships.every(v => selectedContracts.includes(v));

      setSelectedContracts(prev =>
        allSelected
          ? prev.filter(v => !allInternships.includes(v))
          : [
            ...prev.filter(v => !allInternships.includes(v) && !allEmplois.includes(v)),
            ...allInternships
          ]
      );
    }
    else if (type === "emploi") {

      const allSelected = allEmplois.every(v => selectedContracts.includes(v));

      setSelectedContracts(prev =>
        allSelected
          ? prev.filter(v => !allEmplois.includes(v))
          : [
            ...prev.filter(v => !allEmplois.includes(v) && !allInternships.includes(v)),
            ...allEmplois
          ]
      );
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedFilters = new InternshipFilter(
      filters.keywords,
      filters.city,
      filters.enumDuration,
      filters.enumPublicationDate,
      filters.adTypes,
      filters.orgTypes,
      filters.degreeLevels,
      filters.foa,
      filters.page,
      filters.size,

    );

    if (name === "keywords") updatedFilters.setKeyword(value);
    else if (name === "city") updatedFilters.setCity(value);

    setFilters(updatedFilters);
  };





  const isFormEmpty = () => {
    return (
      !filters.keywords &&
      !filters.city &&
      selectedSectors.length === 0 &&
      selectedLevels.length === 0 &&
      !selectedDuration &&
      selectedOrgTypes.length === 0 &&
      selectedContracts.length === 0 &&
      !selectedPublication
    );
  };


  const isSearchDisabled = () => {
    const hasKeywords = filters.keywords.trim() !== "";
    const hasCity = filters.city.trim() !== "";
    const hasSectors = selectedSectors.length > 0;
    const hasLevels = selectedLevels.length > 0;
    const hasContracts = selectedContracts.length > 0;
    const hasOrgTypes = selectedOrgTypes.length > 0;
    const hasDuration = selectedDuration !== "";
    const hasPublication = selectedPublication !== "";


    return !(
      hasKeywords ||
      hasCity ||
      hasSectors ||
      hasLevels ||
      hasContracts ||
      hasOrgTypes ||
      hasDuration ||
      hasPublication
    );
  };



  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    setClicked(true); 
    const newFilters = new InternshipFilter(
      filters.keywords,
      filters.city,
      selectedDuration ?? undefined,
      selectedPublication ?? undefined,
      selectedContracts.length > 0
        ? { condition: "anyOf", values: selectedContracts }
        : undefined,
      selectedOrgTypes.length > 0
        ? { condition: "anyOf", values: selectedOrgTypes }
        : undefined,
      selectedLevels.length > 0
        ? { condition: "anyOf", values: selectedLevels }
        : undefined,
      selectedSectors.length > 0
        ? { condition: "anyOf", values: selectedSectors }
        : undefined,
      filters.page,
      filters.size
    );

    setFilters(newFilters);

    try {
      const BACKEND_URL = URLS.INTERNSHIP_SEARCH;
      if (!BACKEND_URL) {
        throw new Error("Environment variable NEXT_PUBLIC_INTERNSHIP_SEARCH is not defined");
      }

      const payload = newFilters.toJSON();
      console.log("Payload envoyé:", JSON.stringify(payload, null, 2));

      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, body: ${responseText}`);
      }

      const data = JSON.parse(responseText);
      const internshipsArray = data?.content || [];
      const numberElement = data?.totalElements;


      sessionStorage.setItem("searchResults", JSON.stringify(internshipsArray));
      sessionStorage.setItem("numberElementSearch", data.totalElements.toString());
      sessionStorage.setItem("paginationData", JSON.stringify({
        pageNumber: data.pageable?.pageNumber,
        pageSize: data.size,
        totalPages: data.totalPages,
        totalElements: data.totalElements,
        first: data.first,
        last: data.last
      }));



  setTimeout(() => setClicked(false), 200);
      setInternships(internshipsArray);

      router.push({
        pathname: "/students/resultatRecherche",
        query: {
          keywords: newFilters.keywords,
          city: newFilters.city,
          enumDuration: newFilters.enumDuration,
          enumPublicationDate: newFilters.enumPublicationDate,
          page: newFilters.page.toString(),
          size: newFilters.size.toString(),
          ...(newFilters.foa && { foa: JSON.stringify(newFilters.foa) }),
          ...(newFilters.adTypes && { adTypes: JSON.stringify(newFilters.adTypes) }),
          ...(newFilters.orgTypes && { orgTypes: JSON.stringify(newFilters.orgTypes) }),
          ...(newFilters.degreeLevels && { degreeLevels: JSON.stringify(newFilters.degreeLevels) }),
        },
      });

    } catch (error: any) {
      console.error("Erreur lors de la récupération des stages:", error.message);
      handleError(error, "error doing research");
    }
  };


  return {
    errorMessage,
    setErrorMessage,
    handleToggle,
    router,
    filters,
    setFilters,
    internships,
    setInternships,
    foas,
    setSectors,
    status,
    setStatus,
    degreeLevels,
    setLevels,
    setDurations,
    durations,
    contrats,
    setContrats,
    parutions,
    setParutions,
    open,
    setOpen,
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
    setSelectedDuration,
    handleCheckboxChange,
    handleRadioChange,
    handleChange,
    isSearchDisabled,
    handleSearch,
    handlePresetSelection,
    clicked,
    isFormEmpty,
    allEmplois,
    allInternships

  }





















}
