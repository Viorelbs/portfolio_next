import { ContactDrawer } from "@/components/Layout/ContactDrawer";
import Hero from "@/components/Layout/Hero";
import Navbar from "@/components/Layout/Navbar";

export default function Home() {
  return (
    <main>
      <ContactDrawer buttonType="secondary" />
      <div className="flex">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
