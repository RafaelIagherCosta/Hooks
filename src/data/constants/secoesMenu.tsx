import {
  IconAppWindow,
  IconArrowLeftRight,
  IconDimensions,
  IconLetterCase,
  IconLock,
  IconMathGreater,
  IconNumbers,
  IconRefreshAlert,
  IconSection,
  IconShoppingCart,
  IconUsers,
} from "@tabler/icons-react";

const secoes = [
  {
    titulo: "Essenciais",
    aberta: false,
    itens: [
      {
        titulo: "Contador",
        url: "/essenciais/contador",
        tag: "useState",
        icone: <IconNumbers />,
      },
      {
        titulo: "Votacao",
        url: "/essenciais/votacao",
        tag: "useState",
        icone: <IconUsers />,
      },
      {
        titulo: "Consulta a API",
        url: "/essenciais/consultaAPI",
        tag: "useEffect",
        icone: <IconArrowLeftRight />,
      },
      {
        titulo: "Maior",
        url: "/essenciais/maior",
        tag: "useEffect",
        icone: <IconMathGreater />,
      },
      {
        titulo: "Contagem Caracteres",
        url: "/essenciais/contagemCaracteresEffect",
        tag: "useEffect",
        icone: <IconLetterCase />,
      },
      {
        titulo: "State VS Referencia",
        url: "/essenciais/stateVsRef",
        tag: "useRef",
        icone: <IconRefreshAlert />,
      },
      {
        titulo: "Referenciando Elemento",
        url: "/essenciais/refElemento",
        tag: "useRef",
        icone: <IconSection />,
      },
      {
        titulo: "Contagem Caracteres",
        url: "/essenciais/contagemCaracteresRef",
        tag: "useRef",
        icone: <IconLetterCase />,
      },
    ],
  },
  {
    titulo: "Personalizados",
    aberta: true,
    itens: [
      {
        titulo: "Modal",
        url: "/personalizados/modal",
        tag: "personalizados",
        icone: <IconAppWindow />,
      },
      {
        titulo: "Tamanho janela",
        url: "/personalizados/tamanhoJanela",
        tag: "personalizados",
        icone: <IconDimensions />,
      },
      {
        titulo: "Validando senha ",
        url: "/personalizados/senhas",
        tag: "personalizados",
        icone: <IconLock />,
      },
    ],
  },
  {
    titulo: "Contexto",
    aberta: true,
    itens: [
      {
        titulo: "Loja",
        url: "/contexto/loja",
        tag: "useContext",
        icone: <IconShoppingCart />,
      },
    ],
  },
];

export default secoes;
