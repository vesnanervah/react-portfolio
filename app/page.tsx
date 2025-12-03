'use client'

import Button from "./lib/ui/button";
import NavBar from "./lib/ui/nav-bar";

export default function Home() {
  return <div>
    <NavBar></NavBar>
    <Button text="text" onClick={() => {}}></Button>
    <div className="bg-amber-50 h-screen"></div>
  </div>;
}
