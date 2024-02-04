import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Github from "@/components/icons/Github";
import LinkedIn from "@/components/icons/LinkedIn";
import Outlook from "@/components/icons/Outlook";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comfama Challenge",
  description: "Challenge develop for Comfama company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <span className="flex justify-between gap-5 text-sm text-gray-500 sm:text-center dark:text-gray-400">
              <a
                href="mailto:sebas.dev@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Outlook />
              </a>
              <a
                href="https://github.com/sebasdev584"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/sebasti%C3%A1n-garc%C3%ADa-arias-079296193/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
