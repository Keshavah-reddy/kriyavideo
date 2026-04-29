import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureBento } from "@/components/FeatureBento";
import { Sections } from "@/components/Sections";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeatureBento />
      <Sections />
    </main>
  );
}
