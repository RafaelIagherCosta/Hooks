import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import useTamanhoJanela from "@/data/hooks/useTamanhoJanela";

export default function () {
  const tamanho = useTamanhoJanela();
  return (
    <Pagina
      titulo="Qual eh o tamanho da pagina?"
      subtitulo="Usando um hook personalizado para descobrir o tamanho da pagina"
    >
      <Display texto={tamanho} />
      <div
        className="w-40 h-40
       sm:bg-blue-400 
  md:bg-pink-400 
  lg:bg-green-400 
  xl:bg-purple-400 

       "
      ></div>
    </Pagina>
  );
}
