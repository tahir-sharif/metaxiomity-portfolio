"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

import { Images } from "@/assets/index";
import UIImage from "@/components/image";
import Links from "./links";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen((d) => !d);

  return (
    <>
      <div className="h-20 fixed w-full bg-secondary/50 backdrop-blur-md max-xl:px-5 z-50">
        <div className="flex items-center justify-between m-auto max-w-screen-xl">
          <Link href="/">
            <UIImage className="w-44" imageSrc={Images.logo} />
          </Link>

          <div className="flex items-center space-x-10 max-md:hidden">
            <Links />
          </div>

          <Sheet open={drawerOpen} onOpenChange={toggleDrawer}>
            <div className="hidden max-md:block cursor-pointer">
              <SheetTrigger>
                <RxHamburgerMenu size="2rem" />
              </SheetTrigger>
            </div>

            <SheetContent>
              <div className="mt-10 flex flex-col items-center">
                <Links isColumn toggleDrawer={toggleDrawer} />
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
