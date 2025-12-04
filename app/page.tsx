'use client'

import NavBar from "./lib/ui/nav-bar"
import GreetingSection from "./lib/ui/home-sections/greeting-section"
import { oswald } from "./lib/ui/fonts"

export default function Home() {
  return <div className={`${oswald.className}`}>
    <NavBar></NavBar>
    <GreetingSection></GreetingSection>
  </div>
}