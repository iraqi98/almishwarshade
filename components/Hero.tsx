"use client";

import { useEffect, useRef, useState } from "react";
import { waLink } from "@/lib/products";
import RippleButton from "./RippleButton";

const phrases = [
  { line1: "ظل يليق ببيتك،", line2: "مصمم على مقاس مكانك" },
  { line1: "راحة الصيف،", line2: "تبدأ من مظلة تدوم" },
  { line1: "جادر أصلي،", line2: "هيكل يدوم" },
  { line1: "مقاس يطابق مكانك،", line2: "تصميم يطابق ذوقك" },
  { line1: "من الشمس للظل،", line2: "جلسة تليق بعائلتك" },
  { line1: "جودة تدوم،", line2: "ضمان يطمئنك" },
  { line1: "تحكم بالظل،", line2: "بضغطة زر" },
  { line1: "خبرة بغدادية،", line2: "تنفيذ يدوم" },
  { line1: "تصميم يلفت الأنظار،", line2: "جودة تدوم" },
  { line1: "من حر الصيف،", line2: "مظلتك تحميك" },
];

export default function Hero() {
  const layerARef = useRef<HTMLDivElement>(null);
  const layerBRef = useRef<HTMLDivElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phraseVisible, setPhraseVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let fadeTimeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setPhraseVisible(false);
      fadeTimeout = setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % phrases.length);
        setPhraseVisible(true);
      }, 180);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (layerARef.current) {
          layerARef.current.style.transform = `translateY(${y * 0.15}px)`;
        }
        if (layerBRef.current) {
          layerBRef.current.style.transform = `translateY(${y * 0.08}px)`;
        }
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden bg-iron text-sand">
      {/* Dappled shade signature: drifting stripe layers evoking sun through pyramid shade cloth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70">
        <div ref={layerARef} className="absolute -inset-24">
          <div className="shade-drift absolute inset-0 stripe-mask bg-gradient-to-br from-gold/25 via-transparent to-transparent" />
        </div>
        <div ref={layerBRef} className="absolute -inset-24">
          <div
            className="shade-drift absolute inset-0 stripe-mask bg-gradient-to-tl from-clay/20 via-transparent to-transparent"
            style={{ animationDelay: "-9s" }}
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-iron/40 to-iron" />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <p className="mb-5 inline-flex items-center rounded-full border border-gold/40 px-4 py-1.5 text-xs font-bold leading-none tracking-wide text-gold">
          بغداد - القادسية · خبرة موثوقة في تنفيذ المظلات
        </p>
        <h1
          className={`min-h-[5.5rem] max-w-2xl font-display text-4xl font-extrabold leading-[1.15] transition-all ease-out md:min-h-[9rem] md:text-6xl ${
            phraseVisible
              ? "translate-y-0 opacity-100 duration-300"
              : "translate-y-1 opacity-0 duration-150"
          }`}
        >
          {phrases[phraseIndex].line1}
          <br />
          <span className="text-gold">{phrases[phraseIndex].line2}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand/80">
          مظلات هرمية وكهربائية وجلسات حدائق وأسطح، بجادر أسترالي أصلي وهيكل
          حديد مغلون يدوم لسنوات — ضمان يصل إلى 10 سنوات.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#products"
            className="rounded-full bg-gold px-7 py-3 text-sm font-extrabold text-iron transition hover:brightness-95"
          >
            تصفح المنتجات
          </a>
          <RippleButton
            href={waLink("مرحبا، أبغي عرض سعر الصيف لمظلة")}
            target="_blank"
            className="rounded-full border border-sand/30 px-7 py-3 text-sm font-extrabold text-sand transition hover:bg-sand/10"
          >
            احصل على عرض الصيف
          </RippleButton>
        </div>

        <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-sand/15 pt-8">
          <div>
            <dt className="font-display text-3xl font-extrabold text-gold">10</dt>
            <dd className="mt-1 text-xs text-sand/70">سنوات ضمان</dd>
          </div>
          <div>
            <dt className="font-display text-3xl font-extrabold text-gold">5,200+</dt>
            <dd className="mt-1 text-xs text-sand/70">متابع يثقون فينا</dd>
          </div>
          <div>
            <dt className="font-display text-3xl font-extrabold text-gold">100%</dt>
            <dd className="mt-1 text-xs text-sand/70">جادر أسترالي أصلي</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
