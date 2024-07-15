"use client"

import { useEffect, useState } from 'react';
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button, buttonVariants } from "../components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description: "Get your assets delivered to your email in seconds and download them right away."
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description: "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee."
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description: "We've pledged 1% of sales to the preservation and restoration of the natural environment."
  },
];

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log("Fetching data from /api/data");
        const response = await fetch('/api/data');
        console.log("Response status:", response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("Received data:", result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Pusat jual-beli lahan <span className="text-green-600">#1</span> di Indonesia.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">Ayo bangun kembali. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>Browse Empty Lands Around You</Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
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

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}