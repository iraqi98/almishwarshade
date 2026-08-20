const steps = [
  {
    title: "تختار المنتج",
    text: "تصفح المظلات الجاهزة للتركيب السريع، أو اطلب تصميم مخصص لمساحتك.",
  },
  {
    title: "معاينة وتصميم",
    text: "نزور الموقع أو نراجع الصور، ونتفق على المقاسات والألوان والخامات.",
  },
  {
    title: "تنفيذ وتركيب",
    text: "فريقنا ينفذ الهيكل المغلون ويركب الجادر الأسترالي بجودة تدوم لسنوات.",
  },
  {
    title: "ضمان وصيانة",
    text: "ضمان يصل إلى 10 سنوات، مع متابعة ما بعد التركيب عند الحاجة.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-sand-deep/60 py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-xs font-bold text-clay-deep">طريقة العمل</p>
        <h2 className="font-display text-3xl font-extrabold md:text-4xl">
          من الفكرة إلى الظل، بأربع خطوات
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-iron/10 bg-sand p-5">
              <span className="font-display text-2xl font-extrabold text-clay">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-base font-extrabold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-iron/70">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
