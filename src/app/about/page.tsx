"use client"

import { ChevronRight, Home } from "lucide-react"

export default function About() {
    return (
        <>
        <div className="w-full">


        {/* about hero section only */}
            <section  className="w-full border-b border-gray-200 bg-mesh py-20">
                <div className=" max-w-7xl mx-auto">

               
              
                <span className="flex text-gray-500 text-sm font-bold items-center ">
                    <a href="/"><Home className="h-4 text-gray-500"/></a> <ChevronRight className="h-4 text-gray-500"/> About
                </span>
                <h1 className="text-4xl font-bold text-left text-[#0092BC] py-5">
                    About Sanskrit Olympiad
                </h1>
                <p className="text-md text-left max-w-4xl text-[#0092BC]">
                    The Sanskrit Olympiad is an initiative by Central Sanskrit University to promote Sanskrit language and culture among students across India.
                </p>
            </div>
            </section>



            {/* about section */}
            <div className="w-full max-w-7xl mx-auto">
                <h1 className=" text-4xl font-bold text-left text-[#0092BC] py-10">
                    About Us
                </h1>



            </div>
            </div>
        </>
    )

}