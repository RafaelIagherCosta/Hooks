import { createContext, ReactNode, useEffect, useState } from "react";
import secoesMenu from "../constants/secoesMenu";
import useBoolean from "../hooks/useBoolean";
import useTamanhoJanela from "../hooks/useTamanhoJanela";
import { useRouter } from "next/router";

const ContextoMenu = createContext({} as any);

interface MenuProviderProps {
  children: ReactNode;
}

export function MenuProvider({ children }: MenuProviderProps) {
  const [mini, toggleMini, miniTrue] = useBoolean(false);
  const [secoes, setSecoes] = useState<any>(secoesMenu);
  const tamanho = useTamanhoJanela();
  const router = useRouter();

  useEffect(() => {
    if (tamanho === "md" || tamanho === "sm") {
      miniTrue();
    }
  }, [tamanho]);

  useEffect(() => {
    setSecoes(() => selecionarItem(router.asPath));
  }, [router.asPath]);

  function alternarSecao(secaoSelecionada: MenuSecao) {
    let novasSecoes = secoes.map((secao) => {
      if (secao.titulo === secaoSelecionada.titulo) {
        return { ...secao, aberta: !secao.aberta };
      } else {
        return secao;
      }
    });
    setSecoes(() => novasSecoes);
  }

  function selecionarItem(url: string) {
    return secoes.map((secao: any) => {
      const novosItens = secao.itens.map((item: any) => ({
        ...item,
        selecionado: item.url === url,
      }));

      return { ...secao, itens: novosItens };
    });
  }

  const ctx = { secoes, mini, toggleMini, alternarSecao };
  return <ContextoMenu.Provider value={ctx}>{children}</ContextoMenu.Provider>;
}

export default ContextoMenu;
