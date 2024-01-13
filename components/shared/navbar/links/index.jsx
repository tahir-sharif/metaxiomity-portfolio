"use client";
import React from "react";
import Link from "next/link";

import { getScrollElementIntoViewFn } from "@/lib/utils";
import NavigationButton from "@/components/shared/navigation-button";
import { navLinks } from "./_nav";

const Links = ({ isColumn = false, Wrapper }) => {
  const WrapperComponent = ({ children }) => {
    return Wrapper ? <Wrapper asChild>{children}</Wrapper> : children;
  };

  return (
    <>
      <div className={`flex gap-5 ${isColumn ? "flex-col" : ""}`}>
        {navLinks.map(({ label, path }) => {
          return (
            <WrapperComponent key={label}>
              <Link
                onClick={getScrollElementIntoViewFn(path)}
                className="hover:text-primary font-semibold"
                href={path}
              >
                {label}
              </Link>
            </WrapperComponent>
          );
        })}
      </div>

      <WrapperComponent>
        <NavigationButton
          className={isColumn ? "mt-8" : ""}
          link="contact-us"
          variant="outline"
        >
          Let&apos;s connect
        </NavigationButton>
      </WrapperComponent>
    </>
  );
};

export default Links;
