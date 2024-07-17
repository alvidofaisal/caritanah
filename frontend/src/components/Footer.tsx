import Link from "next/link";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

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
                <Twitter size={24} />
              </Link>
              <Link href="#" className="hover:text-green-600">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom links */}
        <div className="border-t pt-8 flex flex-wrap justify-between items-center">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          <div className="space-x-4">
            <Link href="#" className="hover:underline">
              Don't sell my info
            </Link>
            <Link href="#" className="hover:underline">
              Fair housing
            </Link>
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
