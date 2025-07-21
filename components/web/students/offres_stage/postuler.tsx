import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { URLS } from "@/service/url";
import en from '../../../../i18/en/student/internship.json';
import fr from '../../../../i18/fr/student/internship.json';
import UseLanguageService from "@/service/language_switch";


export default function PostulerAuPost() {
  const router = useRouter();
  const { id } = router.query;
  const { locale } = router;
    const t = locale === 'en' ? en : fr;

  const {

    headers


  } = UseLanguageService()
  const [offerDetails, setOfferDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const BACKEND_URL = URLS.GET_INTERNSHIP_DETAIL;

  if (!BACKEND_URL) {
    throw new Error("Environment variable NEXT_PUBLIC_GET_INTERNSHIP_DETAIL is not defined");
  }
   useEffect(() => {
    if (id) {
      const fetchOfferDetails = async () => {
        try {
          const response = await fetch(`${BACKEND_URL}/${id}`, {
            method: 'GET',
             headers,
          });



          const data = await response.json();
          console.log('Fetched data:', data);

          setOfferDetails(data);
          setLoading(false);
        } catch (error: any) {
          setError('Error fetching offer details');
          setLoading(false);
          router.push({
            pathname: "/error",
            query: { message: encodeURIComponent(error.message) },
          });
        }
      };

      fetchOfferDetails();
    }
  }, [id]);


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

  const handleSearch = () => {
    router.push("/students/offresStage");
  };
 if (!id) {
    return <p>Loading...</p>;
  }

 
  return (
    <div className=" pl-10 pt-10">




      <div className="flex flex-col   md:flex-row  ">
        {offerDetails ? (
          <div className="flex-grow md:w-2/3 p-8">

            <div className="  bg-[#A87A38] p-3 text-start text-xl uppercase pl-8 font-bold text-white ">  {t.postuler} </div>

            <div

              className="bg-white/70   pl-8   p-2 shadow-sm mb-2 cursor-pointer hover:shadow-md transition-shadow"
            >
              <Image
                src={offerDetails.logo}
                alt="logo"
                width={200}
                height={20}
                className="mx-auto md:mx-0 object-contain"
              />

              <div className="flex flex-col  md:flex-row justify-between  gap-24 ">
                <Image
                  src={offerDetails.logo}
                  alt="logo"
                  width={200}
                  height={20}
                  className="mx-auto md:mx-0 object-contain"
                />
                <div className="flex-grow">
                  <div className=" flex flex-col  md:flex-row  gap-1">
                    <div className=" flex-1 pl-4 flex  justify-center items-center">
                      <h2 className="text-lg w-full text-start text-[#4A62AA] font-bold">{offerDetails.title}</h2>


                    </div>



                    <div className="bg-[#4A62AA]   justify-   items-center">
                      <h2 className="text-lg px-7 text-center text-white ">{offerDetails.typeString}</h2>

                    </div>


                    <div className="bg-[#A87A38]   justify-center items-center">
                      <h2 className="text-lg px-7 text-center text-white ">{offerDetails.orgTypeString}</h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-24 sm:grid-cols-2  pl-4  gap-x-4">


                    <div className="flex flex-col items-start justify-center text-start gap-2">

                      <p className="text-[#A87A38] pt-4 text-start font-semibold">
                        {offerDetails.companyName}
                      </p>

                      <p className="flex items-start justify-start gap-x-2">
                        <Image src="/icons/timer.svg" alt="icon" width={24} height={20} />
                        {offerDetails.durationText}
                      </p>

                      <p className="flex items-start justify-center gap-x-2">
                        <Image src="/icons/location.svg" alt="icon" width={24} height={20} />
                        {offerDetails.city}
                      </p>
                    </div>
                    <div className="flex flex-col pt-8 items-end ml-44 mr-8 sm:items-end gap-4">
                      {offerDetails.levels.length > 0 && (
                        <p className="w-full sm:w-auto">
                          <span>{t.searchForm.level}  : </span>
                          {offerDetails.levels.map((level: string, index: number) => (
                            <span className="text-sm" key={index}>{level}</span>
                          ))}
                        </p>
                      )}


                      <p className="  w-full sm:w-auto">
                        <span>{t.searchResult.published} :</span> {offerDetails.publishedOn}
                      </p>


                    </div>
                  </div>

                </div>

              </div>


            </div>

            <div className="bg-white pl-8 p-4">
              <div className="mt-4 text-black">
                <h3 className="text-lg font-bold  text-[#4A62AA]">{t.searchDescription.Postuler}</h3>
             {offerDetails.application ? ( 
                offerDetails.application.map((degree: string, index: number) => (
                                            <p key={index}>{degree}</p>
                                          ))
                                          ) : ( <p></p> )}
              </div>

              <div className="  flex  justify-end  flex-row gap-32">
                <div className="flex  mr-10 mt-6 justify-end flex-row gap-12">
                  <button onClick={handleSearch} className=" bg-[#4A62AA]  text-white px-6 py-2 rounded-2xl hover:bg-blue-200  hover:text-[#4A62AA]">
                   {t.searchResult.nexSearch} 
                  </button>
                  <button onClick={handleClick1} className=" bg-[#2848a8]  text-white px-6 py-2 rounded-2xl hover:bg-gray-200  hover:text-[#4A62AA]">
           {t.searchDescription.Retour} 
                  </button>
                </div>


              </div>
            </div>

          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="flex  mr-10 my-4 justify-end flex-row gap-16">


      </div></div>
  );
};
