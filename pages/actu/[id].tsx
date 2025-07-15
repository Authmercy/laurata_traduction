"use client";
import ActuDetailMobile from "@/components/mobile/actualite/actuDetail";


export default function Mention() {

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
        </div>

        {/* Mobile & Tablet view (≤ 1024px) */}
        <div className="block lg:hidden">
          <ActuDetailMobile></ActuDetailMobile>
        </div>
      </div>




    </div>
  );

} 