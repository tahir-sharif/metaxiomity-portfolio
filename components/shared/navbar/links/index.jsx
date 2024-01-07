import React from "react";
import { navLinks } from "./_nav";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Links = () => {
  return (
    <>
      <div className="flex space-x-5">
        {navLinks.map(({ label, path }) => {
          return (
            <Link className="font-semibold" key={label} href={path}>
              {label}
            </Link>
          );
        })}
      </div>

      <Button variant="outline">Let&apos;s connect</Button>
    </>
  );
};

export default Links;
