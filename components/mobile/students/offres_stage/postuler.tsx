import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../../navbar/navbar";
import { URLS } from "@/service/url";
import FooterMobile from "../../footer/footerEnd";
import en from '@/i18/en/student/internship.json';
import fr from '@/i18/fr/student/internship.json';
import UseLanguageService from "@/service/language_switch";

export default function PostulerAuPostMobile() {
  const router = useRouter();
  const { id } = router.query;
  const [clicked, setClicked] = useState(false);
    const [clicked1, setClicked1] = useState(false);
  const [offerDetails, setOfferDetails] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);
  const { locale } = router;
    const t = locale === 'en' ? en : fr;

  const {

    headers


  } = UseLanguageService()

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

  const handleClick = (id: number) => {
     setClicked(true);
    router.push(`/students/postuler/${id}`);
  };
  const handleClick1 = () => {
       const searchParams = sessionStorage.getItem("searchParams");
         setClicked1(true);
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
     setClicked(true);
    router.push("/students/offresStage");
  };

  if (!id) {
    return <p>Loading...</p>;
  }



  return (
    <div>
  <div className="min-h-screen   bg-[#34538C]  overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
         
        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen2={isMobileMenuOpen2}
          setIsMobileMenuOpen2={setIsMobileMenuOpen2}
        />
        <div className={`${isMobileMenuOpen ? "blur-sm " : ""
          } ${isMobileMenuOpen2 ? "blur-sm " : ""
          } `}>
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] text-white">
            <p>   {t.postuler} </p>
          </div>


          <div

            className="bg-white   mt-10  p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
          >
            {offerDetails ? (
              <div>
                <div
                  key={offerDetails.id}
                  onClick={() => handleClick(offerDetails.id)}
                  className=" p-2 shadow-sm mb-2 cursor-pointer hover:shadow-md transition-shadow"
                >

                  <h2 className="text-lg text-center text-[#4A62AA] font-bold">{offerDetails.title}</h2>


                  <p className="text-orange-700  text-center font-semibold">
                    {offerDetails.orgTypeString}
                  </p>
                   <p className="text-sm  text-center text-[#4A62AA] ">{offerDetails.orgTypeString}</p>

                   <div className="flex flex-row  text-sm items-center mt-2 text-center gap-5">
                
                                    <p className="flex items-center justify-center gap-2">
                                      <Image src="/icons/timer.svg" alt="icon" width={20} height={20} />
                                      {offerDetails.durationText}
                                    </p>
                
                                    <p className="flex items-center justify-center gap-2">
                                      <Image src="/icons/location.svg" alt="icon" width={20} height={20} />
                                      {offerDetails.city}
                                    </p>
                                      <p className="">
                                    <span>{t.searchResult.published} </span>   {offerDetails.parutions}
                                  </p>
                                  </div>

                  <div className="bg-white/70  p-4 mt-2">
                    <div className="mt-4 text-black">
                      <h3 className="text-xl  text-center font-bold  text-[#9b6e0f]">{t.searchDescription.Postuler} </h3>
                          {offerDetails.application ? ( 
                offerDetails.application.map((degree: string, index: number) => (
                                            <p key={index}>{degree}</p>
                                          ))
                                          ) : ( <p></p> )}
                    </div>


                  </div>
                </div>
                <div className="flex mt-8 justify-between flex-row  text-sm px-2 gap-16">
                  <button onClick={handleSearch} 
                
                   className={` px-6 py-1 transition-transform  duration-200 
          ${clicked ? 'bg-white text-[#4A62AA] border-[#4A62AA]' : 'bg-[#9b6e0f]  text-white hover:bg-gray-200  '}
   '`} >
              {t.searchResult.nexSearch} 
                  </button>
                  <button onClick={handleClick1} 
                 
                     className={` px-6 py-1 transition-transform  duration-200 
          ${clicked1 ? 'bg-white text-[#4A62AA] border-[#4A62AA]' : 'bg-[#2848a8]  text-white hover:bg-gray-200  '}
 '`} >
                    {t.searchDescription.Retour} 
                  </button>
                </div>


              </div>

            ) : (
              <div>Loading...</div>
            )}
          </div>
       </div>
      </div>
      <footer className="w-full bg-blue-900    text-white text-center">
                                                  <FooterMobile />
                                                </footer>
      
      </div>
  );
};