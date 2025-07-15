"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import UseContactService from "@/service/service_Conctact";


export default function ContactComponent() {
    const router = useRouter();
    const {


        errorMessage,
        handleChange,
        successMessage,

        setErrorMessage,
        setElements,

        setSuccessMessage,

        handleSubmit,

        elements,


    } = UseContactService()

    return (
        <div className="p-2  text-black" >
            <div className="flex  gap-1 w-full">
                <div className="flex items-center justify-center ">

                    <div className="flex flex-wrap  pt-6">
                        <div className="flex-grow w-full  text-black  p-8">
                            <div className="  bg-[#A87A38] p-3 text-center text-2xl font-bold  uppercase text-white ">
                                CONTACTEZ-NOUS

                            </div>
                            {successMessage && (
                                <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                                    {successMessage}
                                </div>
                            )}
                            {errorMessage && (
                                <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                                    {errorMessage}
                                </div>
                            )}
                            <div className=" mt-2 gap-1">
                                <div className="bg-white w-full text-black p-2 py-4 text-end flex gap-4 overflow-x-auto">
                                    <form onSubmit={handleSubmit} className="flex gap-4 flex-col justify-center items-center ">

                                        <input
                                            type="text"
                                            placeholder="Nom et prénom"
                                            value={elements.fullname}
                                            onChange={handleChange}
                                            name="fullname"
                                            className="text-start placeholder:text-center border-2 border-[#7b92d6] placeholder-[#717172] p-2 w-[800px]" required
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={elements.email}
                                            onChange={handleChange}
                                            placeholder="Email"
                                            className="text-start border-2  placeholder:text-center border-[#7b92d6] placeholder-[#717172] p-2 w-[800px]" required
                                        />
                                        <input
                                            type="text"
                                            name="phone"
                                            value={elements.phone}
                                            onChange={handleChange}
                                            placeholder="Téléphone (WhatsApp) "
                                            className="text-start border-2  placeholder:text-center border-[#7b92d6] placeholder-[#717172] p-2 w-[800px]" required
                                        />
                                        <input
                                            type="text"
                                            placeholder="Sujet "
                                            name="subject"
                                            value={elements.subject}
                                            onChange={handleChange}
                                            className="text-start border-2 placeholder:text-center border-[#7b92d6] placeholder-[#717172] p-2 w-[800px]" required
                                        />
                                        <input
                                            type="text"
                                            name="text"
                                            value={elements.text}
                                            onChange={handleChange}
                                            placeholder="Entrez votre message "
                                            className="text-start border-2 placeholder:text-center border-[#7b92d6] placeholder-[#717172] p-2 w-[800px] h-20" required
                                        />

                                        <button

                                            type="submit"

                                            className={`px-6 py-2 rounded-lg bg-[#A87A38] text-white font-bold`}
                                        >
                                            Envoyer
                                        </button>
                                    </form>
                                </div>
                            </div>


                        </div>


                    </div>


                </div >



            </div>
        </div>

    );
}
