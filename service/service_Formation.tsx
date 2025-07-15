import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useState } from 'react';
import { URLS } from './url';
import { SchoolFilter } from './SchoolProgram-filter';


type Training = {
  key: string;
  text: string;
};
type DegreeLevel = {
  key: string;
  text: string;
  items?: { key: string; text: string }[];
};
type StudyFields = {
  key: string;
  text: string;
};
type Admission = {
  key: string;
  text: string;

};

type Disabilities = {
  key: string;
  text: string;
};
type SchoolType = {
  key: string;
  text: string;
};
type TrainingMode = {
  key: string;
  text: string;
};


export default function ServiceFormationFilter() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState(new SchoolFilter());
  const [program, setProgram] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [training, setTraining] = useState<Training[]>([]);
  const [studyFields, setStudyFields] = useState<StudyFields[]>([]);
  const [degreeLevels, setDegreeLevels] = useState<DegreeLevel[]>([]);
  const [admission, setAdmission] = useState<Admission[]>([]);
  const [disabilities, setDisabilities] = useState<Disabilities[]>([]);
  const [schoolType, setSchoolType] = useState<SchoolType[]>([]);
  const [trainingMode, setTrainingMode] = useState<TrainingMode[]>([]);
  const [open, setOpen] = useState<number | null>(null);
  const [selectedTraining, setSelectedTraining] = useState<string[]>([]);
  const [selectedDegreeLevels, setSelectedDegreeLevels] = useState<string[]>([]);
  const [selectedDisabilities, setSelectedDisabilities] = useState<string[]>([]);
  const [selectedAdmission, setSelectedAdmission] = useState<string[]>([]);
  const [selectedSchoolType, setSelectedSchoolType] = useState<string[]>([]);
  const [selectedStudyFields, setSelectedStudyFields] = useState<string[]>([]);
  const [selectedTrainingMode, setSelectedTrainingMode] = useState<string[]>([]);


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
    async function fetchTraining() {
      try {

        const BACKEND_URL = URLS.GET_PROGRAM_TRAINING;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.GET_PROGRAM_TRAINING is not defined");
        }
        const response = await fetch(BACKEND_URL, {
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
        setTraining(data);



      } catch (error: any) {
        handleError(error, "fetching regions");
      }
    }

    fetchTraining();
  }, []);

  useEffect(() => {
    async function fetchStudyFields() {
      try {

        const BACKEND_URL = URLS.GET_PROGRAM_DOMAIN;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.GET_PROGRAM_DOMAIN is not defined");
        }
        const response = await fetch(BACKEND_URL, {
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
        setStudyFields(data);



      } catch (error: any) {
        handleError(error, "fetching regions");
      }
    }

    fetchStudyFields();
  }, []);

  useEffect(() => {
    async function fetchLevels() {
      try {


        const BACKEND_URL = URLS.GET_PROGRAM_DEGREE_LEVEL;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.GET_PROGRAM_DEGREE_LEVEL is not defined");
        }
        const response = await fetch(BACKEND_URL, {
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
        setDegreeLevels(data);



      } catch (error: any) {
        handleError(error, "fetching DegreeLevel");
      }
    }

    fetchLevels();
  }, []);

  useEffect(() => {
    async function fetchAdmission() {
      try {


        const BACKEND_URL = URLS.GET_PROGRAM_ADMISSION;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.GET_PROGRAM_ADMISSION is not defined");
        }
        const response = await fetch(BACKEND_URL, {
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
        setAdmission(data);
        console.log(data)


      } catch (error: any) {
        handleError(error, "fetching Admission");
      }
    }

    fetchAdmission();
  }, []);

  useEffect(() => {
    async function fetchDisabilities() {
      try {


        const BACKEND_URL = URLS.GET_PROGRAM_DISABILITIES;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.GET_PROGRAM_DISABILITIES is not defined");
        }
        const response = await fetch(BACKEND_URL, {
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
        setDisabilities(data);


      } catch (error: any) {
        handleError(error, "fetching Disabilities");
      }
    }

    fetchDisabilities();
  }, []);
  useEffect(() => {
    async function fetchTrainingMode() {
      try {


        const BACKEND_URL = URLS.GET_PROGRAM_TRAINING_MODE;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.GET_PROGRAM_TRAINING_MODE is not defined");
        }
        const response = await fetch(BACKEND_URL, {
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
        setTrainingMode(data);


      } catch (error: any) {
        handleError(error, "fetching TrainingMode");
      }
    }

    fetchTrainingMode();
  }, []);

  useEffect(() => {
    async function fetchSchoolType() {
      try {


        const BACKEND_URL = URLS.GET_PROGRAM_STATUS;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.GET_PROGRAM_STATUS is not defined");
        }
        const response = await fetch(BACKEND_URL, {
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
        setSchoolType(data);



      } catch (error: any) {
        handleError(error, "fetching SchoolType");
      }
    }

    fetchSchoolType();
  }, []);

  const handleCheckboxChange = (
    type: 'training' | 'degreeLevels' | 'disabilities' | 'admission' | 'schoolType' | 'studyFields' | 'trainingMode',
    value: string
  ) => {
    switch (type) {
      case 'training':
        setSelectedTraining(prev =>
          prev.includes(value)
            ? prev.filter(v => v !== value)
            : [...prev, value]
        );
        break;
      case 'degreeLevels':
        setSelectedDegreeLevels(prev =>
          prev.includes(value)
            ? prev.filter(v => v !== value)
            : [...prev, value]
        );
        break;
      case 'disabilities':
        setSelectedDisabilities(prev =>
          prev.includes(value)
            ? prev.filter(v => v !== value)
            : [...prev, value]
        );
        break;
      case 'admission':
        setSelectedAdmission(prev =>
          prev.includes(value)
            ? prev.filter(v => v !== value)
            : [...prev, value]
        );
        break;
      case 'schoolType':
        setSelectedSchoolType(prev =>
          prev.includes(value)
            ? prev.filter(v => v !== value)
            : [...prev, value]
        );
        break;
      case 'studyFields':
        setSelectedStudyFields(prev =>
          prev.includes(value)
            ? prev.filter(v => v !== value)
            : [...prev, value]
        );
        break;
      case 'trainingMode':
        setSelectedTrainingMode(prev =>
          prev.includes(value)
            ? prev.filter(v => v !== value)
            : [...prev, value]
        );
        break;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const updatedFilters = new SchoolFilter(
      name === "school" ? value : filters.school,
      name === "city" ? value : filters.city,
      filters.enumFees,
      filters.schoolType,
      filters.training,
      filters.studyFields,
      filters.trainingMode,
      filters.enumLanguage,
      filters.disabilities,
      filters.degreeLevels,
      filters.admission,
      filters.page,
      filters.diploma,
      filters.size,
      filters.sort
    );

    setFilters(updatedFilters);
  };



  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    setClicked(true);

    const newFilters = new SchoolFilter(

      filters.school,

      filters.city,

      filters.enumFees,
      selectedSchoolType.length > 0
        ? { condition: "anyOf", values: selectedSchoolType }
        : undefined,
      selectedTraining.length > 0
        ? { condition: "anyOf", values: selectedTraining }
        : undefined,

      selectedStudyFields.length > 0
        ? { condition: "anyOf", values: selectedStudyFields }
        : undefined,

      selectedTrainingMode.length > 0
        ? { condition: "anyOf", values: selectedTrainingMode }
        : undefined,
      filters.enumLanguage,
      selectedDisabilities.length > 0
        ? { condition: "anyOf", values: selectedDisabilities }
        : undefined,
      selectedDegreeLevels.length > 0
        ? { condition: "anyOf", values: selectedDegreeLevels }
        : undefined,
      selectedAdmission.length > 0
        ? { condition: "anyOf", values: selectedAdmission }
        : undefined,
      filters.page || 0,
      filters.diploma,
      filters.size || 15,
      filters.sort,
    );
    setFilters(newFilters);

    try {
      const BACKEND_URL = URLS.PROGRAM_SEARCH;
      if (!BACKEND_URL) {
        throw new Error("Environment variable PROGRAM_SEARCH is not defined");
      }

      const payload = newFilters.toJSON();


      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          locale: "fr",
        },
        body: JSON.stringify(payload),
      });


      const responseText = await response.text();
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, body: ${responseText}`);
      }
      console.log(responseText)

      const data = JSON.parse(responseText);
      const internshipsArray = data?.content || [];
      const numberElement = data?.totalElements;
      console.log(data)

      sessionStorage.setItem("searchResults", JSON.stringify(internshipsArray));
      sessionStorage.setItem("numberElementSearch", data.totalElements.toString());
      sessionStorage.setItem("paginationData", JSON.stringify({
        pageNumber: data.number,
        pageSize: data.size,
        totalPages: data.totalPages,
        totalElements: data.totalElements,
        first: data.first,
        last: data.last
      }));



      setProgram(internshipsArray);

      router.push({
        pathname: "/students/resultatFormation",
        query: {
          school: newFilters.school,
          city: newFilters.city,
          enumFees: newFilters.enumFees,
          page: newFilters.page.toString(),
          size: newFilters.size.toString(),
          ...(newFilters.enumLanguage && { enumLanguage: newFilters.enumLanguage }),
          ...(newFilters.diploma && { diploma: newFilters.diploma }),
          ...(newFilters.schoolType && { schoolType: JSON.stringify(newFilters.schoolType) }),
          ...(newFilters.training && { training: JSON.stringify(newFilters.training) }),
          ...(newFilters.studyFields && { studyFields: JSON.stringify(newFilters.studyFields) }),
          ...(newFilters.trainingMode && { trainingMode: JSON.stringify(newFilters.trainingMode) }),
          ...(newFilters.disabilities && { disabilities: JSON.stringify(newFilters.disabilities) }),
          ...(newFilters.degreeLevels && { degreeLevels: JSON.stringify(newFilters.degreeLevels) }),
          ...(newFilters.admission && { admission: JSON.stringify(newFilters.admission) }),
        }
      });

    } catch (error: any) {
      console.error("Erreur lors de la récupération des fortmation:", error.message);
      handleError(error, "error doing research");
    }
  };




const isFormEmpty = () => {
  return (
    !filters.school &&
    !filters.city &&
    selectedDegreeLevels.length === 0 
   
  );
};


const isSearchDisabled = () => {
  const hasKeywords = filters.school.trim() !== "";
  const hasCity = filters.city.trim() !== "";
  const hasSectors = selectedDegreeLevels.length > 0;
 
  
  
  return !(
    hasKeywords ||
    hasCity ||
    hasSectors 
  );
};















  return {
    errorMessage,
    setErrorMessage,
    router,
    error,
    setError,
    filters,
    setFilters,
    program,
    setProgram,
    clicked,
    setClicked,
    training,
    setTraining,
    studyFields,
    setStudyFields,
    degreeLevels,
    setDegreeLevels,
    admission,
    setAdmission,
    disabilities,
    setDisabilities,
    schoolType,
    setSchoolType,
    open,
    setOpen,
    selectedTraining,
    setSelectedTraining,
    selectedDegreeLevels,
    setSelectedDegreeLevels,
    selectedDisabilities,
    setSelectedDisabilities,
    selectedAdmission,
    setSelectedAdmission,
    selectedSchoolType,
    setSelectedSchoolType,
    selectedStudyFields,
    setSelectedStudyFields,
    handleToggle,
    setTrainingMode,
    trainingMode,
    selectedTrainingMode,
    setSelectedTrainingMode,
    handleCheckboxChange,
    handleChange,
    handleSearch,
    isSearchDisabled,
    isFormEmpty
  };
}