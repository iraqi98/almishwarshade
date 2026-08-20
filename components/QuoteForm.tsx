"use client";

import { useState } from "react";
import { products, waLink } from "@/lib/products";
import RippleButton from "./RippleButton";

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [productId, setProductId] = useState(products[0].id);
  const [notes, setNotes] = useState("");

  const selected = products.find((p) => p.id === productId)!;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = [
      "مرحبا، أبغي عرض سعر لمظلة",
      `الاسم: ${name || "-"}`,
      `المنتج المطلوب: ${selected.name}`,
      `المنطقة/الموقع: ${area || "-"}`,
      notes ? `ملاحظات: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(message), "_blank");
  }

  return (
    <section id="quote" className="mx-auto max-w-3xl px-5 py-20 md:px-8">
      <div className="rounded-3xl border border-iron/10 bg-white/70 p-6 md:p-10">
        <p className="text-xs font-bold text-clay-deep">اطلب عرض سعر</p>
        <h2 className="font-display text-3xl font-extrabold md:text-4xl">
          حدد تفاصيلك ونرسلها لك عبر واتساب مباشرة
        </h2>
        <p className="mt-3 text-sm text-iron/60">
          تعبئة النموذج تفتح واتساب برسالة جاهزة تحتوي كل التفاصيل — بدون أي التزام.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm font-bold">
            الاسم
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="اسمك"
              className="rounded-xl border border-iron/15 bg-sand px-4 py-3 text-sm font-normal outline-none focus:border-clay"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-bold">
            المنطقة أو الموقع
            <input
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="مثال: بغداد - الكرادة"
              className="rounded-xl border border-iron/15 bg-sand px-4 py-3 text-sm font-normal outline-none focus:border-clay"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-bold sm:col-span-2">
            المنتج المطلوب
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

          <label className="flex flex-col gap-1.5 text-sm font-bold sm:col-span-2">
            ملاحظات إضافية
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="المساحة التقريبية، اللون المفضل، أي تفاصيل أخرى..."
              rows={4}
              className="resize-none rounded-xl border border-iron/15 bg-sand px-4 py-3 text-sm font-normal outline-none focus:border-clay"
            />
          </label>

          <RippleButton
            as="button"
            type="submit"
            className="rounded-full bg-clay px-7 py-3.5 text-sm font-extrabold text-sand transition hover:bg-clay-deep sm:col-span-2"
          >
            إرسال الطلب عبر واتساب
          </RippleButton>
        </form>
      </div>
    </section>
  );
}
