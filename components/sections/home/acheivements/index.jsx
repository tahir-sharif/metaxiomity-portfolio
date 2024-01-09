import React from "react";
import { MdOutlineFactCheck } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";

import { companyDetails } from "@/portfolio-config";
import AcheivementsCard from "./card";

const Acheivements = () => {
  return (
    <section
      id="about-us"
      className="bg-white text-black flex flex-col justify-center py-10 px-4"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col">
        <h2 className="max-md:text-2xl text-4xl text-primary">
          {companyDetails.projectsCompleted}+ Projects Delivered Successfully &
          Still Growing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <AcheivementsCard
            icon={
              <AiOutlineFundProjectionScreen
                className="text-primary"
                size="3rem"
              />
            }
            heading={`${companyDetails.projectsCompleted}+`}
            title="Projects Completed"
          />
          <AcheivementsCard
            icon={<GrGroup className="text-primary" size="3rem" />}
            heading={`${companyDetails.satisfiedClients}+`}
            title="Client Satisfied"
          />
          <AcheivementsCard
            icon={<MdOutlineFactCheck className="text-primary" size="3rem" />}
            heading="100%"
            title="Commitment to Quality"
          />
          <AcheivementsCard
            icon={<MdOutlineFactCheck className="text-primary" size="3rem" />}
            heading="100%"
            title="Dedicated to Excellence"
          />
        </div>
      </div>
    </section>
  );
};

export default Acheivements;
