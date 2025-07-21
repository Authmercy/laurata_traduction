

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import UseLanguageService from "@/service/language_switch";

export default function FooterMobile() {
    const [clickedLink, setClickedLink] = useState('');
    const {
   
           changeLanguage, locale
   
   
       } = UseLanguageService()
   

    return (
        <div className="w-full flex justify-center bg-blue-900   py-2 text-white text-center ">
            <div className=" flex flex-row mx-2  gap-2">

                <div className="flex items-center p-2 py-4">
                    <Image src="/images/logolaurata.png" alt="home" width={50} height={240} />
                </div>
                <div className="flex flex-col mt-4">


                    <div className="flex flex-row justify-center text-lg">
                        <Link href="/misc/presentaionDuSite  "                 className={`  ${clickedLink ? " text-[#bd7a1d] " : "text-white  " }
           `}><p
                            className={`  ${clickedLink ? " text-[#bd7a1d] " : "text-white  " }
           `}
                        >    {locale === 'en' ? 'About US' : ' À propos '} </p> </Link>
                        <span className="fond-bold text-[#f0b026] text-xl">  &nbsp;|&nbsp; </span> <Link href="/misc/nous_contacter"                 className={`  ${clickedLink ? " text-[#bd7a1d] " : "text-white  " }
           `}> <p className={` 
            ${clickedLink ? " text-[#bd7a1d] " : "text-white  "
                            }
           `}> Contact</p></Link>
                    </div>


                    <div>


                        <p>Copyright©Laurata    <span className="fond-bold text-[#f0b026] text-xl">  &nbsp;|&nbsp;  </span> 2018 - 2025</p>        </div>
                </div>
            </div>
        </div>



    );
}
