import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingDock } from "./components/ui/navbar";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconAlertCircle,
  IconShoppingCart,
  IconFreeRights,
  IconPhoneCall
} from "@tabler/icons-react";
import Footer from "./components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ServeWise",
  description: "Bantu pelanggan kapan saja, di mana saja dengan solusi Customer Service AI yang pintar dan mudah diintegrasikan.",
};

const links = [

  {
    title: "About",
    icon: (
      <IconAlertCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/#about",
  },
  {
    title: "Pricing",
    icon: (
      <IconShoppingCart className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/#pricing",
  },
  {
    title: "Home",
    icon: (
      <Image
        src="/img/ServeWiseLogo.PNG"
        width={50}
        height={50}
        alt="ServeWise Logo"
      />
    ),
    href: "/",
  },
  {
    title: "Free",
    icon: (
      <IconFreeRights className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/free",
  },

  {
    title: "Contact Us",
    icon: (
      <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/#contact",
  },

];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="shortcut icon" href="/img/logo.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <div className="flex items-center justify-center w-full">
          <FloatingDock
            items={links}
          />
        </div>
        {children}
        <script async id="vectorshift-chat-widget" src="https://app.vectorshift.ai/chatWidget.js" chatbot-id="6726325a471c30a1baa70961" chatbot-height="600px" chatbot-width="400px"></script>
        <Footer />
      </body>
    </html>
  );
}
