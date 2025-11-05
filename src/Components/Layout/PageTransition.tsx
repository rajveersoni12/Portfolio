import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("enter");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("exit");
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === "exit") {
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("enter");
      }, 150); // Half of the transition time
      return () => clearTimeout(timer);
    }
  }, [transitionStage, location]);

  return (
    <div
      className={`min-h-screen w-full bg-black transition-all duration-300 ease-out ${
        transitionStage === "enter"
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
      key={displayLocation.pathname}
    >
      {children}
    </div>
  );
};

export default PageTransition;
