import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";


export default function ActuDetailMobile() {
  const router = useRouter();


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);
  const [item, setItem] = useState<{
    id: number;
    day: number;
    month: number;
    year: number;
    type: string;
    title: string;
    text: string;
  } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedItem = sessionStorage.getItem("selectedNewsItem");
      if (storedItem) {
        try {
          const parsedItem = JSON.parse(storedItem);
          setItem(parsedItem);
        } catch (error) {
          console.error("Error parsing stored item:", error);
        }
      }
    }
  }, []);

  if (!item || !router.isReady) return <div>Loading...</div>;

  const { id, day, month, year, type, title, text } = item;

  const getMonthName = (monthNumber: number): string => {
    const months = [
      "janvier", "février", "mars", "avril", "mai", "Juin",
      "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];
    return months[monthNumber - 1] || "Mois inconnu";
  };



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
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#c09111] text-white">
            <p>ACTUALITÉS</p>
          </div>

          <div className="flex bg-white mt-4 flex-col flex-grow w-full">
            <div className="">
              <div className="rounded p-4 mx-auto">
                <div className="rounded mx-auto">
                  <div>
                    <h1 className="text-xl font-bold text-center ">{title}</h1>
                    <p className="mt-2 text-center text-gray-700">
                      {`${day} ${getMonthName(month)} ${year}`}
                    </p>
                    <p className="mt-2 text-black">{text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
          <footer className="w-full bg-blue-900    text-white text-center">
                                                                                    <FooterMobile />
                                                                                  </footer>
    </div>
  );
}
