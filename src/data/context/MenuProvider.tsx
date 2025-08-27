import { createContext, ReactNode, useEffect } from "react";
import secoes from "../constants/secoesMenu";
import useBoolean from "../hooks/useBoolean";
import useTamanhoJanela from "../hooks/useTamanhoJanela";
import { useRouter } from "next/router";

const ContextoMenu = createContext({} as any);

interface MenuProviderProps {
  children: ReactNode;
}

export function MenuProvider({ children }: MenuProviderProps) {
  const [mini, toggleMini, miniTrue] = useBoolean(false);
  let tamanho = useTamanhoJanela();

  useEffect(() => {
    if (tamanho === "md" || tamanho === "sm") {
      miniTrue();
    }
  }, [tamanho]);

  return (
    <ContextoMenu.Provider value={{ secoes, mini, toggleMini }}>
      {children}
    </ContextoMenu.Provider>
  );
}

export default ContextoMenu;
