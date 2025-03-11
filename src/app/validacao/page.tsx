import { Carteirinha } from '../components/carteirinha'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

export const fetchCache = 'force-no-store'

interface PageProps {
  searchParams?: {
    'codigo-verificacao'?: string
  }
}

export default function Validacao({ searchParams }: PageProps) {
  const codigoVerificacao = searchParams?.['codigo-verificacao']
  const isValid = codigoVerificacao === process.env.CODIGO_VERIFICACAO

  return (
    <main className="px-4">
      <h1 className="text-[#073f60] text-center text-2xl font-bold my-6">
        Carterinha de Estudante
      </h1>

      {isValid ? (
        <Carteirinha cloaked />
      ) : (
        <p className="text-center">Carteirinha de estudante não encontrada!</p>
      )}

      <div className="text-center">
        <h2 className="text-[#073f60] text-xl font-bold mt-8 mb-4">
          Validação
        </h2>
        {isValid ? (
          <>
            <FaCheckCircle size="70" className="m-auto fill-green-600" />
            <p className="mt-2 mb-4">
              <strong>Essa Carteirinha de Estudante é válida!</strong>
            </p>
          </>
        ) : (
          <>
            <FaTimesCircle size="70" className="m-auto fill-red-600" />
            <p className="mt-2 mb-4">
              <strong>Essa Carteirinha de Estudante é inválida!</strong>
            </p>
          </>
        )}
        <p className="border w-fit m-auto p-4 rounded-lg border-gray-300">
          Código de Verificação:{' '}
          <span className="italic">{codigoVerificacao}</span>
        </p>
      </div>
    </main>
  )
}
