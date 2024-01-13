"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { getScrollElementIntoViewFn } from "@/lib/utils";

const NavigationButton = ({ link = "", ...props }) => {
  return (
    <Button
      onClick={getScrollElementIntoViewFn("#contact-us")}
      {...props}
    ></Button>
  );
};

export default NavigationButton;
