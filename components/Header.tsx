"use client";

import { useState } from "react";
import Image from "next/image";
import { waLink, INSTAGRAM_LINK } from "@/lib/products";
import { InstagramIcon, WhatsappIcon } from "@/components/icons";

const links = [
  { href: "#products", label: "المنتجات" },
  { href: "#how", label: "طريقة العمل" },
  { href: "#calculator", label: "حاسبة السعر" },
  { href: "#quote", label: "اطلب عرض سعر" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-iron/8 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-nowrap items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-2 text-iron no-underline">
          <Image
            src="/logo.png"
            alt="مظلات المشوار"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-contain"
            priority
          />
          <span className="font-display text-lg font-extrabold tracking-tight">
            مظلات المشوار
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-1 py-2 text-sm font-bold text-iron/80 no-underline transition-colors duration-300 hover:text-clay-deep"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 border-r border-iron/12 pr-6 lg:flex">
          <a
            href={waLink("مرحبا، أبغي أستفسر عن المظلات")}
            target="_blank"
            aria-label="واتساب"
            className="grid h-8 w-8 place-items-center rounded-full border border-iron/15 text-iron/70 no-underline transition-colors duration-300 hover:border-[#25D366] hover:text-[#25D366]"
          >
            <WhatsappIcon className="h-4 w-4" />
          </a>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            aria-label="انستغرام"
            className="grid h-8 w-8 place-items-center rounded-full border border-iron/15 text-iron/70 no-underline transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-9 w-9 place-items-center rounded-md border border-iron/20 lg:hidden"
          aria-label="القائمة"
        >
          <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-iron/8 bg-sand px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 text-sm font-bold text-iron/80 no-underline"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 flex items-center gap-4 border-t border-iron/8 pt-5">
            <a
              href={waLink("مرحبا، أبغي أستفسر عن المظلات")}
              target="_blank"
              aria-label="واتساب"
              className="grid h-8 w-8 place-items-center rounded-full border border-iron/15 text-iron/70 no-underline transition-colors duration-300 hover:border-[#25D366] hover:text-[#25D366]"
            >
              <WhatsappIcon className="h-4 w-4" />
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              aria-label="انستغرام"
              className="grid h-8 w-8 place-items-center rounded-full border border-iron/15 text-iron/70 no-underline transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
