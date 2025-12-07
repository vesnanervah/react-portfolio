import { AppSection } from "../data/nav";
import scrollToSection from "../utils/scroll-to-section";
import { mulish } from "./fonts";

export default function ScrollDown() {
    return <button onClick={() => scrollToSection(AppSection.Contacts)} className={"flex align-middle text-white fill-white transition-colors duration-200 hover:text-red-600 hover:fill-rose-600 cursor-pointer " + `${mulish.className}`}>
        Scroll down
        <svg width="24"height="24" className="black"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 12L12 19L5 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
}