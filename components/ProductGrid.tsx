"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

const filters = [
  { key: "all", label: "الكل" },
  { key: "ready", label: "جاهزة للتركيب" },
  { key: "custom", label: "تفصيل حسب الطلب" },
] as const;

export default function ProductGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]["key"]>("all");

  const shown = useMemo(
    () => (filter === "all" ? products : products.filter((p) => p.type === filter)),
    [filter]
  );

  return (
    <section id="products" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold text-clay-deep">منتجاتنا</p>
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            مظلات وجلسات لكل مساحة
          </h2>
        </div>

        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                filter === f.key
                  ? "bg-iron text-sand"
                  : "border border-iron/15 text-iron/70 hover:bg-iron/5"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div key={filter} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <Reveal key={p.id} delay={i * 60} className="h-full">
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
