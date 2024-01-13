import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TestimonialCard = ({ name = "", ordered = "", message = "" }) => {
  return (
    <div className="w-full px-4">
      <Card className="w-full max-w-md h-64">
        <CardHeader>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <IoPersonCircleOutline size="3rem" />

              <CardTitle className="font-bold text-primary">{name}</CardTitle>
            </div>

            <p className="mt-3 text-xs md:mt-5">{ordered}</p>

            <CardDescription className="text-sm pt-2">
              {message}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default TestimonialCard;
