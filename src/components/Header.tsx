import { whatsappUrl } from "@/data/site";

const navItems = [
  { label: "Servicos", href: "#servicos" },
  { label: "Animais", href: "#animais" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#2b1a10]/75 text-stone-50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#" className="font-serif text-2xl font-black tracking-wide">
          Nairopecuaria
        </a>
        <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-[0.18em] text-stone-200 md:flex">
          {navItems.map((item) => (
            <a key={item.href} className="transition hover:text-[#d8a33a]" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={whatsappUrl}
          className="rounded-full border border-[#d8a33a] bg-[#d8a33a] px-4 py-2 text-sm font-black text-[#2b1a10] shadow-lg shadow-black/20 transition hover:bg-[#f0c767]"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
