import Link from "next/link";
import { useRouter } from "next/router";

export default function Zoom() {
    const router = useRouter();


    const handleClick = () => {

        router.push(`/zoom`);
    };

      const { locale } = router;
    return (
        <div >


            <button onClick={() => handleClick()} className="text-center hover:bg-[#A87A38] text-white w-full px-5 py-2  bg-[#4A62AA]">
                <h1 className="font-bold uppercase">
                        {locale === 'en' ? 'Focus' : 'Zoom sur'}  </h1>
            </button>
        </div>
    );
}