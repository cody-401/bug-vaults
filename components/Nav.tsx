// components/Navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { useSession } from "next-auth/react"

export default function Nav() {
 const [navOpen, setNavOpen] = useState(false);
  
 const {data: session} = useSession();
  
 console.log(session);


  const navStuff = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "View", href: "/ideas" },
    { label: "Make Post", href: "/post" },
  ];

  return (
    <nav className="flex items-center justify-between px-4 md:px-10 py-4 shadow-sm sticky top-0 bg-black/80 backdrop-blur-md text-white z-50 border-b border-neutral-800">
      {/* Logo and Brand Name */}
      <Link href="/" className="flex items-center gap-2 z-50">
        <Image
          src="/logo.png"
          alt="Bug Vault Logo"
          width={40}
          height={40}
          className="w-10 h-10 object-contain rounded-lg"
        />
        <p className="text-lg font-bold tracking-tight">
          Bug <span className="text-indigo-400 max-md:hidden">Vault</span>
        </p>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center text-sm font-medium gap-8">
        {navStuff.map((item, index) => (
          <Link key={index} href={item.href} className="hover:text-indigo-400 transition">
            {item.label}
          </Link>
        ))}
      </div>
     <Link href={session ? "/profile" : "/signin"} className="text-lg max-lg:ml-auto">
        {session?.user?.image ? (
          <img src={session.user.image} alt={session.user?.name || "User profile"} className="w-8 h-8 rounded-full" />
        ) : (
          "sign in"
        )}
      </Link>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setNavOpen(!navOpen)}
        className="text-2xl md:hidden z-50 focus:outline-none"
        aria-label="Toggle Menu"
      >
        {navOpen ? <IoCloseOutline /> : <RiMenu3Line />}
      </button>
          <link className=""></link>
      {/* Mobile Navbar Display Overlay */}
      {navOpen && (
        <div className="bg-black/95 backdrop-blur-xl h-dvh absolute w-full top-0 left-0 flex flex-col justify-center items-center md:hidden z-40">
          <div className="flex flex-col items-center text-xl gap-8">
            {navStuff.map((item, index) => (
              <Link 
                key={index} 
                href={item.href} 
                onClick={() => setNavOpen(false)}
                className="hover:text-indigo-400 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}