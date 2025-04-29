import { Carteirinha, StudentSlug } from "@/components/carteirinha";
import { PageProps } from "@/lib/page-props";
import QRCode from "react-qr-code";

// no-cache
export const revalidate = 0;

export default async function Others({
  params,
}: PageProps<{ slug: StudentSlug }>) {
  const { slug } = await params;
  const url = process.env.VERCEL_URL || "localhost:3000";
  const protocol = url.startsWith("localhost") ? "http" : "https";
  const validacaoURL = `${protocol}://${url}/${slug}/validacao?codigo-verificacao=${slug}-dfed9fff-8ee6-451e-830c-70s604g68254`;

  return (
    <main className="px-4">
      <h1 className="my-6 text-center text-xl font-bold text-[#073f60]">
        Carterinha de Estudante
      </h1>
      <Carteirinha studentSlug={slug} />

      <div className="text-center">
        <h2 className="mt-8 mb-4 text-xl font-bold text-[#073f60]">
          Validação
        </h2>
        <p>
          Escaneie o QRCode abaixo para validar essa carteirinha de estudante!
        </p>
        <a
          href={validacaoURL}
          target="_blank"
          className="m-auto my-4 block w-fit"
        >
          <QRCode value={validacaoURL} className="h-48 w-48" />
        </a>

        <p className="m-auto w-fit max-w-sm rounded-lg border border-gray-300 p-4 text-xs">
          <a href={validacaoURL} target="_blank">
            {validacaoURL}
          </a>
        </p>
      </div>
    </main>
  );
}
