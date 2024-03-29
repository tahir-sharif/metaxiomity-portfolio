import { Poppins } from "next/font/google";

import { companyDetails } from "@/portfolio-config";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { Images } from "@/assets/index";
import "@/app/globals.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://metaxiomity-portfolio.vercel.app"),
  title: `${companyDetails.name} - Transforming Digital Experiences`,
  description:
    "Discover a world of innovation with our cutting-edge solutions. Empowering tomorrow's breakthroughs today through advanced technologies and unparalleled expertise. Explore how we drive innovation forward for a brighter future.",
  openGraph: {
    images: [
      {
        url: Images.logo.src.src,
        width: 411,
        height: 168,
      },
    ],
  },
  verification: {
    google: "BKGUxUAwPIQLGPcQzYNyrBY7cu_EMIifabqBdcp0lGM",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
