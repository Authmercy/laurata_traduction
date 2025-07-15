import Navbar from "@/components/web/navbar/navBarEtudiant";
import Footer from "@/components/web/footer/footer";
import PostulerAuPost from "@/components/web/students/offres_stage/postuler";
import PostulerAuPostMobile from "@/components/mobile/students/offres_stage/postuler";
import BackToTopButton from "@/components/buttonTop";

export default function DetailStage() {
  return (
    <div>

    <div className="flex flex-col min-h-screen">
      <div className="hidden lg:flex flex-col flex-grow">
        <div
          className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
          style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}
        >
          <Navbar />
         
          <div className="flex flex-row items-center justify-center">
          <div className="w-[95%] ">  
            <PostulerAuPost />
                <BackToTopButton />
            </div>
           
          </div>

          <div className="mt-auto">
  
            <Footer />
          </div>
        </div>
      </div>

      <div className="block lg:hidden flex-grow">
        <PostulerAuPostMobile></PostulerAuPostMobile>
            <BackToTopButton />
      </div>
        </div>
    </div>
  );
}
