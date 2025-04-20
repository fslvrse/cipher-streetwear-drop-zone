
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="py-6 border-b border-border">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-display font-bold text-2xl tracking-tighter">
          <span className="glitch-text">CIPHER</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="font-mono text-sm text-foreground hover:text-neon-green transition-colors">
            DROP_01
          </a>
          <a href="#" className="font-mono text-sm text-muted-foreground hover:text-neon-green transition-colors">
            ARCHIVE
          </a>
          <a href="#" className="font-mono text-sm text-muted-foreground hover:text-neon-green transition-colors">
            MANIFESTO
          </a>
        </nav>
      </div>
    </header>
  );
};
