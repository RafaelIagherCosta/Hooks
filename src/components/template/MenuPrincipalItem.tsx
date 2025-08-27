import useTema from "@/data/hooks/useTema";
import { IconCode } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

interface MenuItemProps {
  icone?: any;
  titulo: string;
  tag?: string;
  url: string;
  mini?: boolean;
}

export default function MenuItem(props: MenuItemProps) {
  const { corDestaque } = useTema(); // Ex.: "blue", "green", "red"
  const { icone, titulo, tag, url, mini } = props;

  const router = useRouter();
  const ativo = url === router.asPath;

  const corTexto =
    {
      blue: "text-blue-500",
      green: "text-green-500",
      red: "text-red-500",
    }[corDestaque] ?? "text-blue-500";

  const corTag =
    {
      blue: "bg-blue-500",
      green: "bg-green-500",
      red: "bg-red-500",
    }[corDestaque] ?? "bg-blue-500";

  return (
    <Link
      id={titulo}
      href={url}
      className={clsx(
        "flex items-center gap-2 text-zinc-400 rounded-md hover:bg-zinc-800 px-3 py-2",
        ativo && [corTexto, "bg-zinc-900"]
      )}
    >
      {icone ?? <IconCode />}
      {!mini && titulo}
      {!mini && tag && (
        <span
          className={clsx(
            "text-white text-[11px] rounded-full px-2",
            ativo ? corTag : "bg-zinc-700"
          )}
        >
          {tag}
        </span>
      )}
    </Link>
  );
}
