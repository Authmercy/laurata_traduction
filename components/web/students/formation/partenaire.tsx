"use client";
import Image from "next/image";
export default function Partenaire() {

    return (
        <div className="flex flex-wrap mt-10">

            <div className="w-full  h-[35%] py-2 px-20  flex justify-center ">

                <div className="  flex flex-row gap-36   ">


                    <div>
                        <Image src="/images/logo/medicare.png" alt="logoSES" width={300} height={150} />
                    </div>

                </div>

            </div>
        </div>


    );

}