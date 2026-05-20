export function About() {
  return (
    <section className="bg-[#f6edda] px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8b5a25]">
            Sobre a fazenda
          </p>
          <h2 className="mt-3 font-serif text-4xl font-black text-[#2b1a10] sm:text-5xl">
            Tradicao, selecao e cuidado no campo.
          </h2>
        </div>
        <div className="grid gap-5 text-[#4a3020] sm:grid-cols-2">
          <p className="text-lg leading-8">
            A Nairopecuaria trabalha com uma estrutura simples e responsavel:
            animais bem acompanhados, informacao clara e atendimento rapido
            para quem pretende comprar com seguranca.
          </p>
          <p className="text-lg leading-8">
            O nosso foco principal e a venda de animais, mas tambem orientamos
            produtores em escolhas de racas, alimentacao e processos de cuidado
            que valorizam o rebanho.
          </p>
        </div>
      </div>
    </section>
  );
}
