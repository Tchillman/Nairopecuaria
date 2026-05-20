"use client";

import { useState } from "react";
import { animals, whatsappUrl } from "@/data/site";
import Image from "next/image";

const detailLabels = {
  weight: "Peso",
  breed: "Raca",
  age: "Idade",
  purpose: "Finalidade",
};

const INITIAL_COUNT = 6;
const INCREMENT = 3;

export function Animals() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [isLoading, setIsLoading] = useState(false);

  const toggleAnimals = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (visibleCount === animals.length) {
        // Se está mostrando todos, volta para o inicial
        setVisibleCount(INITIAL_COUNT);
      } else {
        // Se não, mostra mais
        setVisibleCount(Math.min(visibleCount + INCREMENT, animals.length));
      }
      setIsLoading(false);
    }, 300);
  };

  const isShowingAll = visibleCount === animals.length;
  const visibleAnimals = animals.slice(0, visibleCount);
  const hasMoreAnimals = visibleCount < animals.length;

  return (
    <section id="animais" className="bg-[#fff7e6] px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header - mesmo código */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8b5a25]">
              Animais para venda
            </p>
            <h2 className="mt-3 font-serif text-4xl font-black text-[#2b1a10] sm:text-5xl">
              Reserve por WhatsApp e confirme disponibilidade.
            </h2>
          </div>
          <a
            href={whatsappUrl}
            className="w-fit rounded-full bg-[#2b1a10] px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-[#f0c767] transition hover:bg-[#6f431c]"
          >
            Falar com a equipa
          </a>
        </div>

        {/* Grid de animais */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleAnimals.map((animal) => (
            <article
              key={animal.name}
              className="overflow-hidden rounded-md border border-[#d8a33a]/45 bg-[#f6edda] shadow-lg shadow-[#6f431c]/10 transition-transform hover:scale-[1.02]"
            >
              {/* Conteúdo do card igual ao original */}
              <div className="relative h-52 sm:h-56">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#d8a33a] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[#2b1a10]">
                  {animal.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-black text-[#2b1a10]">
                      {animal.name}
                    </h3>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-[#8b5a25]">
                      {animal.price}
                    </p>
                  </div>
                </div>
                <dl className="mt-5 grid grid-cols-2 gap-2.5">
                  {Object.entries(detailLabels).map(([key, label]) => (
                    <div key={key} className="rounded-md bg-[#fff7e6] p-3">
                      <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-[#8b5a25]">
                        {label}
                      </dt>
                      <dd className="mt-1 text-sm font-bold text-[#2b1a10]">
                        {animal[key as keyof typeof detailLabels]}
                      </dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={whatsappUrl}
                  className="mt-5 block rounded-full border border-[#6f431c] px-4 py-2.5 text-center text-xs font-black uppercase tracking-[0.14em] text-[#2b1a10] transition hover:bg-[#2b1a10] hover:text-[#f0c767]"
                >
                  Reservar animal
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Botão único que alterna */}
        {(hasMoreAnimals || visibleCount > INITIAL_COUNT) && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={toggleAnimals}
              disabled={isLoading}
              className="group relative overflow-hidden rounded-full bg-[#2b1a10] px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#f0c767] transition-all hover:bg-[#6f431c] disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isLoading ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Carregando...
                  </>
                ) : (
                  <>
                    {isShowingAll ? (
                      <>
                        <svg
                          className="h-4 w-4 transition-transform group-hover:-translate-y-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                        Ver menos animais
                      </>
                    ) : (
                      <>
                        Ver mais animais
                        <svg
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </>
                    )}
                  </>
                )}
              </span>
            </button>
          </div>
        )}

        {/* Contador */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[#8b5a25]">
            Mostrando {visibleAnimals.length} de {animals.length} animais
          </p>
        </div>
      </div>
    </section>
  );
}