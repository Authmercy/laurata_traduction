import { useRouter } from 'next/router';
import Link from 'next/link';
import en from '@/i18/en/entreprise/talent.json';
import fr from '@/i18/fr/entreprise/talent.json';

export default function Trouver() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-grow md:w-2/3 p-8">
        <h1 className="text-[#A87A38] text-2xl text-center font-extrabold w-full pt-4 md:mx-8">
          {t.find_talents}
        </h1>
        <div className="bg-white/70 pt-2 mt-8">
          <div className="border-1 p-6 text-center border-[#4A62AA]">
            <p className="text-[#4A62AA] text-xl">{t.recruitment_text}</p>
            <p className="mt-4 text-black">
              {t.contact_text}
            </p>
            <p className="mt-24 text-[#4A62AA] font-extrabold">
              <Link href="/misc/nous_contacter" className="hover:text-xl">
                {t.contact_us}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}