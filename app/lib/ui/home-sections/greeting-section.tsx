import Image from "next/image"
import ScrollDown from "../scroll-down"
import { mulish } from "../fonts"

export default function GreetingSection() {
    return <div className="flex flex-col md:flex-row md:justify-center bg-stone-900 pl-5 pr-5 pb-14 text-white gap-5 md:gap-10">
        {FirstBlock()}
        {SecondBlock()}
        {ThirdBloc()}
    </div>
}

function FirstBlock() {
    return <div className="pt-14 md:pt-40">
        {NumbersRow()}
        <div className="h-10"></div>
        {Header()}
        <div className="h-10"></div>
        {SubHeader()}
        {ScrollDownBlock()}
    </div>
}

function NumbersRow() {
    return <div className="flex justify-start md:gap-15">
        {BigNumber("487", "Photo sessions")}
        {BigNumber("356", "Satisfied clients")}
    </div>
}

function BigNumber(n: string, label: string) {
    return <div className="flex gap-2 text-4xl">
        <div>+</div>
        <div className="flex flex-col gap-2">
            <div>{n}</div>
            <div className={"text-base " + mulish.className}>{label}</div>
        </div>
    </div>
}

function Header() {
    return <h1 className="text-4xl md:text-5xl lg:text-[116px]">
        PROFESSIONAL 
        <br></br>
        PHOTOGRAPHER
    </h1>
}

function SubHeader() {
    return <div className="text-xl">CAPTURE THE MOMENT. TELL YOUR STORY.</div>
}

function ScrollDownBlock() {
    return <div className="hidden md:block md:pt-40">
        <ScrollDown></ScrollDown>
    </div>
}

function SecondBlock() {
    return <div className="hidden xl:block h-[220px] w-[220px] mt-72">
        <Image src={"/img.png"} height={220} width={220} alt="An image of woman"></Image>
    </div>
}

function ThirdBloc() {
    return <div className="flex flex-col justify-end items-end lg:pt-8">
        <div className="h-[294px] w-[220px] lg:h-[374px] lg:w-[280px]">
            <Image src="/picture.png" alt="A photo of woman" width={280} height={374}></Image>
        </div>
        <div className={`w-[220px] pt-15 md:pt-72 text-right ${mulish.className}`}>
            Hi! I’m Vera, a photographer. For me, photography is more than just an image. 
        </div>
    </div>
}