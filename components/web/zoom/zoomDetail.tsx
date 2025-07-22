import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ButtonAccueil from "../buttons/buttonAccueil";
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


export default function ZoomDetail() {
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
    const handleClick = () => {
        router.push('/moreInfos/');
    };
    const handleClick1 = () => {
        router.push('/students/offresStage');
    };

    return (
        <div className="p-2 md:pl-8 text-black flex flex-col">
            <div className="flex flex-col flex-grow w-full">
                <div className="flex justify-center flex-col w-full">
                    <div className="border-2 mt-24 border-[#2e76b1]">
                        <div className="rounded p-4 mx-auto">
                            <h1 className="text-2xl font-bold text-center uppercase">{title}</h1>
                            <p><strong>Date:</strong> {formattedDate} {year}</p>
                            <p className="mt-10">{text}</p>
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

            <div className=" flex my-6 flex-row justify-center gap-4">
    
                         <ButtonAccueil />
                       
            </div>
        </div>


    );
}