import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import { Images } from "@/assets";
import NavigationButton from "@/components/shared/navigation-button";

const HomeSection = () => {
  return (
    <section id="home">
      <div
        style={{
          backgroundImage: `linear-gradient(335deg, rgb(0 6 14 / 89%), rgb(0 0 0 / 78%)), url(${Images.heroBg.src.src})`,
        }}
        className={"h-[calc(100vh-5rem)] w-full bg-cover"}
      >
        <div className="flex justify-center items-start flex-col w-full h-[90%] gap-5 max-w-screen-xl mx-auto max-xl:pl-5">
          <h1 className="text-5xl max-md:text-3xl">
            Empowering Tomorrow&apos;s Innovations Today
          </h1>
          <p className="max-w-[60rem] font-light text-xl max-md:text-lg line">
            At Mataxiomity Solutions, we pave the way for transformative
            technology solutions. From blockchain integration to seamless app
            development, we redefine possibilities. Join us in shaping the
            future with cutting-edge expertise and unparalleled innovation.
          </p>

          <NavigationButton
            link="/contact-us"
            className="mt-3"
            variant="outline"
          >
            Discover More <FaArrowRightLong className="ml-2" />
          </NavigationButton>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
