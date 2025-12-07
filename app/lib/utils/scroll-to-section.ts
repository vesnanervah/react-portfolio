import { AppSection } from "../data/nav";

export default function scrollToSection(section: AppSection) {
    const navBarHeight = 60;
    const target = document.getElementById(section);
    const scrollToTarget = target!.getBoundingClientRect().top + window.scrollY - navBarHeight;
    window.scrollTo({top: scrollToTarget, behavior: "smooth"})
}