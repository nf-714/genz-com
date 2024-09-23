import { ModeToggle } from "@/components/landing/theme/theme-switcher.component";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import SearchBar from "../search/search.component";

export default function Navbar() {
  return (
    <nav className="dark:bg-zinc-900 p-4 flex-none">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-indigo-900  dark:text-indigo-600 font-extrabold">
              Artistic-Z
            </span>
          </Link>
          <div className="md:flex items-center justify-center space-x-4 md:pr-5">
            <Link
              href="/all"
              className="text-indigo-400 hover:text-gray-800  dark:text-indigo-200 dark:hover:text-gray-400"
            >
              All
            </Link>
            <Link
              href="/shirts"
              className="text-indigo-400 hover:text-gray-800  dark:text-indigo-200 dark:hover:text-gray-400"
            >
              Shirts
            </Link>
            <Link
              href="/stickers"
              className="text-indigo-400 hover:text-gray-800  dark:text-indigo-200 dark:hover:text-gray-400"
            >
              Stickers
            </Link>
          </div>
        </div>
        <div className="hidden items-center justify-center md:flex md:w-1/3">
          <SearchBar />
        </div>
        <div className="flex justify-end md:w-1/3">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="relative text-gray-400 border-gray-400 dark:text-zinc-700 dark:border-zinc-700"
          >
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              5
            </span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
