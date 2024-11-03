'use client'
import Image from "next/image";
import React from "react";


import { Vortex } from "./components/ui/vortex";
import About from "./components/ui/about";
import { Features } from "./components/ui/feature";
import { CardSpotlight } from "./components/ui/card-spotlight";
import { Label } from "@radix-ui/react-label";
import { Input } from "./components/ui/input";
import { cn } from "@/lib/utils";
import { Globe } from "./components/ui/globe";
import Testimonial from "./components/ui/testimonial";


export default function Home() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Pesan anda telah terkirim");
  }
  return (
    <div>
      {/* Hero start */}
      <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Beralih ke <span className="text-blue-500">ServeWise</span>
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            Bantu pelanggan kapan saja, di mana saja dengan solusi Customer Service AI yang pintar dan mudah diintegrasikan.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              Order now
            </button>
            <button className="px-4 py-2  text-white ">Try Demo</button>
          </div>
        </Vortex>
      </div>
      {/* Hero End */}

      {/* about start  */}
      <About />
      {/* about end  */}

      {/* feature start  */}
      <Features />
      {/* feature end  */}

      <Globe />

      <section id="ShowAi" className="bg-gradient-to-r from-secondary to-primary py-20">
        <div className="container mx-auto px-4 flex justify-center items-center flex-col">
          <span className="bg-clip-text mb-8 text-transparent bg-gradient-to-t from-gray-500 via-white to-black inline-block">
            <h1 className="text-2xl md:text-4xl ">Experience Our Live Ai</h1>
          </span>
          <div className="">
            <div
              className="flex flex-col items-center justify-center border p-8 rounded-2xl shadow-lg hover:shadow-white hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2">
              <h2 className="text-3xl font-semibold mb-4 text-primary">Try our Chatbot</h2>
              <p className="text-lg text-gray-400 mb-6">
                Click the icon in the bottom right corner of your browser to interact with our AI.
              </p>
              <Image
                src="/img/ServeWiseChatDemo.png"
                alt="ShowCase Ano Chatbot"
                width={500}
                height={500}
              />
            </div>

          </div>
        </div>
      </section>

      <Testimonial />


      <div id="pricing" className="flex justify-center items-center flex-col">
        <span className="bg-clip-text mb-8 text-transparent bg-gradient-to-t from-gray-500 via-white to-black inline-block">
          <h1 className="text-2xl md:text-4xl ">Pricing</h1>
        </span>
        <p className="text-gray-400 md:text-xl text-center">Free 14 day trial. No credit card required.</p>
        <div id="Pricing" className="mt-8 flex justify-center items-center gap-4 flex-wrap text-white">
          <a href="/free">
            <CardSpotlight className="h-96 w-96 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2">Try It For Free</h3>
              <p className=" mb-4">This package includes:</p>
              <ul className="list-disc list-inside  mb-4">
                <li>1,000 Predictions / month</li>
                <li>Share with API</li>
                <li>1 Week Log Retention</li>
              </ul>
              <p className="font-bold text-xl mb-4">Free <span className="text-sm text-gray-300">for a month</span></p>
              <a href="#" className="mt-4 border-2 inline-block  hover:/80 p-2 rounded-lg z-50">Click To Try</a>
            </CardSpotlight>
          </a>
          <CardSpotlight className="h-96 w-96">
            <h3 className="text-2xl font-semibold mb-2">Individual Plan</h3>
            <p className=" mb-4">This package includes:</p>
            <ul className="list-disc list-inside  mb-4">
              <li>10,000 Predictions / month</li>
              <li>1GB Storage</li>
              <li>Customize LLMs</li>
              <li>Database Backup</li>
              <li>Custom Chatbot Branding</li>
            </ul>
            <p className="font-bold text-xl mb-4">Rp.59.000,00<span className="text-sm text-gray-300">/month</span></p>
            <a href="#" className="mt-4 border-2 inline-block  hover:/80 p-2 rounded-lg z-50">Click To Buy</a>
          </CardSpotlight>
          <CardSpotlight className="h-96 w-96">
            <h3 className="text-2xl font-semibold mb-2">Team Plan</h3>
            <p className=" mb-4">This package includes:</p>
            <ul className="list-disc list-inside  mb-4">
              <li>Everything in Starter</li>
              <li>50,000 Predictions / month</li>
              <li>10GB Storage</li>
              <li>Priority Support</li>
              <li>Admin Roles & Permissions</li>
            </ul>
            <p className="font-bold text-xl mb-4">Rp.179.000,00<span className="text-sm text-gray-300">/month</span></p>
            <a href="#" className="mt-4 border-2 inline-block  hover:/80 p-2 rounded-lg ">Click To Buy</a>
          </CardSpotlight>
          <CardSpotlight className="h-96 w-96">
            <h3 className="text-2xl font-semibold mb-2">Enterprise Plan</h3>
            <p className=" mb-4">For Large Organizations:</p>
            <ul className="list-disc list-inside  mb-4">
              <li>On-Premise Deployment</li>
              <li>Air-gapped Environments</li>
              <li>SSO & SAML</li>
              <li>LDAP & RBAC</li>
              <li>Audit LogsL</li>
              <li>99.99% Uptime SLA</li>
            </ul>
            {/* <p className="font-bold text-xl mb-4">Contact Us</p> */}
            <a href="#" className="mt-4 border-2 inline-block  hover:/80 p-2 rounded-lg ">Contact Us</a>
          </CardSpotlight>
        </div>
      </div>

      <div id="contact" className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Contact Us
        </h2>


        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">Your Name</Label>
              <Input id="firstname" placeholder="Bima Jovanta" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="example@example.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Input id="message" placeholder="Type Your message Here..." type="text" className="h-20" />
          </LabelInputContainer>


          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send Message &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />


        </form>
      </div>



    </div>
  );
}


const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};