import Splash from "@/components/splash";
import MeetTheFounder from "@/components/meet-the-founder";
import Packages from "@/components/packages";
import Contact from "@/components/contact";
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center">
        <Splash />
        <MeetTheFounder />
        <Packages />
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
