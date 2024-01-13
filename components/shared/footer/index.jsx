import React from "react";

import { companyDetails } from "@/portfolio-config";

const Footer = () => {
  const dateYear = new Date().getFullYear();

  return (
    <div className="border-t border-gray-500 p-3 py-4">
      <p className="text-center text-sm">
        &copy; {dateYear}, {companyDetails.name}., All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
