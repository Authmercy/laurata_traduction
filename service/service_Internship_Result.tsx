import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { URLS } from './url';
import { InternshipFilter } from '@/service/Internship-filter';


export default function ServiceInternshipResult() {
    const [foas, setSectors] = useState<Sector[]>([]);
    const [status, setStatus] = useState<Status[]>([]);
    const [Levels, setLevels] = useState<Level[]>([]);
    const [durations, setDurations] = useState<Duration[]>([]);
    const [contrats, setContrats] = useState<Contrat[]>([]);
    const [parutions, setParutions] = useState<Parution[]>([]);
    const [clicked, setClicked] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [open, setOpen] = useState<number | null>(null);
    const router = useRouter();
    const [jobOffers, setJobOffers] = useState<JobOffer[]>([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);
    const [offerList, setOfferList] = useState<any[]>([]);
    const { keywords, city, adTypes, orgTypes, degreeLevels, foa, enumPublicationDate, enumDuration } = router.query;
    const [isModified, setIsModified] = useState(false);
    const [formValues, setFormValues] = useState({
        keywords: '',
        city: '',
        enumDuration: '',
        enumPublicationDate: '',
        foa: { condition: 'anyOf', values: [] as string[] },
        degreeLevels: { condition: 'anyOf', values: [] as string[] },
        orgTypes: { condition: 'anyOf', values: [] as string[] },
        adTypes: { condition: 'anyOf', values: [] as string[] },
        page: 0,
        size: 10
    });

    const [pagination, setPagination] = useState({
        pageNumber: 0,
        pageSize: 15,
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
        async function fetchSector() {
            try {
                const BACKEND_URL = URLS.GET_INTERNSHIP_SECTOR;
                if (!BACKEND_URL) {
                    throw new Error("Environment variable URLS.GET_INTERNSHIP_SECTOR is not defined");
                }
                const response = await fetch(BACKEND_URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        locale: "fr",
                    },
                });
                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}, Erreur serveur, veuillez réessayer plus tard`);
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
                    headers: {
                        "Content-Type": "application/json",
                        locale: "fr",
                    },
                });
                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}, Erreur serveur, veuillez réessayer plus tard`);
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
                    headers: {
                        "Content-Type": "application/json",
                        locale: "fr",
                    },
                });
                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}, Erreur serveur, veuillez réessayer plus tard`);
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
                    headers: {
                        "Content-Type": "application/json",
                        locale: "fr",
                    },
                });
                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}, Erreur serveur, veuillez réessayer plus tard`);
                }
                const data = await response.json();
                setDurations(data);
                console.log(data);
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
                    headers: {
                        "Content-Type": "application/json",
                        locale: "fr",
                    },
                });
                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}, Erreur serveur, veuillez réessayer plus tard`);
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
                    headers: {
                        "Content-Type": "application/json",
                        locale: "fr",
                    },
                });
                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}, Erreur serveur, veuillez réessayer plus tard`);
                }
                const data = await response.json();
                setParutions(data);
            } catch (error: any) {
                handleError(error, "fetching Parutions");
            }
        }
        fetchParutions();
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
                    setJobOffers(parsedResults);
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
                keywords: queryParams.get('keywords') || undefined,
                city: queryParams.get('city') || undefined,
                enumDuration: queryParams.get('enumDuration') || undefined,
                enumPublicationDate: queryParams.get('enumPublicationDate') || undefined,
                page: newPage,
                size: pagination.pageSize,
                foa: getObjectParam(queryParams, 'foa'),
                adTypes: getObjectParam(queryParams, 'adTypes'),
                orgTypes: getObjectParam(queryParams, 'orgTypes'),
                degreeLevels: getObjectParam(queryParams, 'degreeLevels')
            };

            const response = await fetch(URLS.INTERNSHIP_SEARCH, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    locale: "fr",
                },
                body: JSON.stringify(filters),
            });

            const data = await response.json();

            setJobOffers(data.content);
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
                pageNumber: data.pageable?.pageNumber,
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



    const handleCheckboxChange = (filterType: 'foa' | 'degreeLevels' | 'adTypes' | 'orgTypes') =>
        (value: string, isChecked: boolean) => {
              setIsModified(true);
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
            }
        );
         
        };

    const handleRadioChange = (filterType: 'enumDuration' | 'enumPublicationDate') =>
        (value: string) => {
            setFormValues(prev => ({ ...prev, [filterType]: value }));
            setIsModified(true);
        };

    const fetchJobOffers = async (filters: typeof formValues) => {
        setLoading(true);
        try {
            const newFilters = new InternshipFilter(
                filters.keywords,
                filters.city,
                filters.enumDuration || undefined,
                filters.enumPublicationDate || undefined,
                filters.adTypes.values.length ? filters.adTypes : undefined,
                filters.orgTypes.values.length ? filters.orgTypes : undefined,
                filters.degreeLevels.values.length ? filters.degreeLevels : undefined,
                filters.foa.values.length ? filters.foa : undefined,
                filters.page,
                filters.size
            );

            const BACKEND_URL = URLS.INTERNSHIP_SEARCH;
            if (!BACKEND_URL) {
                throw new Error("Environment variable NEXT_PUBLIC_INTERNSHIP_SEARCH is not defined");
            }

            const response = await fetch(BACKEND_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    locale: "fr",
                },
                body: JSON.stringify(newFilters.toJSON()),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setJobOffers(data.content || []);
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
            sessionStorage.setItem("paginationData", JSON.stringify({
                pageNumber: data.pageable?.pageNumber,
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
                keywords: query.keywords as string || '',
                city: query.city as string || '',
                enumDuration: query.enumDuration as string || '',
                enumPublicationDate: query.enumPublicationDate as string || '',
                page: Number(query.page) || 0,
                size: Number(query.size) || 10,
                foa: query.foa
                    ? JSON.parse(query.foa as string)
                    : { condition: 'anyOf', values: [] },
                adTypes: query.adTypes
                    ? JSON.parse(query.adTypes as string)
                    : { condition: 'anyOf', values: [] },
                orgTypes: query.orgTypes
                    ? JSON.parse(query.orgTypes as string)
                    : { condition: 'anyOf', values: [] },
                degreeLevels: query.degreeLevels
                    ? JSON.parse(query.degreeLevels as string)
                    : { condition: 'anyOf', values: [] }
            };

            setFormValues(newFormValues);
            fetchJobOffers(newFormValues);
        }
    }, [router.isReady, router.query]);


    const searchParams = {
        keywords: formValues.keywords,
        city: formValues.city,
        enumDuration: formValues.enumDuration,
        enumPublicationDate: formValues.enumPublicationDate,
        page: pagination.pageNumber.toString(),
        size: pagination.pageSize.toString(),
        ...(formValues.foa.values.length && { foa: JSON.stringify(formValues.foa) }),
        ...(formValues.adTypes.values.length && { adTypes: JSON.stringify(formValues.adTypes) }),
        ...(formValues.orgTypes.values.length && { orgTypes: JSON.stringify(formValues.orgTypes) }),
        ...(formValues.degreeLevels.values.length && { degreeLevels: JSON.stringify(formValues.degreeLevels) }),
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setClicked(true);
        setLoading(true);
        setIsModified(false);



        sessionStorage.setItem("searchParams", JSON.stringify(searchParams));

        await router.replace({
            pathname: "/students/resultatRecherche",
            query: searchParams,
        });

        fetchJobOffers(formValues);
    };

    const getAllContractOptions = () => {
        const flat: { key: string; text: string }[] = [];

        contrats.forEach(c => {
            if (c.items) {
                c.items.forEach(item => flat.push(item));
            } else {
                flat.push(c);
            }
        });

        return flat;
    };

    const isSearchDisabled = () => {
        return (
            !formValues.keywords &&
            !formValues.city &&
            (!formValues.adTypes || formValues.adTypes.values.length === 0) &&
            (!formValues.orgTypes || formValues.orgTypes.values.length === 0) &&
            (!formValues.foa || formValues.foa.values.length === 0) &&
            !formValues.enumPublicationDate &&
            !formValues.enumDuration
        );
    };
    const handleClick = (id: number) => {



        sessionStorage.setItem("searchParams", JSON.stringify(searchParams));

        router.push(`/students/stage/${id}`);
    };
    return {
        handleClick,
        getAllContractOptions,
        errorMessage,
        setErrorMessage,
        handleToggle,
        router,
        pagination,
        setPagination,
        foas,
        setSectors,
        status,
        setStatus,
        Levels,
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
        setJobOffers,
        jobOffers,
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
        handleRadioChange,
        handlePrevPage,
        SkeletonLoader,
        handleSubmit,
        isSearchDisabled,
        clicked,
        isModified
    };
}