import { Carteirinha } from "@/components/carteirinha";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { PageProps } from "@/lib/page-props";

// no-cache
export const revalidate = 0;

export default async function Validacao({ searchParams }: PageProps<unknown>) {
  const { "codigo-verificacao": codigoVerificacao } = searchParams || {};
  const isValid = codigoVerificacao === process.env.CODIGO_VERIFICACAO;

  return (
    <main className="px-4">
      <h1 className="my-6 text-center text-2xl font-bold text-[#073f60]">
        Carterinha de Estudante
      </h1>

      {isValid ? (
        <Carteirinha cloaked />
      ) : (
        <p className="text-center">Carteirinha de estudante não encontrada!</p>
      )}

      <div className="text-center">
        <h2 className="mt-8 mb-4 text-xl font-bold text-[#073f60]">
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
        <p className="m-auto w-fit rounded-lg border border-gray-300 p-4">
          Código de Verificação:{" "}
          <span className="italic">{codigoVerificacao}</span>
        </p>
      </div>
    </main>
  );
}
