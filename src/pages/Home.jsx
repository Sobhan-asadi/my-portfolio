import Navbar from "../components/Navbar";
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
    </div>
  );
}

export default Home;
