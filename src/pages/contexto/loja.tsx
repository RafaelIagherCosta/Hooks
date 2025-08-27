import AdicionarProduto from "@/components/loja/AdicionarProduto";
import Carrinho from "@/components/loja/Carrinho";
import FinalizarCompra from "@/components/loja/FinalizarCompra";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState, createContext } from "react";

// Definição do tipo de produto
type Produto = {
  id: number;
  nome: string;
  quantidade: number;
  preco: number;
};

// Definição do tipo do contexto
type ContextoType = {
  carrinho: Produto[];
  setCarrinho: React.Dispatch<React.SetStateAction<Produto[]>>;
  total: () => number;
};

// Criando o contexto tipado
export const Contexto = createContext<ContextoType>({} as ContextoType);

export default function Loja() {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  const ctx = {
    carrinho,
    setCarrinho,
    total() {
      const r = carrinho.reduce(
        (acc, produto) => acc + produto.preco * produto.quantidade,
        0
      );
      return r;
    },
  };

  return (
    <Contexto.Provider value={ctx}>
      <Pagina
        titulo="Loja"
        subtitulo="Compartilhando informacoes entre multiplos componentes com contexto"
      >
        <Flex col gap={4}>
          <Flex gap={4}>
            <AdicionarProduto />
            <FinalizarCompra />
          </Flex>
          <Carrinho />
        </Flex>
      </Pagina>
    </Contexto.Provider>
  );
}
