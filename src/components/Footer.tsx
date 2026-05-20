import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#24170e] px-5 py-8 text-stone-300 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm sm:flex-row">
        
         <Link href="/" className="font-serif text-2xl font-black tracking-wide">
                   <Image
                     src="/images/Logo-nairopecuaria.png"
                     alt="Nairo Pecuária - Voltar para página inicial"
                     width={100}
                     height={100}
                     className="cursor-pointer" // Adiciona cursor de mão
                     priority // Prioriza o carregamento do logo
                   />
                 </Link>
      
        <p>Venda, consultoria e cuidado animal.</p>
      </div>
    </footer>
  );
}
