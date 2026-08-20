import Image from "next/image";
import { waLink, MAP_LINK, INSTAGRAM_LINK } from "@/lib/products";
import { InstagramIcon, WhatsappIcon } from "@/components/icons";

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 4.5c0-.6.4-1 1-1h3.2c.5 0 .9.3 1 .8l.9 3.6c.1.4 0 .8-.3 1.1L8.2 10.5a13.7 13.7 0 0 0 5.3 5.3l1.5-1.6c.3-.3.7-.4 1.1-.3l3.6.9c.5.1.8.5.8 1V19c0 .6-.4 1-1 1h-1.5C10.4 20 4 13.6 4 6V4.5Z" />
    </svg>
  );
}

function MapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M9 4 3 6.5v13L9 17m0-13 6 2m-6-2v13m6-11 6-2.5v13L15 19m0-13v13m0-13-6 2" />
    </svg>
  );
}

const contactLinks = [
  { icon: PinIcon, label: "بغداد - القادسية", href: null },
  { icon: PhoneIcon, label: "07747901085", href: null, dir: "ltr" as const },
  { icon: MapIcon, label: "افتح الموقع على الخريطة", href: MAP_LINK },
  {
    icon: WhatsappIcon,
    label: "تواصل عبر واتساب",
    href: waLink("مرحبا، أبغي أستفسر عن المظلات"),
  },
  { icon: InstagramIcon, label: "تابعنا على انستغرام", href: INSTAGRAM_LINK },
];

const quickLinks = [
  { href: "#products", label: "المنتجات" },
  { href: "#how", label: "طريقة العمل" },
  { href: "#quote", label: "اطلب عرض سعر" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-iron text-sand">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-3 md:gap-12 md:px-8">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="مظلات المشوار"
              width={40}
              height={40}
              className="h-10 w-10 rounded-md object-contain"
            />
            <span className="font-display text-lg font-extrabold">مظلات المشوار</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand/70">
            خبرة في تصميم وتنفيذ المظلات الهرمية والكهربائية، وجلسات تناسب الحدائق والأسطح.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-extrabold text-gold">تواصل معنا</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-sand/70">
            {contactLinks.map(({ icon: Icon, label, href, dir }) => {
              const content = (
                <>
                  <Icon className="h-4 w-4 shrink-0 text-gold" />
                  <span dir={dir}>{label}</span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      className="flex items-center gap-2 no-underline transition-colors duration-300 hover:text-gold"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-2">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-extrabold text-gold">روابط سريعة</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-sand/70">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="no-underline transition-colors duration-300 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-sand/10 py-5 text-center text-xs text-sand/50">
        © {new Date().getFullYear()} مظلات المشوار - جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
