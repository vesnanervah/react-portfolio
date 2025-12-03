'use client'

import Accordion from "./lib/ui/accordion";
import Button from "./lib/ui/button";
import NavBar from "./lib/ui/nav-bar";
import ScrollDown from "./lib/ui/scroll-down";
import TextField from "./lib/ui/text-field";

export default function Home() {
  return <div>
    <NavBar></NavBar>
    <Button text="text" onClick={() => {}}></Button>
    <ScrollDown></ScrollDown>
    <TextField placeholder="abobus"></TextField>
    <Accordion faq={{title: "eblan", description: "tupoi"}}></Accordion>
    <div className="bg-amber-50 h-screen"></div>
  </div>;
}
