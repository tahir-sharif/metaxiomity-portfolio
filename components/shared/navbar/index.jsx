import React from "react";
import Link from "next/link";

import UIImage from "@/components/image";
import { Images } from "@/assets/index";
import Links from "./links";

const Navbar = () => {
  return (
    <>
      <div className="h-20 fixed w-full bg-secondary/80 backdrop-blur-md max-xl:px-5">
        <div className="flex items-center justify-between m-auto max-w-screen-xl">
          <Link href="/">
            <UIImage className="w-44" imageSrc={Images.logo} />
          </Link>

          <div className="flex items-center space-x-10">
            <Links />
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
