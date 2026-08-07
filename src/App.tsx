import React from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Contact } from "@/components/site/Contact";
import {
  Problem,
  Solution,
  Features,
  Gamification,
  Parents,
  Pillars,
  CTA,
  Footer,
} from "@/components/site/Sections";

function App() {
  const isContact = window.location.pathname === '/contact' || window.location.pathname === '/contact.html';

  if (isContact) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <Contact />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Gamification />
        <Parents />
        <Pillars />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
