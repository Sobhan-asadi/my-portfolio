import AboutMe from "../components/AboutMe";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import SkillsSection from "../components/SkillsSection";
import StarBackground from "../components/StarBackground";
import ThemeToggl from "../components/ThemeToggl";

function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      {/* Theme Toggl */}
      <ThemeToggl />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSection />
      </main>
    </div>
  );
}

export default Home;
