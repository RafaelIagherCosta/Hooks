import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function Votacao() {
  const [dados, setDados] = useState({ votosRoxo: 0, votosVerde: 0 });

  function votacaoRoxo() {
    setDados((dados) => {
      return {
        votosRoxo: dados.votosRoxo + 1,
        votosVerde: dados.votosVerde,
      };
    });
  }

  function votacaoVerde() {
    setDados((dados) => {
      return {
        votosVerde: dados.votosVerde + 1,
        votosRoxo: dados.votosRoxo,
      };
    });
  }

  function zerarVotacao() {
    setDados(() => {
      return {
        votosVerde: 0,
        votosRoxo: 0,
      };
    });
  }

  return (
    <Pagina titulo="Votacao" subtitulo="usando estado com objeto">
      <Flex col center>
        <Display
          texto="Qual a melhor cor?"
          textoComplementar={`Verde: ${dados.votosVerde} | Roxo: ${dados.votosRoxo}`}
        />
        <Flex gap={5}>
          <Botao
            cor="bg-green-600"
            onClick={votacaoVerde}
            redondo
            tamanho="2xl"
          ></Botao>
          <Botao
            cor="bg-purple-600"
            onClick={votacaoRoxo}
            redondo
            tamanho="2xl"
          ></Botao>
        </Flex>
        <Botao
          texto="Zerar"
          cor="bg-red-900"
          tamanho="lg"
          onClick={zerarVotacao}
        ></Botao>
      </Flex>
    </Pagina>
  );
}
