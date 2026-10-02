import { Outlet } from "react-router-dom";
import AmbientBackground from "../components/AmbientBackground";

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05050b] text-white">
      <AmbientBackground />

      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}
