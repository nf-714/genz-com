import { ModeToggle } from "@/components/landing/theme/theme-switcher.component";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { signOutAction } from "@/app/action";
import { auth } from "@/auth/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import SearchBar from "../search/search.component";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="dark:bg-zinc-900 p-4 flex-none">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-indigo-900  dark:text-indigo-500 font-bold lg:font-extrabold">
              Artistic-Z
            </span>
          </Link>
          <div className="md:flex items-center justify-center space-x-4 md:pr-5">
            <Link
              href="/all"
              className="text-indigo-500 hover:text-gray-800  dark:text-indigo-500 dark:hover:text-gray-400"
            >
              All
            </Link>
            <Link
              href="/shirts"
              className="text-indigo-500 hover:text-gray-800  dark:text-indigo-500 dark:hover:text-gray-400"
            >
              Shirts
            </Link>
            <Link
              href="/stickers"
              className="text-indigo-500 hover:text-gray-800  dark:text-indigo-500 dark:hover:text-gray-400"
            >
              Stickers
            </Link>
          </div>
        </div>
        <div className="hidden items-center justify-center md:flex md:w-1/3">
          <SearchBar />
        </div>
        <div className="flex justify-end md:w-1/3">
          {/* Avatar Cart and Profile */}
          {session?.user ? (
            <div className="flex gap-4">
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

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="ml-2">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Order History</DropdownMenuItem>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem className="w-full">
                    <form action={signOutAction}>
                      <Button className="bg-black text-white hover:bg-gray-500">
                        Logout
                      </Button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex gap-4 justify-center items-center hover:underline">
              <ModeToggle />
              <Link href="/login" className="text-indigo-500">
                Login to shop
              </Link>
              <Link href="/sign-up">
                <Button variant="default" className="bg-indigo-500">
                  Create an account
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
