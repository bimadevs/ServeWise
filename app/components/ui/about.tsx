
"use client";
import React from "react";
import Image from "next/image";



export default function About() {
  return (
    <section id="about" className="py-16 text-white">
      <div className="container mx-auto px-4 flex justify-center items-center flex-col">
        <span className="bg-clip-text mb-8 text-transparent bg-gradient-to-t from-gray-500 via-white to-black inline-block">
          <h1 className="text-2xl md:text-4xl ">About Us</h1>
        </span>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 transform hover:scale-105 transition duration-300">
            <div className="relative">
              <Image
                src="/img/ServeWiseLogo.PNG"
                width={500}
                height={500}
                alt="Logo ServeWise"
              />

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 rounded-b-lg">
                <p className="text-sm text-secondary italic">Mentransformasi cara bisnis berinteraksi dengan pelanggan
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h3 className="text-3xl font-semibold mb-4 text-accent">Revolutionizing Layanan Pelanggan dengan AI</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Di ServeWise, kami bersemangat untuk mentransformasi cara bisnis berinteraksi dengan
              pelanggan mereka. Chatbot AI canggih kami dirancang untuk memberikan pengalaman pelanggan yang mulus, efisien, dan
              personal.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Didirikan pada tahun 2024 oleh tim penggemar AI dan ahli layanan pelanggan, kami telah tumbuh
              menjadi penyedia solusi chatbot cerdas terkemuka. Misi kami adalah membantu bisnis
              dari berbagai ukuran memanfaatkan kekuatan AI untuk meningkatkan kepuasan pelanggan, mengurangi biaya, dan mendorong
              pertumbuhan.
            </p>
            <ul className="mb-6 space-y-2 text-slate-300">
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Teknologi AI terkemuka di industri
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Solusi yang dapat disesuaikan untuk setiap bisnis
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Tim dukungan yang berdedikasi
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Inovasi dan perbaikan berkelanjutan
              </li>
            </ul>
            <a href="/free"
              className="inline-block border text-white py-3 px-6 rounded-full font-bold hover:bg-accent transform hover:scale-110 transition duration-300">
              Coba Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
