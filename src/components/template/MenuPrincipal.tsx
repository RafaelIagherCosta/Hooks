import { MenuItem } from "../../data/models/MenuItem";
import { MenuSecao } from "../../data/models/MenuSecao";
import Logo from "./Logo";
import MenuPrincipalItem from "./MenuPrincipalItem";
import MenuPrincipalSecao from "./MenuPrincipalSecao";
import Flex from "./Flex";
import { IconMenu, IconX } from "@tabler/icons-react";
import useTamanhoJanela from "@/data/hooks/useTamanhoJanela";
import { useEffect } from "react";
import useBoolean from "@/data/hooks/useBoolean";
import useMenu from "@/data/hooks/useMenu";

export default function MenuPrincipal() {
  const { secoes, mini, toggleMini } = useMenu();

  function renderizarSecoes() {
    return secoes.map((secao: MenuSecao) => (
      <MenuPrincipalSecao
        key={secao.titulo}
        titulo={secao.titulo}
        mini={mini}
        aberta={secao.aberta}
      >
        {renderizarItens(secao)}
      </MenuPrincipalSecao>
    ));
  }

  function renderizarItens(secao: MenuSecao) {
    return secao.itens.map((item: MenuItem) => (
      <MenuPrincipalItem
        key={`${item.titulo}-${item.tag}`}
        icone={item.icone}
        titulo={item.titulo}
        tag={item.tag}
        url={item.url}
        mini={mini}
      />
    ));
  }

  return (
    <aside
      className={`
            flex flex-col overflow-y-scroll overflow-x-hidden
            bg-black shadow-md shadow-zinc-800
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
            scrollbar-thin
            ${mini ? "items-center w-[130px]" : "w-[370px]"}
        `}
    >
      <Flex center className="m-7">
        {!mini && <Logo />}
        <div className="cursor-pointer" onClick={toggleMini}>
          {mini ? <IconMenu /> : <IconX />}
        </div>
      </Flex>
      <nav className="flex flex-col gap-4 m-7">{renderizarSecoes()}</nav>
    </aside>
  );
}
