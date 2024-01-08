import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AcheivementsCard = ({ icon, heading, title }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-5">
          <div>{icon}</div>
          <div>
            <div className="flex gap-4 items-center">
              <CardTitle className="text-primary">{heading}</CardTitle>
            </div>
            <CardDescription>{title}</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default AcheivementsCard;
