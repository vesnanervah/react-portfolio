'use client'

import { use } from "react";
import { mulish } from "./fonts";
import { ThreeDot } from "react-loading-indicators";
import AnimatedNumber from "react-animated-numbers";


export function BigNumberWithLabelSkelet({label}: { label: string }) {
    return <div className="flex gap-2 flex-col items-center">
        <ThreeDot color="white" size="small"/>
        <div className={"text-base " + mulish.className}>{label}</div>
    </div>
}

export function BigAsyncNumberWithLabel({ n: futureNum, label }: { n: Promise<number | null>, label: string }) {
    const num = use(futureNum);

    return <div className="flex gap-2 text-4xl">
        <div>+</div>
        <div className="flex flex-col gap-2">
            <AnimatedNumber animateToNumber={num!}></AnimatedNumber>
            <div className={"text-base " + mulish.className}>{label}</div>
        </div>
    </div>
}