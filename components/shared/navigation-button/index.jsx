"use client"
import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const NavigationButton = ({ link = "", ...props }) => {
  const router = useRouter();

  const navigationHandler = () => {
    router.push(link);
  };

  return <Button onClick={navigationHandler} {...props}></Button>;
};

export default NavigationButton;
