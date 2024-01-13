import React from "react";
import Link from "next/link";

import { scrollElementIntoView } from "@/lib/utils";
import ContactUsButton from "@/components/shared/navigation-button";
import { navLinks } from "./_nav";

const Links = ({ isColumn = false, toggleDrawer = null }) => {
  const linkClickHandler = (path) => (e) => {
    e.preventDefault();

    if (toggleDrawer) toggleDrawer();
    scrollElementIntoView(path);
  };

  return (
    <>
      <div
        className={`flex gap-5 w-full text-center ${
          isColumn ? "flex-col" : ""
        }`}
      >
        {navLinks.map(({ label, path }) => {
          return (
            <Link
              onClick={linkClickHandler(path)}
              className="hover:text-primary font-semibold"
              href={path}
              key={label}
            >
              {label}
            </Link>
          );
        })}
      </div>

      <ContactUsButton
        onButtonClick={toggleDrawer}
        className={isColumn ? "mt-8" : ""}
        variant="outline"
      >
        Let&apos;s connect
      </ContactUsButton>
    </>
  );
};

export default Links;
