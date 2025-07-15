import Link from "next/link";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import Image from "next/image";
import FooterMobile from "../footer/footerEnd";
type NewsFeed = {
    id: number;
    year: number;
    month: number;
    day: number;
    type: string;
    title: string;
    text: string;
    formattedDate?: string;
};



export default function ZoomDetailMobile() {

 

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  
  const [item, setItem] = useState<NewsFeed | null>(null);
      const [list, setList] = useState<NewsFeed[]>([]);
      const router = useRouter();
  
      useEffect(() => {
          if (typeof window !== "undefined") {
              const storedItem = sessionStorage.getItem("selectedNewsItem");
              const storedList = sessionStorage.getItem("newsFeedList");
              if (storedItem) {
                  try {
                      setItem(JSON.parse(storedItem));
                  } catch (error) {
                      console.error("Erreur de parsing de l’item :", error);
                  }
              }
              if (storedList) {
                  try {
                      setList(JSON.parse(storedList));
                  } catch (error) {
                      console.error("Erreur de parsing de la liste :", error);
                  }
              }
          }
      }, []);
  
      if (!item || !router.isReady) return <div>Chargement...</div>;
  
  
    if (!item) return <div>Loading...</div>;
  
    const { id, day, month, year, type, title, text, formattedDate } = item;
    if (!router.isReady) return <div>Loading...</div>;
  
  
      const currentIndex = list.findIndex((i) => i.id === id);
      const prevItem = currentIndex > 0 ? list[currentIndex - 1] : null;
      const nextItem = currentIndex < list.length - 1 ? list[currentIndex + 1] : null;
  
      const handleNavigate = (targetItem: NewsFeed | null) => {
          if (targetItem) {
              sessionStorage.setItem("selectedNewsItem", JSON.stringify(targetItem));
              router.replace(`/zoom/${targetItem.id}`).then(() => {
                  window.location.reload();
              });
          }
      };

    const handleReturn = () => {
        router.push("/zoom");
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
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#1e21c9] text-white">
            <p>    ZOOM SUR</p>
          </div>



          <div className="flex bg-white  mt-8 flex-col flex-grow w-full">

            <div className="">
              <div className=" rounded  p-4 mx-auto">

                <div className=" rounded  mx-auto">
                  <div className="">
                    <h1 className="text-xl font-bold text-center ">{title}</h1>
                    <p className="mt-2 uppercase" >{formattedDate} {year}</p>

                    <p className="mt-2 text-black"> {text}</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
               <div className="flex justify-center gap-4 my-6">
                <button onClick={() => handleNavigate(prevItem)} disabled={!prevItem} className="bg-[#ccc] px-4 py-2 rounded disabled:opacity-50">
                    ◀ 
                </button>
                <button onClick={handleReturn} className="bg-[#2e76b1] text-white px-4 py-2 rounded">
                    ↩ Retour
                </button>
                <button onClick={() => handleNavigate(nextItem)} disabled={!nextItem} className="bg-[#ccc] px-4 py-2 rounded disabled:opacity-50">
                     ▶
                </button>
            </div>
       
        </div>









      </div>           <footer className="w-full bg-blue-900   - text-white text-center">
                                                                                    <FooterMobile />
                                                                                  </footer> </div>


  );
}