import AccordionGallery from "@/components/AccordionGallery/AccordionGallery";

const items = [
  { image: "https://picsum.photos/id/1015/900/1200", label: "Canyon", link: "#" },
  { image: "https://picsum.photos/id/1018/900/1200", label: "Ridgeline", link: "#" },
  { image: "https://picsum.photos/id/1039/900/1200", label: "Falls", link: "#" },
  { image: "https://picsum.photos/id/1043/900/1200", label: "Harbour", link: "#" },
  { image: "https://picsum.photos/id/1044/900/1200", label: "Skyline", link: "#" },
];

export default function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <p className="text-xs font-bold text-clay-deep">معرض الأعمال</p>
      <h2 className="font-display text-3xl font-extrabold md:text-4xl">
        لمحة من تنفيذاتنا
      </h2>

      <div className="mt-10">
        <AccordionGallery items={items} defaultIndex={2} expandRatio={0.52} trigger="hover" />
      </div>
    </section>
  );
}
