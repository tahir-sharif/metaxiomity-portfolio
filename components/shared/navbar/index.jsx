import React from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

import { Images } from "@/assets/index";
import UIImage from "@/components/image";
import { Button } from "@/components/ui/button";
import Links from "./links";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <>
      <div className="h-20 fixed w-full bg-secondary/50 backdrop-blur-md max-xl:px-5">
        <div className="flex items-center justify-between m-auto max-w-screen-xl">
          <Link href="/">
            <UIImage className="w-44" imageSrc={Images.logo} />
          </Link>

          <div className="flex items-center space-x-10 max-md:hidden">
            <Links />
          </div>

          <Sheet>
            <div className="hidden max-md:block cursor-pointer">
              <SheetTrigger>
                <RxHamburgerMenu size="2rem" />
              </SheetTrigger>
            </div>

            <SheetContent>
              <SheetHeader>
                {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
              </SheetHeader>

              <div className="mt-10 flex flex-col items-center">
                <Links isColumn Wrapper={SheetClose} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
