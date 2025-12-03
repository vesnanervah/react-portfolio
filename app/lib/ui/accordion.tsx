'use client'

import { useState } from "react"
import { Faq } from "../data/faq"
import clsx from "clsx"

export default function Accordion(props: AccordionProps) {
    const [isOpened, setOpened] = useState(false)

    return <div className="text-white border-b-2 border-white overflow-hidden">
        <div className="flex justify-between align-middle text-xl cursor-pointer hover:text-rose-600" onClick={() => setOpened(!isOpened)}>
            {props.faq.title}
            <div className="flex">
                <span className={clsx("h-1 w-4 bg-white relative transition-all duration-200", {
                    "rotate-90 left-4": isOpened,
                    "rotate-0 left-4": !isOpened
                })}></span>
                <span className="h-1 w-4 bg-white"></span>
            </div>
        </div>

        <div className={clsx("text-base transition-all duration-200", {
            "h-auto": isOpened,
            "h-0": !isOpened,
        })}>
            {props.faq.description}    
        </div>             
    </div>
}

interface AccordionProps {
    faq: Faq,
}
