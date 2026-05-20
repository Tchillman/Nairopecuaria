import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#24170e] px-5 py-8 text-stone-300 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm sm:flex-row">
        <a
          href="#"
          className="font-serif text-2xl font-black tracking-wide">
          <Image
            src="/img/logo-nairopecuaria.png"
            alt=""
            width={100}
            height={100}
            className="mix-blend-screen"

          />
        </a>
        <p>Venda, consultoria e cuidado animal.</p>
      </div>
    </footer>
  );
}
