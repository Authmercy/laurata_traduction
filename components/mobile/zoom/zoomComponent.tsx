import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
import UseZoomService from "@/service/service_zoom";


export default function ZoomComponentMobile() {
  const router = useRouter();

  const {

    errorMessage,
    handleViewDetails,
    groupedNewsfeed,
    setGroupedNewsfeed,
    setErrorMessage,
    getMonthName,
  

  } = UseZoomService()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

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



          <div className="flex justify-center mt-8  flex-col  w-full">
            <div className="">
              <div className=" rounded  p-4 mx-auto">
                {errorMessage && (

                  <div className="text-red-600 text-center w-full py-4 mt-10 bg-red-100 border border-red-300 rounded relative">
                    <button
                      className="absolute top-1 right-2 text-red-600 font-bold"
                      onClick={() => setErrorMessage(null)}
                    >
                      ×
                    </button>
                    {errorMessage}
                  </div>
                )}
                <div className=" rounded  p-4 mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.keys(groupedNewsfeed)
                  .sort((a, b) => Number(a) - Number(b))
                  .filter((year) => Number(year) === new Date().getFullYear())
                  .map((year) => (
                        <div key={year} className="mb-8">
                          <div className="bg-[#1e21c9] text-white py-2 font-bold px-3 inline-block mb-4">{year}</div>
                          {groupedNewsfeed[Number(year)]?.map((item, index) => (
                            <div key={index} onClick={() => handleViewDetails(item)} className="border rounded p-3 bg-gray-100 flex text-black justify-between items-center mb-2">
                              <div>

                                <p className="font-bold text-[#1e21c9] uppercase">{item.formattedDate}</p>
                                <p className="text-sm">{item.title}</p>
                              </div>
                              <button onClick={() => handleViewDetails(item)} className="text-[#1e21c9] text-xl ml-2">
                                ▶
                              </button>
                            </div>
                          ))}
                        </div>
                      ))}





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