import React from "react";
import Link from "next/link";
import { navLinks } from "./_nav";

import NavigationButton from "@/components/shared/navigation-button";

const Links = () => {
  return (
    <>
      <div className="flex space-x-5">
        {navLinks.map(({ label, path }) => {
          return (
            <Link className="hover:text-primary font-semibold" key={label} href={path}>
              {label}
            </Link>
          );
        })}
      </div>

      <NavigationButton link="contact-us" variant="outline">Let&apos;s connect</NavigationButton>
    </>
  );
};

export default Links;
