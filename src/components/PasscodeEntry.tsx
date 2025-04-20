
import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const PasscodeEntry: React.FC = () => {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  const { authenticate } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = authenticate(passcode);
    
    if (!isValid) {
      setError("ACCESS DENIED");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  // Character scrambling effect
  const [scrambledText, setScrambledText] = useState("");
  
  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let interval: ReturnType<typeof setInterval>;
    
    if (passcode) {
      let count = 0;
      interval = setInterval(() => {
        let result = "";
        for (let i = 0; i < passcode.length; i++) {
          if (i < passcode.length - count) {
            result += chars[Math.floor(Math.random() * chars.length)];
          } else {
            result += passcode[i];
          }
        }
        setScrambledText(result);
        count = (count + 1) % (passcode.length + 1);
      }, 50);
    } else {
      setScrambledText("");
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [passcode]);

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-cipher-dark border border-neon-green/30 rounded-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-mono font-bold tracking-tight">
            <span className="glitch-text">ACCESS</span>
          </h2>
          <p className="text-sm font-mono text-muted-foreground">
            ENTER DROP CODE
          </p>
        </div>
        
        <div className="space-y-4">
          <div className={`space-y-2 relative ${shake ? 'animate-shake' : ''}`}>
            <div className="flex items-center justify-between">
              <label
                htmlFor="passcode"
                className="text-sm font-mono font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                CODE
              </label>
              {error && (
                <p className="text-xs font-mono text-destructive animate-pulse">
                  {error}
                </p>
              )}
            </div>
            <div className="relative">
              <Input
                id="passcode"
                type="text"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value.toUpperCase());
                  setError("");
                }}
                className="font-mono tracking-wider text-center bg-cipher-dark border-neon-green/30 
                  focus:border-neon-green focus:ring-1 focus:ring-neon-green"
                placeholder="XXXX0000"
              />
              {scrambledText && (
                <div className="absolute inset-0 flex items-center justify-center text-neon-green/30 pointer-events-none font-mono tracking-wider">
                  {scrambledText}
                </div>
              )}
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full font-mono bg-transparent hover:bg-neon-green/10 border border-neon-green text-neon-green hover:text-neon-green"
          >
            DECRYPT
          </Button>
        </div>
      </form>
    </div>
  );
};
