import { services } from "@/data/site";
import Image from "next/image";

export function Services() {
  return (
    <section id="servicos" className="bg-[#2b1a10] px-5 py-20 text-stone-50 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d8a33a]">
            Servicos
          </p>
          <h2 className="mt-3 font-serif text-4xl font-black sm:text-5xl">
            Tudo para comprar, cuidar e fazer o rebanho crescer.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-md border border-[#d8a33a]/25 bg-[#3a2415]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#2b1a10]/25 transition duration-500 group-hover:bg-[#2b1a10]/5" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-black text-[#f0c767]">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-stone-200">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
