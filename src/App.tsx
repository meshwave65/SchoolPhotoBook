import { useState } from "react";

import Apresentacao from "./pages/Apresentacao";
import Capa from "./pages/Capa";
import Historia from "./pages/Historia";
import Paraninfo from "./pages/Paraninfo";
import Patrono from "./pages/Patrono";
import Juramento from "./pages/Juramento";
import Formandos from "./pages/Formandos";
import Homenagens from "./pages/Homenagens";
import HomenagensAdmin from "./pages/HomenagensAdmin";
import Falecidos from "./pages/Falecidos";

import Header from "./layout/Header";
import BottomNav from "./layout/BottomNav";

import type { Pagina } from "./layout/Header";

function App() {
  const [paginaAtual, setPaginaAtual] =
    useState<Pagina>("capa");

  const navegar = (pagina: Pagina) => {
    setPaginaAtual(pagina);
  };

  function renderPagina() {
    switch (paginaAtual) {
      case "capa":
        return (
          <Capa
            onAbrir={() => navegar("apresentacao")}
          />
        );

      case "apresentacao":
        return <Apresentacao />;

      case "historia":
        return <Historia />;

      case "paraninfo":
        return <Paraninfo />;

      case "patrono":
        return <Patrono />;

      case "juramento":
        return <Juramento />;

      case "formandos":
        return <Formandos />;

      case "homenagens":
        return <Homenagens />;

      case "homenagens_admin":
        return <HomenagensAdmin />;

      case "falecidos":
        return <Falecidos />;

      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-[#0a1f0a] text-[#e8d5b8] font-serif">

      {paginaAtual !== "capa" && (
        <Header />
      )}

      <main className="pt-56 pb-28">
        {renderPagina()}
      </main>

      {paginaAtual !== "capa" && (
        <BottomNav navegar={navegar} />
      )}

    </div>
  );
}

export default App;
