"use client";

import { SessionProvider } from "next-auth/react";
import Navbar from "./Navbar";

export function ClientProvider({ children }: { children: React.ReactNode }) {
    return <SessionProvider> 
    <main className="relative flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex-1">{children}</div>
    </main>
  </SessionProvider>  
}