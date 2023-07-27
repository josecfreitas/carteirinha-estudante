import { format, lastDayOfMonth } from 'date-fns'
import Image from 'next/image'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Home() {
  return (
    <main className="px-4">
      <h1 className="text-[#073f60] text-center text-xl font-bold my-6">
        Carterinha de Estudante
      </h1>
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow w-[550px] m-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="Logo da Faculdade de Brasília"
            />
            <h2 className="font-bold">
              <span className="text-[#f27e17]">Faculdade</span>{' '}
              <span className="text-[#073f60]">Brasília</span>
            </h2>
          </div>
          <strong className="text-[#073f60] text-sm font-normal">
            Sua ponte para o futuro
          </strong>
        </div>
        <div className="flex gap-6 my-6">
          <div>
            <Image
              src="/profile.jpg"
              className="border border-[#073f60]"
              width={150}
              height={200}
              alt="Logo da Faculdade de Brasília"
            />
          </div>
          <ul className="grid grid-cols-2 gap-2">
            <Info
              label="Nome Completo"
              value="José Carlos de Freitas"
              className="col-span-2"
            />
            <Info label="CPF" value="423.734.998-51" />
            <Info label="Data de Nascimento" value="18/07/1995" />
            <Info
              label="Curso"
              value="Pós-Graduação - MBA em Arquitetura Full Cycle"
              className="col-span-2"
            />
            <Info label="Semestre" value="Pós" />
            <Info label="Turno" value="Livre" />
            <Info label="Matrícula" value="12326518" />
            <Info
              label="Validade"
              value={format(lastDayOfMonth(new Date()), 'dd/MM/yyyy')}
            />
          </ul>
        </div>
        <a
          href="https://www.faculdadebrasilia.com/"
          className="uppercase block text-center text-xs text-[#073f60]"
        >
          www.faculdadebrasilia.com
        </a>
      </div>
    </main>
  )
}

interface InfoProps extends ComponentProps<'li'> {
  label: string
  value: string
}

const Info = ({ label, value, className, ...props }: InfoProps) => (
  <li className={twMerge('flex flex-col', className)} {...props}>
    <span className="text-xs text-[#073f60] uppercase font-bold">{label}:</span>
    <span className="text-sm">{value}</span>
  </li>
)
