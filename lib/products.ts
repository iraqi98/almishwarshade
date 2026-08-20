export type ProductType = "ready" | "custom";

export interface Product {
  id: string;
  name: string;
  category: string;
  type: ProductType;
  priceFrom: number;
  description: string;
  features: string[];
  colorway: string; // tailwind bg class for the placeholder swatch
}

export const WHATSAPP_NUMBER = "9647747901085";
export const PHONE_TEL = "tel:+9647747901085";
export const MAP_LINK = "https://www.google.com/maps?q=33.291832,44.349888";
export const INSTAGRAM_LINK = "https://www.instagram.com/almishwarshade";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function formatIQD(n: number) {
  return new Intl.NumberFormat("ar-IQ").format(Math.round(n)) + " د.ع";
}

export const products: Product[] = [
  {
    id: "pyramid-classic",
    name: "مظلة هرمية كلاسيك",
    category: "مظلات هرمية",
    type: "ready",
    priceFrom: 450000,
    description:
      "مظلة هرمية بتصميم أنيق، هيكل حديد مغلون وجادر أسترالي مقاوم للعوامل الجوية. مناسبة للحدائق المنزلية والمقاهي الصغيرة.",
    features: ["جادر أسترالي أصلي", "هيكل مغلون ضد الصدأ", "تركيب خلال 3 أيام", "ضمان 5 سنوات"],
    colorway: "bg-clay",
  },
  {
    id: "pyramid-xl",
    name: "مظلة هرمية XL",
    category: "مظلات هرمية",
    type: "custom",
    priceFrom: 900000,
    description:
      "مقاسات كبيرة تناسب صالات الأفراح والمطاعم والمساحات الواسعة، بتصميم هندسي مخصص حسب موقعك.",
    features: ["تصميم هندسي حسب المساحة", "دعامات مركزية مقواة", "تركيب فريق متخصص", "ضمان يصل إلى 10 سنوات"],
    colorway: "bg-clay-deep",
  },
  {
    id: "electric-shade",
    name: "مظلة كهربائية أوتوماتيكية",
    category: "مظلات كهربائية",
    type: "custom",
    priceFrom: 1200000,
    description:
      "فتح وغلق أوتوماتيكي بريموت كنترول، مثالية للمسابح والمطاعم الراقية والأسطح التي تحتاج تحكم سريع بالتظليل.",
    features: ["موتور صامت", "تحكم عن بعد", "مقاومة كاملة للمطر", "صيانة دورية مجانية سنة أولى"],
    colorway: "bg-shade-green",
  },
  {
    id: "garden-seating",
    name: "جلسة حديقة متكاملة",
    category: "جلسات حدائق",
    type: "custom",
    priceFrom: 700000,
    description:
      "تصميم جلسة كاملة تناسب حديقتك، تجمع بين المظلة والأثاث والإضاءة لأجواء مريحة طوال أيام السنة.",
    features: ["تصميم ثلاثي الأبعاد قبل التنفيذ", "اختيار الألوان والخامات", "أثاث خارجي مقاوم للطقس", "إضاءة مدمجة اختيارية"],
    colorway: "bg-gold",
  },
  {
    id: "rooftop-seating",
    name: "جلسة سطح عصرية",
    category: "جلسات أسطح",
    type: "custom",
    priceFrom: 650000,
    description:
      "حوّل سطح بيتك إلى مساحة عائلية مظللة ومريحة، بتصميم يراعي التهوية والخصوصية.",
    features: ["حواجز خصوصية اختيارية", "مقاومة للرياح العالية", "تشطيب داخلي وخارجي", "استشارة تصميم مجانية"],
    colorway: "bg-steel",
  },
  {
    id: "cafe-shade",
    name: "مظلة مقاهي وجلسات خارجية",
    category: "مظلات تجارية",
    type: "ready",
    priceFrom: 380000,
    description:
      "حل سريع وعملي لأصحاب المقاهي والمطاعم لتوفير جلسات خارجية مظللة تجذب الزبائن.",
    features: ["تركيب سريع", "قابلة للطي والتخزين", "خامات مقاومة للاستخدام التجاري", "أسعار خاصة للكميات"],
    colorway: "bg-clay",
  },
];
