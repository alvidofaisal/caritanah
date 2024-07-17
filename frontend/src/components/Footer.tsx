import Link from "next/link";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";

// Custom X (formerly Twitter) icon component
const XLogo = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-12 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Real estate near me */}
          <div>
            <h3 className="font-semibold mb-4">Real estate near me</h3>
            <ul className="space-y-2">
              {[
                "Land for sale",
                "Land auctions",
                "Land for lease",
                "Tanah Kosong",
                "Lahan Disewakan",
                "Sawah/Ladang/Kebun",
                "Lahan Peternakan",
                "Lahan Komersial",
                "Lahan Industri",
                "Area Konservasi",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Land market and property updates */}
          <div>
            <h3 className="font-semibold mb-4">
              Land market and property updates
            </h3>
            <div className="flex mb-4">
              <Input
                type="email"
                placeholder="Enter email to subscribe"
                className="rounded-r-none"
              />
              <Button type="submit" className="rounded-l-none">
                Subscribe
              </Button>
            </div>
            <ul className="grid grid-cols-2 gap-2">
              {[
                "Advertise",
                "Help center",
                "Land prices",
                "Land brokers",
                "Land services",
                "Loan calculator",
                "Land blog",
                "About us",
                "Contact us",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Have feedback? */}
          <div>
            <h3 className="font-semibold mb-4">
              Have feedback?{" "}
              <Link href="#" className="text-green-600 hover:underline">
                Help us improve
              </Link>
            </h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="hover:text-green-600">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:text-green-600">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="hover:text-green-600">
                <XLogo size={24} />
              </Link>
              <Link href="#" className="hover:text-green-600">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom links */}
        <div className="border-t pt-8 flex flex-wrap justify-between items-center">
          <p>&copy; 2024 Developed by RAFP. All rights reserved.</p>
          <div className="space-x-4">
            <Link href="#" className="hover:underline">
              New listings
            </Link>
            <Link href="#" className="hover:underline">
              Sitemap
            </Link>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <Link href="#" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
