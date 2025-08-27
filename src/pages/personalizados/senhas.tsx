import InputFormatado from "@/components/formulario/InputFormatado";
import Pagina from "@/components/template/Pagina";
import useStateValidado from "@/data/hooks/useStateValidado";

export default function () {
  function validaSenha(senha: any) {
    let correspondencia = senha.match(/[\d\S]{8,}/);
    return correspondencia?.[0].length === senha.length;
  }

  const [senha, setSenha, senhaEhValida] = useStateValidado(" ", validaSenha);
  let borda;
  if (senha === "") {
    borda = "border-none";
  } else if (senhaEhValida) {
    borda = "border-green-600";
  } else if (!senhaEhValida) {
    borda = "border-red-600";
  }

  return (
    <Pagina
      titulo="Validando senha"
      subtitulo="Usando um hook personalizado para validacao"
    >
      <InputFormatado
        valor={senha}
        onInput={(e) => setSenha(e.target.value)}
        label="senha"
        tipo="text"
        className={`${borda} border-4 w-10 h-8 flex`}
      />
    </Pagina>
  );
}
