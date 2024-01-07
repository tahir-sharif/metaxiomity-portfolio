import { Poppins } from "next/font/google";

import Navbar from "@/components/shared/navbar";
import { companyDetails } from "@/portfolio-config";
import "@/app/globals.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: companyDetails.name,
  description: companyDetails.desciption,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />

      <body className={inter.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
