import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "../Footer/Footer";
import PageTransition from "./PageTransition";

const MainLayout = () => {
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 0.6,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    const raf = (time: number) => {
      lenis.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.current?.destroy();
    };
  }, []);

  return (
    <div className="smooth-scroll bg-black min-h-screen">
      <Navbar />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </div>
  );
};

export default MainLayout;
