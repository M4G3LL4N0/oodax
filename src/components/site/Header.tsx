"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const nav = [
  { href: "/", label: "Home" },
  { href: "/demo", label: "Demo" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-100"
          onClick={() => setOpen(false)}
        >
          OODAX
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-cyan-200">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button href="/demo" className="px-4 py-2 text-xs sm:text-sm">
              Run a loop
            </Button>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-100 md:hidden"
            aria-expanded={open}
            aria-controls="oodax-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="oodax-mobile-nav"
          className="mx-auto flex max-w-7xl flex-col gap-1 border-t border-slate-800/80 px-4 py-3 sm:px-6 md:hidden"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-900 hover:text-cyan-200"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-3 pt-2">
            <Button href="/demo" className="w-full justify-center py-2.5 text-sm" onClick={() => setOpen(false)}>
              Run a loop
            </Button>
          </div>
          <p className="px-3 pt-2 text-[11px] leading-relaxed text-slate-500">
            Decision rehearsal and planning aid — not substitute for professional, legal, or crisis counsel.
          </p>
        </nav>
      )}
    </header>
  );
}
