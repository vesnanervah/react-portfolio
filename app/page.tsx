'use client'

import NavBar from "./lib/ui/nav-bar"
import GreetingSection from "./lib/ui/home-sections/greeting-section"
import { oswald } from "./lib/ui/fonts"
import AboutMeSection from "./lib/ui/home-sections/about-me-section"

export default function Home() {
  return <div className={`${oswald.className}`}>
    <NavBar></NavBar>
    <GreetingSection></GreetingSection>
    <AboutMeSection></AboutMeSection>
  </div>
}