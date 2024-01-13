import React from "react";
import ContactUsButton from "@/components/shared/navigation-button";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="bg-white text-black flex flex-col justify-center py-10 px-4"
    >
      <div className="max-w-screen-xl mx-auto flex flex-wrap">
        <div className="w-full md:w-9/12">
          <h2 className="max-md:text-2xl text-4xl">
            Powering Innovation with Futuristic Technology Solutions
          </h2>
          <p className="pt-2 max-md:text-sm">
            Matexiomity Solutions is a beacon of innovation in technology.
            we&apos;ve driven digital transformation by harnessing expertise in
            React, Node Express, and Blockchain. Our passion for excellence
            fuels tailored solutions that transcend industries globally. With a
            customer-centric focus, we forge lasting partnerships, delivering
            cutting-edge platforms that propel businesses into the future.
          </p>
        </div>
        <div className="max-md:pt-5 w-full md:w-3/12 flex md:justify-center items-center">
          <ContactUsButton link="contact-us">Learn More</ContactUsButton>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
