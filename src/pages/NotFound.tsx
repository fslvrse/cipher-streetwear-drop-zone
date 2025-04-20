import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-mono font-bold mb-4">
          <span className="glitch-text">404</span>
        </h1>
        <p className="text-xl font-display mb-4">ACCESS DENIED</p>
        <a href="/" className="font-mono text-neon-green hover:text-neon-pink transition-colors">
          RETURN TO MAINFRAME
        </a>
      </div>
    </div>
  );
};

export default NotFound;
