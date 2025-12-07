import Image from "next/image"
import { mulish } from "../fonts"
import SectionHeader, { SectionHeaderColor } from "../section-header"

export default function AboutMeSection() {
    return <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start gap-10 pl-5 pr-5 pt-15 pb-15 bg-white">
        {FirstBloc()}
        {SecondBloc()}
        {ThirdBloc()}
    </div>
}


function FirstBloc() {
    return <div className="min-w-[280px] max-w-[340px] md:max-w-[728px] lg:max-w-[440px]">
        <div className="">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/about-me-1.png`} alt="A photo of me" height={728} width={728}></Image>
        </div>
        <SectionHeader className="pt-10 pb-3" header="ABOUT ME" color={SectionHeaderColor.black}>
            Hi! I’m Vera, a photographer with 5 years of experience. For me, photography is more than just an image. It’s a way to feel the moment, capture the atmosphere, and freeze time. I work with people, stories, and emotions.
        </SectionHeader>
    </div>
}

function SecondBloc() {
    return <div className="min-w-[280px] max-w-[340px] md:max-w-[728px] lg:max-w-[440px]">
        <div className={`text-base ${mulish.className} pb-10`}>I shoot all across Europe. I love natural light, genuine emotions, and beautiful details. Each shot is a small piece of art. My goal is to create timeless images that tell your unique story.</div>
        <div className="">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/about-me-2.png`} alt="A photo of me" height={728} width={728}></Image>
        </div>
        <div className={`bloc lg:hidden pt-10 text-base ${mulish.className}`}>Seeing with heart. Shooting with soul.</div>
    </div>
}

function ThirdBloc() {
    return <div className="hidden lg:block  min-w-[280px] max-w-[340px] md:max-w-[728px] lg:max-w-[440px]">
        <div className="mb-10">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/about-me-3.png`} alt="A photo of me" height={728} width={728}></Image>
        </div>
        <div className={`text-base ${mulish.className}`}>Seeing with heart. Shooting with soul.</div>
    </div>
}