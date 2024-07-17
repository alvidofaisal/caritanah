"use client"

import { useEffect, useState } from 'react';
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button } from "../components/ui/button";
import { Search } from "lucide-react";
import { Input } from '../components/ui/input';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../components/ui/carousel';
import Link from 'next/link';
import Footer from '../components/Footer';

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
          <Search className="h-7 w-7 text-white" />
        </Button>
      </div>
    </div>
  );
};

const landTypes = [
  {
    name: "Tanah Kosong",
    icon: "🏞️",
    description: "Lahan yang belum dikembangkan, siap untuk berbagai keperluan.",
    slug: "tanah-kosong"
  },
  {
    name: "Lahan Disewakan",
    icon: "🏡",
    description: "Properti yang tersedia untuk disewa jangka pendek atau panjang.",
    slug: "lahan-disewakan"
  },
  {
    name: "Sawah/Ladang/Kebun",
    icon: "🌾",
    description: "Lahan pertanian produktif untuk berbagai jenis tanaman.",
    slug: "sawah-ladang-kebun"
  },
  {
    name: "Lahan Peternakan",
    icon: "🐄",
    description: "Area khusus untuk beternak dan produksi hewan ternak.",
    slug: "lahan-peternakan"
  },
  {
    name: "Lahan Komersial",
    icon: "🏢",
    description: "Properti untuk bisnis, ritel, dan kegiatan komersial lainnya.",
    slug: "lahan-komersial"
  },
  {
    name: "Lahan Industri",
    icon: "🏭",
    description: "Zona khusus untuk pabrik, gudang, dan fasilitas industri.",
    slug: "lahan-industri"
  },
  {
    name: "Area Konservasi",
    icon: "🌳",
    description: "Kawasan lindung untuk melestarikan alam dan keanekaragaman hayati.",
    slug: "area-konservasi"
  },
];

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ... (keep the data fetching logic as is)
  }, []);

  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Pusat jual-beli lahan <span className="text-green-600">#1</span> di Indonesia
          </h1>
          <LargeSearchBar maxWidth="max-w-2xl" placeholder="Cari lokasi lahan..." />
        </div>

        {/* TODO: List Products */}
        {loading && <p>Loading...</p>}
        {error && <p className='text-red-500'>{error}</p>}
        {data && (
          <div>
            <h2>Data from Spring Boot API:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </MaxWidthWrapper>

      {/* Carousel section */}
      <section className="border-t border-gray-200 bg-green-800 mt-20">
        <div className="py-20">
          <h2 className="text-white text-2xl font-bold text-center mb-8">Jenis Lahan</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {landTypes.map((type, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Link href={`/category/${type.slug}`} className="block aspect-square max-w-[250px] mx-auto">
                    <div className="p-3 border rounded-lg hover:shadow-md transition-shadow duration-200 h-full flex flex-col justify-between">
                      <div className="flex flex-col items-center">
                        <div className="text-3xl mb-3">{type.icon}</div>
                        <h3 className="text-base font-medium text-white mb-2 text-center">{type.name}</h3>
                      </div>
                      <p className="text-xs text-white text-muted-foreground text-center">{type.description}</p>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <Footer />
    </>
  );
}