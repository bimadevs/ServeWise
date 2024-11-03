"use client"
import Image from "next/image";
export default function Testimonial() {
    return (
        <section className=" py-16">
            <div className="container mx-auto px-4 flex justify-center items-center flex-col">
                <span className="bg-clip-text mb-8 text-transparent bg-gradient-to-t from-gray-500 via-white to-black inline-block">
                    <h1 className="text-2xl md:text-4xl ">Testimonials</h1>
                </span>
                <div className="mb-16">
                    <h3 className="text-xl text-gray-400 text-center mb-8">What our Coustumer Says</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="border p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <Image
                                    src="https://ucarecdn.com/4aa3f491-c4eb-4449-a7bd-8e1b48fa5752/testimonial1.jpg"
                                    width={48}
                                    height={48}
                                    alt="Testimonial 1"
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-white">Clara Nortis</h4>
                                    <p className="text-sm text-gray-400">CEO, TechCorp</p>
                                </div>
                            </div>
                            <p className="text-gray-300">&quot;Chatbot AI telah signifikan meningkatkan efisiensi layanan pelanggan kami.
                                Kami telah melihat peningkatan dalam waktu respons dan peningkatan kepuasan pelanggan.&quot;</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <Image
                                    src="https://ucarecdn.com/5c8ae984-c6ed-4eb1-bc7d-3168739eaf27/testimonial2.jpg"
                                    width={48}
                                    height={48}
                                    alt="Testimonial 2"
                                    className="w-12 h-12 rounded-full mr-4"
                                />                            <div>
                                    <h4 className="font-semibold text-white">Jane Smith</h4>
                                    <p className="text-sm text-gray-400">CTO, InnovateCo</p>
                                </div>
                            </div>
                            <p className="text-gray-300">&quot;Mengimplementasikan chatbot AI ini benar-benar mengubah permainan untuk tim support kami.
                                Ini menangani pertanyaan rutin dengan mudah, memungkinkan staf kami fokus pada masalah yang lebih kompleks.&quot;</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <Image
                                    src="https://ucarecdn.com/c04367f6-5135-4c01-a5ab-070e770c83aa/testimonial3.jpg"
                                    width={48}
                                    height={48}
                                    alt="Testimonial 3"
                                    className="w-12 h-12 rounded-full mr-4"
                                />                            
                                <div>
                                    <h4 className="font-semibold text-white">Mike Johnson</h4>
                                    <p className="text-sm text-gray-400">Support Manager, RetailGiant</p>
                                </div>
                            </div>
                            <p className="text-gray-300">&quot;Pelanggan kami sangat menyukai respon instan yang mereka dapatkan dari chatbot.
                                Ini tersedia 24/7, yang telah sangat meningkatkan skor kepuasan pelanggan kami.&quot;</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}