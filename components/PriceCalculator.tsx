"use client";

import { useState } from "react";
import { products, waLink, formatIQD } from "@/lib/products";
import RippleButton from "./RippleButton";

const BASE_AREA = 9;

export default function PriceCalculator() {
  const [productId, setProductId] = useState(products[0].id);
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");

  const selected = products.find((p) => p.id === productId)!;

  const lengthNum = parseFloat(length) || 0;
  const widthNum = parseFloat(width) || 0;
  const area = lengthNum * widthNum;

  const estimatedPrice =
    area > 0
      ? Math.max(selected.priceFrom, (selected.priceFrom * area) / BASE_AREA)
      : selected.priceFrom;

  function handleWhatsapp() {
    const message = [
      "مرحبا، أبغي أستفسر عن تقدير سعر",
      `المنتج: ${selected.name}`,
      lengthNum && widthNum ? `المقاس: ${lengthNum} × ${widthNum} متر` : null,
      `السعر التقريبي: ${formatIQD(estimatedPrice)}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(message), "_blank");
  }

  return (
    <section id="calculator" className="bg-sand-deep/60 py-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="text-xs font-bold text-clay-deep">حاسبة السعر</p>
        <h2 className="font-display text-3xl font-extrabold md:text-4xl">
          احسب السعر التقريبي لمظلتك
        </h2>
        <p className="mt-3 text-sm text-iron/60">
          اختر نوع المنتج وأدخل المقاس، ونعطيك تقدير سريع للسعر.
        </p>

        <div className="mt-8 rounded-3xl border border-iron/10 bg-white/70 p-6 md:p-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm font-bold sm:col-span-2">
              نوع المنتج
              <select
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className="rounded-xl border border-iron/15 bg-sand px-4 py-3 text-sm font-normal outline-none focus:border-clay"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1.5 text-sm font-bold">
              الطول (متر)
              <input
                type="number"
                min="0"
                step="0.1"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                placeholder="مثال: 4"
                className="rounded-xl border border-iron/15 bg-sand px-4 py-3 text-sm font-normal outline-none focus:border-clay"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm font-bold">
              العرض (متر)
              <input
                type="number"
                min="0"
                step="0.1"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="مثال: 3"
                className="rounded-xl border border-iron/15 bg-sand px-4 py-3 text-sm font-normal outline-none focus:border-clay"
              />
            </label>
          </div>

          <div className="mt-8 rounded-2xl bg-sand p-5">
            <p className="text-[11px] text-iron/50">السعر التقريبي</p>
            <p className="font-display text-2xl font-extrabold text-iron">
              {formatIQD(estimatedPrice)}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-iron/60">
              السعر تقريبي وقابل للتغيير حسب الموقع والخامات، السعر النهائي يتحدد بعد المعاينة
            </p>
          </div>

          <RippleButton
            as="button"
            type="button"
            onClick={handleWhatsapp}
            className="mt-6 w-full rounded-full bg-clay px-7 py-3.5 text-sm font-extrabold text-sand transition hover:bg-clay-deep"
          >
            أرسل هذا التقدير عبر واتساب
          </RippleButton>
        </div>
      </div>
    </section>
  );
}
