import { createContext, useState, ReactNode } from "react";

type TemaContextType = {
  cores: string[];
  corDestaque: string;
  setCorDestaque: React.Dispatch<React.SetStateAction<string>>;
};

export const ContextoTema = createContext<TemaContextType>(
  {} as TemaContextType
);

type TemaProviderProps = {
  children: ReactNode;
};

export function TemaProvider({ children }: TemaProviderProps) {
  const cores = [
    "blue-500",
    "red-400",
    "pink-500",
    "orange-500",
    "green-500",
    "purple-500",
    "yellow-600",
  ];

  const [corDestaque, setCorDestaque] = useState<string>(cores[0]);

  const ctx: TemaContextType = { cores, corDestaque, setCorDestaque };

  return <ContextoTema.Provider value={ctx}>{children}</ContextoTema.Provider>;
}

export default ContextoTema;
