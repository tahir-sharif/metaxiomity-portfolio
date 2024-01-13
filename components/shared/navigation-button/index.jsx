"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { scrollElementIntoView } from "@/lib/utils";

const ContactUsButton = ({ link = "", onButtonClick, ...props }) => {
  return (
    <Button
      onClick={() => {
        scrollElementIntoView("#contact-us");
        if (onButtonClick) onButtonClick();
      }}
      {...props}
    ></Button>
  );
};

export default ContactUsButton;
