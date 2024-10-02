import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
   <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-2xl">Web Developer</span>
          <h1 className="h1 mb-8">
            Hello I'm <br /> <span className="text-accent ">Nemnem Sihombing</span>
          </h1>
          <p className="max-w-[700px] mb-9 text-white/80"> 
          Welcome to my website, Here, you will discover my journey I've undertaken—filled 
          with precious moments, challenges that have shaped me, and proud achievements. 
          Each page unveils a piece of my story, offering a glimpse of who I truly am and what 
          drives me. Come, join me on this journey as we explore this story together.
          </p>
          {/* btn and socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <a 
              href="https://drive.google.com/file/d/1OwVd-7Dfgj8WERzzV1eoGV3er3wnywxf/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" 
              iconStyles="w-9 h-9 border border-accent rounded-full flex 
              justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
        {/* photo */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Home;
