import Image from "next/image";
import React from "react";

const UIImage = ({ imageSrc = { alt: "", src: "" }, className = "" }) => {
  return (
    <div className={className}>
      <Image
        width="100%"
        height="100%"
        // objectFit="contain"
        className={className}
        alt={imageSrc.alt}
        src={imageSrc.src}
      />
    </div>
  );
};

export default UIImage;
