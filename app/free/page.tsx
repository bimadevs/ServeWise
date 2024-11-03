"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BackgroundLines } from "./components/ui/background-lines";
import { LinkPreview } from "./components/ui/text-preview";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { MultiStepLoader as Loader } from "./components/ui/loader";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "./components/ui/text-hover";


export default function Free() {

    const loadingStates = [
        { text: "Get Your Request" },
        { text: "Write Your Ai" },
        { text: "Generate Your Code" },
        { text: "Copy to Your Clipboard" },
    ];

    const [loading, setLoading] = useState(false);
    const [copiedText, setCopiedText] = useState<string | null>(null); // Menyimpan teks yang disalin

    // Fungsi untuk menyalin teks ke clipboard
    const handleCopyText = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(text); // Simpan teks yang disalin untuk menampilkan status
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    // Fungsi untuk menangani klik tombol
    const handleButtonClick = (text: string) => {
        setLoading(true); // Mulai animasi loader
        handleCopyText(text); // Salin teks
        setTimeout(() => setLoading(false), loadingStates.length * 2000); // Hentikan animasi setelah selesai
    };

    return (
        <div>
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <h2 className="bg-clip-text text-transparent bg-gradient-to-t from-gray-500 via-white to-black text-center text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    It&lsquo;s Free
                </h2>
                <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                    Kami menyediakan ini secara gratis sehingga Anda dapat menggunakan AI secara gratis. Selalu dukung kami dengan membeli produk kami.
                </p>
            </BackgroundLines>

            <div className="flex justify-center items-center h-[40rem] flex-col px-4">
                <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
                    <LinkPreview url="https://gemini.google.com" className="font-bold">
                        Gemini
                    </LinkPreview>{" "}
                    and{" "}
                    <LinkPreview url="https://vectorshift.ai/" className="font-bold">
                        VectorShift
                    </LinkPreview>{" "}
                    are a great way to build Ai.
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
                    Visit{" "}
                    <LinkPreview
                        url="https://serve-wise.vercel.app/"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                        ServeWise
                    </LinkPreview>{" "}
                    for amazing Gemini and VectorShift AI.
                </p>
            </div>

            <div className="w-full mb-6 flex items-center justify-center flex-row">
                {/* Core Loader Modal */}
                <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

                {/* Tombol untuk memulai loader dan menyalin teks yang berbeda */}
                <div className="lg:w-1/2 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-t from-gray-500 via-white to-black inline-block">
                        <h1 className="md:text-2xl">CLICK THIS BUTTON TO COPY YOUR AI</h1>

                    </span>
                    <p className="md:text-xl text-gray-500 mt-2">Paste to your html in tag body</p>
                    <div className="space-y-4 w-full h-full border p-4 rounded-lg mt-6 flex items-center justify-center flex-col">
                        <h1 className="text-lg md:text-xl font-bold ">ChatBot</h1>
                        <div className="flex justify-center items-center w-full gap-8">
                            <button
                                onClick={() => handleButtonClick('<script async id="vectorshift-chat-widget" src="https://app.vectorshift.ai/chatWidget.js" chatbot-id="6726325a471c30a1baa70961" chatbot-height="600px" chatbot-width="400px" /></script>')}
                                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                                style={{
                                    boxShadow: "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
                                }}
                            >
                                Copy Code
                            </button>
                        </div>

                    </div>
                </div>

                {loading && (
                    <button
                        className="fixed top-4 right-4 text-black dark:text-white z-[120]"
                        onClick={() => setLoading(false)}
                    >
                        <IconSquareRoundedX className="h-10 w-10" />
                    </button>
                )}
            </div>

            <div className="mt-6 flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
                <TextRevealCard
                    text="It&lsquo;s Free"
                    revealText="but It&lsquo;s better to buy it"
                >
                    <TextRevealCardTitle>
                        Support Us by Purchasing
                    </TextRevealCardTitle>
                    <TextRevealCardDescription>
                        Hover/Swap this text
                    </TextRevealCardDescription>
                </TextRevealCard>
            </div>


        </div>
    )
}