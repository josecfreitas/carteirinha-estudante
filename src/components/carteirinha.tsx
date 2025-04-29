import { addMonths, format, lastDayOfMonth } from "date-fns";
import Image from "next/image";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export type StudentSlug = keyof typeof students;

const students = {
  felipe: {
    name: "Felipe Dias Ribeiro",
    cpf: "386.189.978-70",
    birthDate: "10/09/1990",
    course: "Segurança da Informação",
    semester: "8º",
    shift: "Noturno",
    registration: "12377718",
  },
  jose: {
    name: "José Carlos de Freitas",
    cpf: "423.734.998-51",
    birthDate: "18/07/1995",
    course: "Pós-Graduação - MBA em Arquitetura Full Cycle",
    semester: "Pós",
    shift: "Livre",
    registration: "12326518",
  },
  willy: {
    name: "Willy Domingues Martinez ",
    cpf: "364.871.358-28 ",
    birthDate: "10/05/1991",
    course: "Pós-Graduação - Atendimento Educacional Especializado",
    semester: "Pós",
    shift: "Livre",
    registration: "12366618",
  },
};

interface CarteirinhaProps {
  studentSlug?: StudentSlug;
  cloaked?: boolean;
}

export const Carteirinha = ({
  cloaked,
  studentSlug = "jose",
}: CarteirinhaProps) => {
  if (!students[studentSlug]) {
    return (
      <div className="m-auto block w-[550px] rounded-lg border border-gray-200 bg-white p-6 shadow">
        <h2 className="text-center text-xl font-bold text-[#073f60]">
          Estudante não encontrado
        </h2>
      </div>
    );
  }

  const student = JSON.parse(JSON.stringify(students[studentSlug]));
  if (cloaked) {
    student.cpf = `${student.cpf.slice(0, 2)}*.***.***-${student.cpf.slice(-1)}`;
    student.birthDate = "**/**/****";
    student.registration = `${student.registration.slice(0, 2)}${Array(
      student.registration.length - 4,
    )
      .fill("*")
      .join("")}${student.registration.slice(-2)}`;
  }
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
            src={`/profile-${studentSlug}.jpg`}
            className="border border-[#073f60]"
            width={150}
            height={200}
            alt="Foto de perfil do estudante"
          />

          <div className="mt-1 text-center text-xs text-gray-100">
            {format(new Date(), "dd/MM/yyyy HH:mm")}
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-2">
          <Info
            label="Nome Completo"
            value={student.name}
            className="col-span-2"
          />
          <Info label="CPF" value={student.cpf} />
          <Info label="Data de Nascimento" value={student.birthDate} />
          <Info label="Curso" value={student.course} className="col-span-2" />
          <Info label="Semestre" value={student.semester} />
          <Info label="Turno" value={student.shift} />
          <Info label="Matrícula" value={student.registration} />
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
