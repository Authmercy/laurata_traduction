import UseZoomService from "@/service/service_zoom";
import { URLS } from "@/service/url";
import Link from "next/link";
import { useRouter } from "next/router";
;

  

export default function ZoomComponent() {
  const router = useRouter();


  const handleClick = () => {
    router.push('/moreInfos/');
  };
  const handleClick1 = () => {
    router.push('/students/offresStage');
  };



  const {

    errorMessage,
    handleViewDetails,
    groupedNewsfeed,
    setGroupedNewsfeed,
    setErrorMessage,
    getMonthName,


  } = UseZoomService()


  return (
    <div className="p-2 md:pl-8 text-black min-h-screen flex flex-col">
      <div className="flex flex-col flex-grow w-full">
        <div className="flex justify-center flex-col  w-full">
          <div className="border-2 mt-24 border-[#2e76b1]">
            <div className=" rounded  p-4 mx-auto">

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
                {Object.keys(groupedNewsfeed)
                  .sort((a, b) => Number(a) - Number(b))
                  .filter((year) => Number(year) === new Date().getFullYear())
                  .map((year) => (
                    <div key={year} className="mb-8 ">
                      <div className="bg-[#2e76b1] text-white px-3 inline-block mb-4">{year}</div>
                      <div className="grid grid-cols-2 gap-4">
                        {groupedNewsfeed[Number(year)]?.map((item, index) => (
                          <div key={index} onClick={() => handleViewDetails(item)} className="border rounded p-3 bg-gray-100 flex justify-between items-center mb-2">
                            <div>
                              <p className="font-bold text-[#2e76b1] uppercase">{item.formattedDate}</p>
                              <p className="text-sm">{item.title}</p>
                            </div>
                            <button onClick={() => handleViewDetails(item)} className="text-[#2e76b1] text-xl ml-2">
                              ▶
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}






              </div>


            </div>
          </div>



        </div>
        <div className="my-10 flex flex-row justify-center gap-4">
          <button onClick={() => handleClick()} className="bg-[#2e76b1] text-white px-12 py-2 rounded-md">Higher Education<br />
            Institutions</button>
          <button onClick={() => handleClick()} className="bg-[#969696] text-white  px-12  py-2  rounded-md">Companies &<br />
            Organizations</button>
          <button onClick={() => handleClick()} className="bg-[#A38340] text-white px-12  py-2  rounded-md">Students &<br />
            Recent Graduates</button>
          <button onClick={() => handleClick1()} className="bg-[#E1C32F] text-white  px-12   py-2 rounded-md">Explore <br />
            Internships</button>
        </div>
      </div>
    </div>

  );
}