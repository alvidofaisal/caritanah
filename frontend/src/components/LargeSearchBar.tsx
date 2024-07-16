import React from 'react';
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const LargeSearchBar = ({ maxWidth = "max-w-xl", placeholder = "Search locations" }) => {
  return (
    <div className={`w-full ${maxWidth} mx-auto mt-8`}>
      <div className="relative">
        <Input 
          type="text" 
          placeholder={placeholder} 
          className="w-full py-6 pl-6 pr-16 text-xl rounded-full shadow-lg focus:ring-2 focus:ring-green-500"
        />
        <Button 
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 rounded-full p-3"
        >
          <Search className="h-7 w-7" />
        </Button>
      </div>
    </div>
  );
};

export default LargeSearchBar;