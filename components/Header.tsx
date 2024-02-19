"use client";

import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

import { HeaderLink } from "./header-link";

export const Header = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchTerm = e.currentTarget.search.value as string;
    const encodedSearchTerm = encodeURIComponent(searchTerm);

    router.push(`/search?q=${encodedSearchTerm}`);
  };

  return (
    <header className="flex flex-col items-center gap-x-5 bg-walmart px-10 py-7 md:flex-row">
      <Link
        href="/"
        className="mb-5 flex-shrink-0 rounded-md p-2 outline-none ring-white transition focus:ring-1 md:mb-0"
      >
        <Image src="./walmart.svg" alt="author" height={150} width={150} />
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-1 items-center rounded-full bg-white"
      >
        <input
          className="mx-4 flex-1 text-black outline-none placeholder:text-sm"
          name="search"
          size={1}
          type="text"
          placeholder="Search Everything..."
        />
        <button type="submit" className="group rounded-full p-1 outline-none">
          <Search className="ring-walmart-dark h-10 w-10 cursor-pointer rounded-full bg-yellow-400 px-2 transition group-focus:ring-2" />
        </button>
      </form>
      <div className="mt-5 flex whitespace-nowrap md:mt-0">
        <HeaderLink href="/" Icon={Grid2X2} hiddenOnMobile title="Department" />
        <HeaderLink
          href="/"
          Icon={LayoutGrid}
          hiddenOnMobile
          title="Services"
        />
        <HeaderLink
          href="/"
          Icon={Heart}
          title="My Items"
          superText="Reorder"
        />
        <HeaderLink href="/" Icon={User} title="Account" superText="Sign In" />
        <HeaderLink
          href="/basket"
          Icon={ShoppingCart}
          title="$0.00"
          superText="No Items"
        />
      </div>
    </header>
  );
};