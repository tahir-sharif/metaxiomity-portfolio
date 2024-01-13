import React from "react";

import { Images } from "@/assets/index";
import { Input } from "@/components/ui/input";
import UIImage from "@/components/image/index";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactUsSection = () => {
  return (
    <section className="mt-5" id="contact-us">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center py-8 px-2">
        <h2 className="text-2xl md:text-4xl text-center">
          LET&apos;S START YOUR PROJECT
        </h2>

        <div className="grid md:grid-cols-2 mt-10 w-full">
          <UIImage imageSrc={Images.contactImg} />

          <div>
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
              <Input placeholder="Email address" />
              <Input placeholder="Phone no." />
            </div>

            <div className="my-3">
              <Textarea rows={10} placeholder="Write your message here." />
            </div>

            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
