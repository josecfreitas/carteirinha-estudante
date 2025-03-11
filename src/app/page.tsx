import QRCode from 'react-qr-code'
import { Carteirinha } from './components/carteirinha'

export const fetchCache = 'force-no-store'

export default function Home() {
  const url = process.env.VERCEL_URL || 'localhost:3000'
  const protocol = url.startsWith('localhost') ? 'http' : 'https'
  const validacaoURL = `${protocol}://${url}/validacao?codigo-verificacao=${process.env.CODIGO_VERIFICACAO}`

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
        <p>
          Escaneie o QRCode abaixo para validar essa carteirinha de estudante!
        </p>
        <a
          href={validacaoURL}
          target="_blank"
          className="block m-auto w-fit my-4"
        >
          <QRCode value={validacaoURL} className="h-48 w-48" />
        </a>

        <p className="border w-fit m-auto p-4 rounded-lg border-gray-300 text-xs max-w-sm">
          <a href={validacaoURL} target="_blank">
            {validacaoURL}
          </a>
        </p>
      </div>
    </main>
  )
}
