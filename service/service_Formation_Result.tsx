import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { URLS } from './url';
import { SchoolFilter } from './SchoolProgram-filter';
import { useTranslation } from 'react-i18next';
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



export default function ServiceFormationResult() {
      const { i18n } = useTranslation();
      const currentLanguage = i18n.language; 
    const [training, setTraining] = useState<Training[]>([]);
    const [studyFields, setStudyFields] = useState<StudyFields[]>([]);
    const [degreeLevels, setDegreeLevels] = useState<DegreeLevel[]>([]);
    const [admission, setAdmission] = useState<Admission[]>([]);
    const [disabilities, setDisabilities] = useState<Disabilities[]>([]);
    const [schoolTypes, setSchoolType] = useState<SchoolType[]>([]);
    const [trainingMode, setTrainingMode] = useState<TrainingMode[]>([]);
    const [clicked, setClicked] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [open, setOpen] = useState<number | null>(null);
  const [totalElements, setTotalElements] = useState<string | null>(null);  const router = useRouter();
    const [programs, setProgram] = useState<FormationFilters[]>([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);
    const [offerList, setOfferList] = useState<any[]>([]);
const [isModified, setIsModified] = useState(false);
    const [formValues, setFormValues] = useState({


        school: '',
        city: '',
        enumLanguage: '',

        diploma: '',
        enumFees: '',
        schoolType: { condition: 'anyOf', values: [] as string[] },
        training: { condition: 'anyOf', values: [] as string[] },
        disabilities: { condition: 'anyOf', values: [] as string[] },
        degreeLevels: { condition: 'anyOf', values: [] as string[] },
        admission: { condition: 'anyOf', values: [] as string[] },

        studyFields: { condition: 'anyOf', values: [] as string[] },

        trainingMode: { condition: 'anyOf', values: [] as string[] },
        page: 0,
        size: 10
    });

    const [pagination, setPagination] = useState({
        pageNumber: 0,
        pageSize: 25,
        totalPages: 1,
        totalElements: 0,
        first: true,
        last: false
    });

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
                        locale: currentLanguage,
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
                        locale: currentLanguage,
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
                        locale: currentLanguage,
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
                        locale: currentLanguage,
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
                        locale: currentLanguage,
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
                        locale: currentLanguage,
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
                        locale: currentLanguage,
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

    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedResults = sessionStorage.getItem("searchResults");
            const paginationData = sessionStorage.getItem("paginationData");

            if (storedResults && paginationData) {
                try {
                    const parsedResults = JSON.parse(storedResults);
                    const parsedPagination = JSON.parse(paginationData);

                    setPagination(parsedPagination);
                  setProgram(parsedResults);
                    setTotal(parsedPagination.totalElements);
                    setLoading(false);
                } catch (error) {
                    handleError(error, "error doing research");
                }
            }
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
         setIsModified(true);
        setFormValues(prev => ({ ...prev, [name]: value }));
    };

    const handlePageChange = async (newPage: number) => {
        try {
            setLoading(true);
            const queryParams = new URLSearchParams(window.location.search);

            const getObjectParam = (params: URLSearchParams, key: string) => {
                try {
                    const value = params.get(key);
                    return value ? JSON.parse(value) : undefined;
                } catch (e) {
                    console.error(`Error parsing ${key}:`, e);
                    return undefined;
                }
            };

            const filters = {
                school: queryParams.get('school') || '',
                city: queryParams.get('city') || '',
                enumLanguage: queryParams.get('enumLanguage') || undefined,
                page: newPage,
                size: pagination.pageSize,
                diploma: queryParams.get('diploma') || undefined,
                enumFees: queryParams.get('enumFees') || undefined,
                schoolType: getObjectParam(queryParams, 'schoolType'),
                training: getObjectParam(queryParams, 'training'),
                disabilities: getObjectParam(queryParams, 'disabilities'),
                degreeLevels: getObjectParam(queryParams, 'degreeLevels'),
                admission: getObjectParam(queryParams, 'admission'),
                sort: queryParams.get('sort') ? JSON.parse(queryParams.get('sort')!) as SortOptions : undefined,
                studyFields: getObjectParam(queryParams, 'studyFields'),
                trainingMode: getObjectParam(queryParams, 'trainingMode')
            };

            const response = await fetch(URLS.PROGRAM_SEARCH, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    locale: currentLanguage,
                },
                body: JSON.stringify(filters),
            });

            const data = await response.json();

            setProgram(data.content);
            setPagination({
                pageNumber: data.pageable?.pageNumber,
                pageSize: data.size,
                totalPages: data.totalPages,
                totalElements: data.totalElements,
                first: data.first,
                last: data.last
            });

            sessionStorage.setItem("searchResults", JSON.stringify(data.content));
            sessionStorage.setItem("paginationData", JSON.stringify({
                pageNumber: data.number,
                pageSize: data.size,
                totalPages: data.totalPages,
                totalElements: data.totalElements,
                first: data.first,
                last: data.last
            }));


            setLoading(false);
        } catch (error) {
            handleError(error, "error doing research");
            console.error("Error changing page:", error);
            setLoading(false);
        }
    };

    const handleNextPage = () => {
        if (!pagination.last) {
            handlePageChange(pagination.pageNumber + 1);
        }
    };

    const handlePrevPage = () => {
        if (!pagination.first) {
            handlePageChange(pagination.pageNumber - 1);
        }
    };

    const SkeletonLoader = () => (
        <div className="animate-pulse ml-6 bg-white/70 shadow-sm mb-2 h-64 rounded">
            <div className="h-full flex flex-col justify-center items-center">
                <div className="bg-gray-300 h-8 w-2/3 mb-4 rounded" />
                <div className="bg-gray-300 h-6 w-1/3 mb-2 rounded" />
                <div className="bg-gray-300 h-6 w-1/4 mb-2 rounded" />
                <div className="bg-gray-300 h-6 w-1/2 rounded" />
            </div>
        </div>
    );



    const handleCheckboxChange = (filterType: 'training' | 'degreeLevels' | 'disabilities' | 'admission' | 'schoolType' | 'studyFields' | 'trainingMode') =>
        (value: string, isChecked: boolean) => {
            setFormValues(prev => {
                const currentValues = prev[filterType]?.values || [];
                const newValues = isChecked
                    ? [...currentValues, value]
                    : currentValues.filter(v => v !== value);

                return {
                    ...prev,
                    [filterType]: {
                        condition: 'anyOf',
                        values: newValues
                    }
                };
            });
             setIsModified(true);
        };



    const fetchJobOffers = async (filters: typeof formValues) => {
        setLoading(true);
        try {
            const nonEmptyFilter = (f?: { condition: string; values: string[] }) =>
                f && f.values.length ? f : undefined;

            const newFilters = new SchoolFilter(
                filters.school,
                filters.city,
                filters.enumFees || undefined,
                nonEmptyFilter(filters.schoolType),
                nonEmptyFilter(filters.training),
                nonEmptyFilter(filters.studyFields),
                nonEmptyFilter(filters.trainingMode),
                filters.enumLanguage || undefined,
                nonEmptyFilter(filters.disabilities),
                nonEmptyFilter(filters.degreeLevels),
                nonEmptyFilter(filters.admission),
                filters.page,
                filters.diploma || undefined,


                filters.size
            );




            const BACKEND_URL = URLS.PROGRAM_SEARCH;
            if (!BACKEND_URL) {
                throw new Error("Environment variable PROGRAM_SEARCH is not defined");
            }

            const response = await fetch(BACKEND_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    locale: currentLanguage,
                },
                body: JSON.stringify(newFilters.toJSON()),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setProgram(data.content || []);
            setTotal(data.totalElements);

            setPagination({
                pageNumber: data.pageable?.pageNumber,
                pageSize: data.size,
                totalPages: data.totalPages,
                totalElements: data.totalElements,
                first: data.first,
                last: data.last
            });
            sessionStorage.setItem("searchResults", JSON.stringify(data.content));
            sessionStorage.setItem("numberElementSearch", data.totalElements.toString());
           setTotalElements (data.totalElements.toString())
            sessionStorage.setItem("paginationData", JSON.stringify({
                pageNumber: data.number,
                pageSize: data.size,
                totalPages: data.totalPages,
                totalElements: data.totalElements,
                first: data.first,
                last: data.last
            }));


        } catch (error: any) {
            console.error("Erreur lors de la récupération des stages:", error.message);
            handleError(error, "error doing research");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (router.isReady) {
            setLoading(true);
            const query = router.query;

            const newFormValues = {
                school: query.school as string || '',
                city: query.city as string || '',
                enumLanguage: query.enumLanguage as string || '',
                diploma: query.diploma as string || '',
                page: Number(query.page) || 0,
                size: Number(query.size) || 10,
                enumFees: query.enumFees as string || '',
                schoolType: query.schoolType
                    ? JSON.parse(query.schoolType as string)
                    : { condition: 'anyOf', values: [] },
                training: query.training
                    ? JSON.parse(query.training as string)
                    : { condition: 'anyOf', values: [] },
                disabilities: query.disabilities
                    ? JSON.parse(query.disabilities as string)
                    : { condition: 'anyOf', values: [] },
                degreeLevels: query.degreeLevels
                    ? JSON.parse(query.degreeLevels as string)
                    : { condition: 'anyOf', values: [] },
                admission: query.admission
                    ? JSON.parse(query.admission as string)
                    : { condition: 'anyOf', values: [] },
                studyFields: query.studyFields
                    ? JSON.parse(query.studyFields as string)
                    : { condition: 'anyOf', values: [] },
                trainingMode: query.trainingMode
                    ? JSON.parse(query.trainingMode as string)
                    : { condition: 'anyOf', values: [] }
            };


            setFormValues(newFormValues);
            fetchJobOffers(newFormValues);
        }
    }, [router.isReady, router.query]);


    const searchParams = {
        school: formValues.school,
        city: formValues.city,
        enumFees: formValues.enumFees,
        page: formValues.page.toString(),
        size: formValues.size.toString(),
        enumLanguage: formValues.enumLanguage,
        diploma: formValues.diploma,
        ...(formValues.schoolType.values.length && { schoolType: JSON.stringify(formValues.schoolType) }),
        ...(formValues.training.values.length && { training: JSON.stringify(formValues.training) }),
        ...(formValues.studyFields.values.length && { studyFields: JSON.stringify(formValues.studyFields) }),
        ...(formValues.trainingMode.values.length && { trainingMode: JSON.stringify(formValues.trainingMode) }),
        ...(formValues.disabilities.values.length && { disabilities: JSON.stringify(formValues.disabilities) }),
        ...(formValues.degreeLevels.values.length && { degreeLevels: JSON.stringify(formValues.degreeLevels) }),
        ...(formValues.admission.values.length && { admission: JSON.stringify(formValues.admission) }),
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setClicked(true);
        setLoading(true);


        sessionStorage.setItem("searchParams", JSON.stringify(searchParams));

setIsModified(false)
        await router.replace({
            pathname: "/students/resultatFormation",
            query: searchParams

        });

        fetchJobOffers(formValues);
    };

    const getAllContractOptions = () => {
        const flat: { key: string; text: string }[] = [];

        degreeLevels.forEach(c => {
            if (c.items) {
                c.items.forEach(item => flat.push(item));
            } else {
                flat.push(c);
            }
        });

        return flat;
    };


    const handleClick = (id: number) => {



        sessionStorage.setItem("searchParams", JSON.stringify(searchParams));

        router.push(`/students/formation/${id}`);
    };







    return {
            totalElements,
        getAllContractOptions,
        errorMessage,
        setErrorMessage,
        handleToggle,
        router,
        pagination,
        setPagination,
        schoolTypes,
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
        handleClick,
isModified,
        open,
        setOpen,
        trainingMode,
        programs,
        loading,
        setLoading,
        setTotal,
        total,
        setFormValues,
        formValues,
        handleInputChange,
        handlePageChange,
        handleNextPage,
        handleCheckboxChange,
        handlePrevPage,
        SkeletonLoader,
        handleSubmit,


    };
}