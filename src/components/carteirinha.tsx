import { addMonths, format, lastDayOfMonth } from "date-fns";
import Image from "next/image";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CarteirinhaProps {
  cloaked?: boolean;
}

export const Carteirinha = ({ cloaked }: CarteirinhaProps) => {
  return (
    <div className="m-auto block w-[550px] rounded-lg border border-gray-200 bg-white p-6 shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Logo da Faculdade de Brasília"
          />
          <h2 className="font-bold">
            <span className="text-[#f27e17]">Faculdade</span>{" "}
            <span className="text-[#073f60]">Brasília</span>
          </h2>
        </div>
        <strong className="text-sm font-normal text-[#073f60]">
          Sua ponte para o futuro
        </strong>
      </div>
      <div className="my-6 flex gap-6">
        <div>
          <Image
            src="/profile.jpg"
            className="border border-[#073f60]"
            width={150}
            height={200}
            alt="Logo da Faculdade de Brasília"
          />

          <div className="mt-1 text-center text-xs text-gray-100">
            {format(new Date(), "dd/MM/yyyy HH:mm")}
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-2">
          <Info
            label="Nome Completo"
            value="José Carlos de Freitas"
            className="col-span-2"
          />
          <Info
            label="CPF"
            value={cloaked ? "42*.***.***-*1" : "423.734.998-51"}
          />
          <Info
            label="Data de Nascimento"
            value={cloaked ? "**/**/****" : "18/07/1995"}
          />
          <Info
            label="Curso"
            value="Pós-Graduação - MBA em Arquitetura Full Cycle"
            className="col-span-2"
          />
          <Info label="Semestre" value="Pós" />
          <Info label="Turno" value="Livre" />
          <Info label="Matrícula" value={cloaked ? "12****18" : "12326518"} />
          <Info
            label="Validade"
            value={format(
              lastDayOfMonth(addMonths(new Date(), 1)),
              "dd/MM/yyyy",
            )}
          />
        </ul>
      </div>
      <a
        href="https://www.faculdadebrasilia.com/"
        className="block text-center text-xs text-[#073f60] uppercase"
      >
        www.faculdadebrasilia.com
      </a>
    </div>
  );
};

interface InfoProps extends ComponentProps<"li"> {
  label: string;
  value: string;
}

const Info = ({ label, value, className, ...props }: InfoProps) => (
  <li className={twMerge("flex flex-col", className)} {...props}>
    <span className="text-xs font-bold text-[#073f60] uppercase">{label}:</span>
    <span className="text-sm">{value}</span>
  </li>
);
