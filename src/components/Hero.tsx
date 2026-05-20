"use client"; 
import { whatsappUrl } from "@/data/site";
import Image from "next/image"; // ← Adicione esta linha!


export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-[#2b1a10] px-5 pb-14 pt-28 text-white sm:px-8 lg:pb-20">
          {/* Usando Image do Next.js */}
      <Image
        src="/images/Hero2.jpeg"
        alt="Hero background"
        fill
        priority
        className="object-cover bg-center transition duration-700 hover:scale-[1.02]"
        onError={(e) => {
          // Fallback se a imagem não carregar
          const target = e.target as HTMLImageElement;
          target.src = "https://images.unsplash.com/photo-1605709389565-9a7f1c8c639b?q=80&w=2070&auto=format";
        }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#24170e] via-[#24170e]/65 to-[#24170e]/20" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-[#d8a33a]/50 bg-[#d8a33a]/15 px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-[#f0c767]">
            Futuro da Agropecuária
          </p>
          <h1 className="font-serif text-5xl font-black leading-[0.95] text-[#fff7e6] sm:text-7xl lg:text-8xl">
            Animais fortes para uma fazenda mais produtiva.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100 sm:text-xl">
            Na Nairopecuaria vendemos animais selecionados e acompanhamos cada
            produtor com consultoria e cuidado tecnico do rebanho.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#animais"
              className="rounded-full bg-[#d8a33a] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[#2b1a10] transition hover:bg-[#f0c767]"
            >
              Ver animais
            </a>
            <a
              href={whatsappUrl}
              className="rounded-full border border-stone-200/45 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#d8a33a] hover:text-[#f0c767]"
            >
              Reservar agora
            </a>
          </div>
        </div>
        <div className="grid gap-3 rounded-md border border-[#d8a33a]/30 bg-[#3a2415]/70 p-5 backdrop-blur-sm sm:grid-cols-3 lg:grid-cols-1">
          {["Venda direta", "Consultoria rural", "Manejo animal"].map((item) => (
            <div key={item} className="border-l-4 border-[#d8a33a] pl-4">
              <span className="text-sm font-black uppercase tracking-[0.16em] text-[#f0c767]">
                Nairo
              </span>
              <p className="mt-1 font-serif text-2xl font-bold text-stone-50">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
