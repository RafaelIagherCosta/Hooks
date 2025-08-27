import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import { useRef, useState } from "react";

export default function () {
  const quantidadeCaracteres = 400;
  const [caracteresRestantes, setCaracteresRestantes] =
    useState(quantidadeCaracteres);

  const refTexto = useRef<any>();
  const refContador = useRef<any>();

  function iniciaContador() {
    clearTimeout(refContador.current);
    refContador.current = setTimeout(() => {
      let quantidadeCaracteresDigitados = refTexto.current.value.length;
      setCaracteresRestantes(
        quantidadeCaracteres - quantidadeCaracteresDigitados
      );
    }, 1000);
  }

  return (
    <Pagina
      titulo="Contagem de caracteres"
      subtitulo="Usando uma referencia para controlar o tempo"
    >
      <Display
        texto="Digite o texto"
        textoComplementar={`${caracteresRestantes} caracteres restantes`}
      />
      <textarea
        ref={refTexto}
        onInput={iniciaContador}
        className={`border border-zinc-700 bg-zinc-700
          text-white text-2xl w-3/5 h-72 rounded p-5`}
      ></textarea>
    </Pagina>
  );
}
