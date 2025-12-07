'use client'

import NavBar from "./lib/ui/nav-bar"
import GreetingSection from "./lib/ui/home-sections/greeting-section"
import { oswald } from "./lib/ui/fonts"
import AboutMeSection from "./lib/ui/home-sections/about-me-section"
import PorfolioSection from "./lib/ui/home-sections/portfolio-section"
import PricingSection from "./lib/ui/home-sections/pricing-section"
import FaqSection from "./lib/ui/home-sections/faq-section"
import ContactsSection from "./lib/ui/home-sections/contacts-section"

export default function Home() {
  return <div className={`${oswald.className}`}>
    <NavBar></NavBar>
    <GreetingSection></GreetingSection>
    <AboutMeSection></AboutMeSection>
    <PorfolioSection></PorfolioSection>
    <PricingSection></PricingSection>
    <FaqSection></FaqSection>
    <ContactsSection></ContactsSection>
  </div>
}