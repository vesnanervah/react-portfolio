'use client'

import Image from "next/image"
import ScrollDown from "../scroll-down"
import { mulish } from "../fonts"
import { Suspense } from "react"
import { BigAsyncNumberWithLabel, BigNumberWithLabelSkelet } from "../big-async-number-with-label"
import getRandomNumberPromise from "../../data/random_number_promise"


export default function GreetingSection() {
    const randomSessionsCount = getRandomNumberPromise();
    const randomClientCount = getRandomNumberPromise()

    return <div className="flex flex-col md:flex-row md:justify-center bg-stone-900 pl-5 pr-5 pb-14 pt-15 text-white gap-5 md:gap-10">
        
        <div className="pt-14 md:pt-40">
            <div className="flex justify-start gap-15">

                <Suspense fallback={
                    <BigNumberWithLabelSkelet label="Photo sessions"></BigNumberWithLabelSkelet>}>
                    <BigAsyncNumberWithLabel label="Photo sessions" n={randomSessionsCount}></BigAsyncNumberWithLabel>
                </Suspense>
                <Suspense fallback={<BigNumberWithLabelSkelet label="Satisfied clients"></BigNumberWithLabelSkelet>}>
                    <BigAsyncNumberWithLabel label="Satisfied clients" n={randomClientCount}></BigAsyncNumberWithLabel>
                </Suspense>
            </div>
            <div className="h-10"></div>
            <h1 className="text-4xl md:text-5xl lg:text-[116px]">
                PROFESSIONAL 
                <br></br>
                PHOTOGRAPHER
             </h1>
            <div className="h-10"></div>
            <div className="text-xl">CAPTURE THE MOMENT. TELL YOUR STORY.</div>
            <div className="hidden md:block md:pt-40">
                <ScrollDown></ScrollDown>
            </div>
        </div>

        <div className="hidden xl:block h-[220px] w-[220px] mt-72">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img.png`} height={220} width={220} alt="An image of woman"></Image>
        </div>

        <div className="flex flex-col justify-end items-end lg:pt-8">
            <div className="h-[294px] w-[220px] lg:h-[374px] lg:w-[280px]">
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/picture.png`} alt="A photo of woman" width={280} height={374}></Image>
            </div>
            <div className={`w-[220px] pt-15 md:pt-72 text-right ${mulish.className}`}>
                Hi! I’m Vera, a photographer. For me, photography is more than just an image. 
            </div>
        </div>
    </div>
}
