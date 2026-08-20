import { Product, waLink, formatIQD } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-iron/10 bg-white/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-40 overflow-hidden">
        <div
          className={`absolute inset-0 transition-transform duration-300 group-hover:scale-105 ${product.colorway}`}
        >
          <div className="absolute inset-0 stripe-mask bg-iron/10" />
        </div>
        <span className="absolute right-3 top-3 rounded-full bg-iron/85 px-3 py-1 text-[11px] font-bold text-sand">
          {product.type === "ready" ? "جاهزة للتركيب" : "تفصيل حسب الطلب"}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-xs font-bold text-clay-deep">{product.category}</p>
          <h3 className="font-display text-lg font-extrabold">{product.name}</h3>
        </div>
        <p className="text-sm leading-relaxed text-iron/70">{product.description}</p>

        <ul className="mt-1 flex flex-col gap-1.5">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-iron/70">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between pt-4">
          <div>
            <p className="text-[11px] text-iron/50">يبدأ من</p>
            <p className="font-display text-base font-extrabold text-iron">
              {formatIQD(product.priceFrom)}
            </p>
          </div>
          <a
            href={waLink(`مرحبا، أبغي عرض سعر لـ "${product.name}"`)}
            target="_blank"
            className="rounded-full bg-iron px-4 py-2 text-xs font-extrabold text-sand transition-colors duration-300 group-hover:bg-clay"
          >
            اطلب عرض سعر
          </a>
        </div>
      </div>
    </div>
  );
}
