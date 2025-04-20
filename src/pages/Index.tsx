import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { AuthPage } from "./AuthPage";
import { StorePage } from "./StorePage";

const Index: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <StorePage /> : <AuthPage />;
};

export default Index;
