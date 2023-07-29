import QRCode from 'react-qr-code'
import { Carteirinha } from './components/carteirinha'

export default function Home() {
  const url = process.env.VERCEL_URL
  const validacaoURL = `${url}/validacao?codigo-verificacao=${process.env.CODIGO_VERIFICACAO}`

  return (
    <main className="px-4">
      <h1 className="text-[#073f60] text-center text-xl font-bold my-6">
        Carterinha de Estudante
      </h1>
      <Carteirinha />

      <div className="text-center">
        <h2 className="text-[#073f60] text-xl font-bold mt-8 mb-4">
          Validação
        </h2>
        <p className="mb-4">
          Escaneie o QRCode abaixo para validar essa carteirinha de estudante!
        </p>
        <a href={validacaoURL} target="_blank" className="block m-auto w-fit">
          <QRCode value={validacaoURL} className="h-48 w-48" />
        </a>
      </div>
    </main>
  )
}
