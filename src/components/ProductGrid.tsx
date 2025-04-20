
import React from "react";
import { useAuth } from "@/contexts/AuthContext";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  available: boolean;
};

// Mock data - in a real app, this would come from an API
const products: Product[] = [
  {
    id: 1,
    name: "CIPHER HOODIE V1",
    price: 120,
    image: "/placeholder.svg",
    available: true,
  },
  {
    id: 2,
    name: "STEALTH TEE",
    price: 65,
    image: "/placeholder.svg",
    available: true,
  },
  {
    id: 3,
    name: "ENCRYPTED CARGO",
    price: 150,
    image: "/placeholder.svg",
    available: true,
  },
  {
    id: 4,
    name: "NETWORK JACKET",
    price: 220,
    image: "/placeholder.svg",
    available: false,
  },
  {
    id: 5,
    name: "DATA BEANIE",
    price: 45,
    image: "/placeholder.svg",
    available: true,
  },
  {
    id: 6,
    name: "SHADOW CAP",
    price: 55,
    image: "/placeholder.svg",
    available: false,
  },
];

export const ProductGrid: React.FC = () => {
  const { logout } = useAuth();
  
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-display font-bold">DROP_01</h2>
        <button 
          onClick={logout}
          className="text-xs font-mono text-muted-foreground hover:text-neon-pink transition-colors"
        >
          DISCONNECT
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id}
            className="group border border-border bg-cipher-muted/20 hover:bg-cipher-muted/40 transition-all duration-300"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {!product.available && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                  <p className="font-mono text-neon-pink animate-pulse">SOLD OUT</p>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-mono text-sm truncate">{product.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="font-display font-bold">${product.price}</p>
                <button 
                  className={`text-xs px-3 py-1 font-mono rounded-sm transition-colors ${
                    product.available 
                      ? 'bg-neon-green/20 text-neon-green hover:bg-neon-green/30' 
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!product.available}
                >
                  {product.available ? 'ADD' : 'GONE'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
