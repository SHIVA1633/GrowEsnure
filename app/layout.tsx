'use client';

import { metadata } from "./metadata";

import "./globals.css"
import { Inter } from "next/font/google"
import { Logo } from "../components/Logo"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

function MobileNav({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sm:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label="Toggle menu">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && <div className="absolute top-16 left-0 right-0 bg-white shadow-lg py-2 px-4 z-50">{children}</div>}
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen`}>
        <div className="bg-white bg-opacity-80">
          <header className="bg-white shadow-md">
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
              <Link href="/" className="z-10 flex-shrink-0">
                <Logo />
              </Link>
              <div className="hidden sm:block">
                <ul className="flex flex-wrap justify-center gap-4">
                  <li>
                    <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <MobileNav>
                <ul className="flex flex-col space-y-4">
                  <li>
                    <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </MobileNav>
            </nav>
          </header>
          <main className="container mx-auto mt-8 px-4">{children}</main>
          <footer className="bg-gray-100 mt-12 py-6">
            <div className="container mx-auto text-center">
              <div className="mb-4">
                <Logo />
              </div>
              <p className="text-gray-600">
                &copy; {new Date().getFullYear()} Futuredge Solutions. All rights reserved.
              </p>
              <p className="text-gray-600">Email: contact@futuredgesolutions.in | Phone: +919156979551</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
