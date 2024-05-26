import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="py-2 border-b border-slate-300">
      <div className="container mx-auto max-w-5xl flex flex-row items-center justify-between">
        <p>DAZZLE</p>
        <ul className=" flex flex-row gap-2">
          <li>
            <Link
              href="/"
              className="block py-2 px-3 text-slate-400 hover:text-pink-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/jewelry"
              className="block py-2 px-3  text-slate-400 hover:text-pink-600"
            >
              Jewelry
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="block py-2 px-3 text-slate-400 hover:text-pink-600"
            >
              ContactUs
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/about-us"
              className="block py-2 px-3 text-slate-400 hover:text-pink-600"
            >
              AboutUs
            </Link>
          </li>
        </ul>
        <div>
          <ShoppingBag className="cursor-pointer text-slate-400 hover:text-pink-600"/>
        </div>
      </div>
    </nav>
  );
}
