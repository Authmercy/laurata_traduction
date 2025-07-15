
import { useRouter } from "next/router";

export default function Actualite() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/actualite");
    };

    return (
        <div  >



            <button onClick={() => handleClick()} className="text-center text-white w-full px-5 py-2 hover:bg-[#A87A38] bg-[#4A62AA]">
                <h1 className="font-bold uppercase"> Actualités </h1>
            </button>
        </div>
    );
}