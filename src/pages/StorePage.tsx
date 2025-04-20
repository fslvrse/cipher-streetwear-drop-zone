
import React from "react";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { CountdownTimer } from "@/components/CountdownTimer";

export const StorePage: React.FC = () => {
  // Next drop date - set to 15 days from now
  const nextDropDate = new Date();
  nextDropDate.setDate(nextDropDate.getDate() + 15);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="bg-muted py-4">
        <div className="container mx-auto">
          <CountdownTimer targetDate={nextDropDate} />
        </div>
      </div>
      
      <main className="flex-grow">
        <ProductGrid />
      </main>
      
      <footer className="p-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs font-mono text-muted-foreground">
              &copy; {new Date().getFullYear()} CIPHER. ALL RIGHTS RESERVED.
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-xs font-mono text-muted-foreground hover:text-neon-pink transition-colors">
                INSTAGRAM
              </a>
              <a href="#" className="text-xs font-mono text-muted-foreground hover:text-neon-blue transition-colors">
                TWITTER
              </a>
              <a href="#" className="text-xs font-mono text-muted-foreground hover:text-neon-green transition-colors">
                DISCORD
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StorePage;
