import AboutMe from "../components/AboutMe";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

export default function Home() {
  return (
    <div id="home" className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutMe />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
