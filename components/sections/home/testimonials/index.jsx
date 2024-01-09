"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import TestimonialCard from "./card";
import { testimonials } from "@/portfolio-config";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 700 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
  },
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center py-8">
        <h2 className="text-2xl md:text-4xl">Testimonials</h2>

        <div className="mt-10 w-full">
          <Carousel
            infinite
            containerClass="w-full space-x-2"
            responsive={responsive}
            autoPlay
            autoPlaySpeed={2000}
            arrows={false}
          >
            {testimonials.map((t, i) => {
              return (
                <TestimonialCard
                  key={i}
                  name={t.name}
                  ordered={t.ordered}
                  message={t.message}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
