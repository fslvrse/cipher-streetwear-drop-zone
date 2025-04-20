
import React from "react";
import { PasscodeEntry } from "@/components/PasscodeEntry";
import { CountdownTimer } from "@/components/CountdownTimer";

export const AuthPage: React.FC = () => {
  // Next drop date - set to 15 days from now
  const nextDropDate = new Date();
  nextDropDate.setDate(nextDropDate.getDate() + 15);
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md mb-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-display font-bold mb-2">
              <span className="glitch-text">CIPHER</span>
            </h1>
            <p className="font-mono text-sm text-muted-foreground">ENCRYPTED STREETWEAR</p>
          </div>
          
          <PasscodeEntry />
          
          <div className="mt-12">
            <CountdownTimer targetDate={nextDropDate} />
          </div>
        </div>
      </main>
      
      <footer className="p-6 border-t border-border">
        <div className="container mx-auto text-center text-xs font-mono text-muted-foreground">
          &copy; {new Date().getFullYear()} CIPHER. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
};

export default AuthPage;
