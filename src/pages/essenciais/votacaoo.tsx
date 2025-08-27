import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function Votacaooo() {
  const [green, setGreen] = useState(0);

  const [purple, setPurple] = useState(0);
  return (
    <Pagina titulo="Votacao" subtitulo="Entendendo o que eh um estado pt.2">
      <Display texto="Qual a melhor cor?" />
      <Flex gap={5}>
        <Display texto={`Roxo:${purple}`} />
        <Display texto={`Verde:${green}`} />
      </Flex>
      <Flex gap={5}>
        <Botao
          redondo
          tamanho="2xl"
          cor="bg-purple-600"
          onClick={() => setPurple(purple + 1)}
        />
        <Botao
          redondo
          tamanho="2xl"
          cor="bg-green-600"
          onClick={() => setGreen(green + 1)}
        />
      </Flex>
    </Pagina>
  );
}
