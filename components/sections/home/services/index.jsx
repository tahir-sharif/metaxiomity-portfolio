import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { servicesItems } from "./services-items";

const Services = () => {
  return (
    <section id="services">
      <div className="m-auto max-w-screen-xl py-10">
        <h2 className="text-3xl text-center">What We Offer?</h2>

        <div className="grid grid-cols-1 mt-5 p-5 md:grid-cols-3 gap-5">
          {servicesItems.map(({ name, icon, description }) => {
            return (
              <Card key={name}>
                <CardHeader>
                  <div className="flex gap-4 items-center">
                    {icon}
                    <CardTitle className="text-lg">{name}</CardTitle>
                  </div>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
