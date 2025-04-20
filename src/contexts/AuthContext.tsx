
import React, { createContext, useContext, useState, useEffect } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  authenticate: (passcode: string) => boolean;
  logout: () => void;
  currentDropCode: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// This would normally come from a backend
// For demo purposes, we'll hardcode it but in production this would change with each drop
const CURRENT_DROP_CODE = "CIPHER2025";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if there's a valid session on load
  useEffect(() => {
    const authStatus = localStorage.getItem("cipher_auth");
    if (authStatus === "authenticated") {
      setIsAuthenticated(true);
    }
  }, []);

  const authenticate = (passcode: string) => {
    const isValid = passcode.toUpperCase() === CURRENT_DROP_CODE;
    
    if (isValid) {
      setIsAuthenticated(true);
      localStorage.setItem("cipher_auth", "authenticated");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("cipher_auth");
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        authenticate, 
        logout,
        currentDropCode: CURRENT_DROP_CODE
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
