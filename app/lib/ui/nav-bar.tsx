'use client'

import { useState } from "react";
import { AppSection } from "../data/nav";
import Image from "next/image";
import clsx from "clsx";

export default function NavBar() {
    const [mobileNavMenuVisible, setMobileNavMenuVisibility] = useState(false)

    return <nav className="sticky top-0 right-0 bg-stone-900">

        <div className="flex justify-between ">
            <span className="p-5">
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/heart.png`} height={20} width={20} alt="An image of heart"></Image>
            </span>
            <span className="hidden md:inline">
                {Object.values(AppSection).map(NavItem)}
            </span>
            <button onClick={() => setMobileNavMenuVisibility(!mobileNavMenuVisible)} className="inline md:hidden">
                <Image src={mobileNavMenuVisible ? "/burger-opened.png" : "/burger-closed.png"} height={60} width={60} alt={mobileNavMenuVisible ? "close navigation button" : "open navigation button"}></Image>
            </button>
        </div>
        
        <div className={clsx("w-screen overflow-hidden flex flex-col justify-center transition-all ease-in duration-100", { "h-screen md:hidden": mobileNavMenuVisible, "h-0": !mobileNavMenuVisible })}>
            {Object.values(AppSection).map(NavItem)}
        </div>
    </nav>
}

function NavItem(section: AppSection) {
    return <button key={section} className="text-base text-white pl-5 pr-5 pt-4 pb-4 transition-colors duration-200 ease-in cursor-pointer hover:text-rose-600" onClick={/*TODO: navigation*/ () => {}}>
        {getLabelFromAppSection(section).toUpperCase()}
    </button>
}

function getLabelFromAppSection(section: AppSection) {
    switch (section) {
        case AppSection.About:
            return 'about me'
        case AppSection.Portfolio:
            return 'portfolio'
        case AppSection.Price:
            return 'price' 
        case AppSection.Faq:
            return 'faq'    
        case AppSection.Contacts:
            return 'contacts'
    }
}