import Image from "next/image";
import Hero from "./about/components/hero";
import Contact from "./about/components/contact";
import Features from "./about/components/features";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Contact />
    </div>
  );
}
