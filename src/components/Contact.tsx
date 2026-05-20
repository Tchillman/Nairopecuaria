import { whatsappUrl } from "@/data/site";

export function Contact() {
  return (
    <section id="contacto" className="bg-[#6f431c] px-5 py-20 text-[#fff7e6] sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0c767]">
            Reservas e atendimento
          </p>
          <h2 className="mt-3 font-serif text-4xl font-black sm:text-5xl">
            Gostou de algum animal? A reserva comeca numa conversa.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-100">
            Entre em contacto pelo WhatsApp para confirmar preco, estado do
            animal, localizacao, transporte e melhores datas para visita.
          </p>
        </div>
        <div className="rounded-md border border-[#f0c767]/40 bg-[#2b1a10]/45 p-6">
          <p className="font-serif text-3xl font-black">Nairopecuaria</p>
          <p className="mt-4 leading-7 text-stone-100">
            Venda de bovinos, caprinos e ovinos, com apoio tecnico para
            produtores e compradores.
          </p>
          <a
            href={whatsappUrl}
            className="mt-6 inline-flex rounded-full bg-[#d8a33a] px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#2b1a10] transition hover:bg-[#f0c767]"
          >
            Contactar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
