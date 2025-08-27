import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function () {
  const [url, setUrl] = useState();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((Obj) => setUrl(Obj.message));
  }, []);

  return (
    <Pagina titulo="Requisicao a API" subtitulo="Requerindo dados">
      <img src={url} className="max-w-sm" />
    </Pagina>
  );
}
