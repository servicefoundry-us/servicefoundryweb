import { Archivo } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata = {
  title: "ServiceFoundry U.S. | Building the next generation of business",
  description:
    "Real businesses, built in real cohorts, turned into courses. Request a trade or buy a course based on research we've completed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
