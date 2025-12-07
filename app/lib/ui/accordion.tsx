'use client'

import { Faq } from "../data/faq"
import clsx from "clsx"

export default function Accordion(props: AccordionProps) {

    return <div className="text-white border-b-2 border-white overflow-hidden">
        <div className="flex justify-between items-center- text-xl cursor-pointer hover:text-rose-600 pb-2 pt-2 uppercase" onClick={props.onClick}>
            {props.faq.title}
            <div className="flex pt-4 pb-4">
                <span className={clsx("h-1 w-4 bg-white z-1 relative transition-all duration-200", {
                    "rotate-90 left-4": props.isOpened,
                    "rotate-0 left-4": !props.isOpened
                })}></span>
                <span className="h-1 w-4 bg-white"></span>
            </div>
        </div>

        <div className={clsx("text-base transition-all duration-200", {
            "h-auto pb-4": props.isOpened,
            "h-0": !props.isOpened,
        })}>
            {props.faq.description}    
        </div>             
    </div>
}

interface AccordionProps {
    faq: Faq,
    isOpened: boolean,
    onClick: () => void,
}
