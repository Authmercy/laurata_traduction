"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
export default function Partenaire() {


    return (
        <div className="flex flex-wrap pt-6">

            <div className="w-full  h-[35%] py-2 px-20  flex justify-center ">

                <div className="  flex flex-row gap-36   ">


                    <div>
                        <Image src="/images/logo/baticonfort.png" alt="logoSES" width={200} height={150} />
                    </div>

                </div>

            </div>
        </div>


    );

}