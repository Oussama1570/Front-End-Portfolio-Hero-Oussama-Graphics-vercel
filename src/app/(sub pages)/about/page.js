import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/app/components/RenderModel";
import ImageOussama from "../../../../public/Images/Oussama Labben Photo Ocotbre 2024 n°2.jpeg"
import AboutDetails from "@/app/components/about";
import dynamic from "next/dynamic";
import "./page.css"


export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      
        
      

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
        <Image
        src={ImageOussama}
        alt="Next.js Portfolio website's about page background image"
        className="ImageOussama"
        
      />
          <h1 className="font-bold  text-6xl xs:text-7xl sm:text-8xl  lg:text-9xl text-accent">
          
          Oussama Labben
          </h1>
          <p className="font-light text-foreground text-lg">
            Meet the Hero Knight behind this portfolio
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}