import { useState } from "react";

import { useMembros } from "../hooks/useMembros";

import SearchBar from "../components/UI/SearchBar";
import MembroCard from "../components/MembroCard";


interface MembersViewProps {
  tipo?: "formando" | "paraninfo" | "patrono" | "homenagem_especial" | "homenagem_administrativa";
  titulo: string;
  somenteFalecidos?: boolean;
}


export default function MembersView({

  tipo,
  titulo,
  somenteFalecidos = false,

}: MembersViewProps) {


  const [busca, setBusca] = useState("");



  const {
    membros,
    carregando,
    erro,

  } = useMembros(
    tipo,
    somenteFalecidos
  );



  const lista = membros.filter((membro) =>

    membro.nome
      .toLowerCase()
      .includes(
        busca.toLowerCase()
      )

  );



  return (

    <div
      className="
        pb-20
        p-6
        max-w-5xl
        mx-auto
      "
    >


      <h2
        className="
          text-4xl
          font-bold
          text-center
          mb-8
        "
      >

        {titulo}

      </h2>



      <SearchBar

        value={busca}

        onChange={setBusca}

      />



      {
        erro && (

          <p>
            {erro}
          </p>

        )
      }



      {
        carregando ? (

          <p
            className="
              text-center
              mt-8
            "
          >

            Carregando...

          </p>


        ) : (


          <div
            className="
              grid
              grid-cols-1
              gap-8
              mt-8
            "
          >

            {
              lista.map((membro) => (

                <MembroCard

                  key={membro.id}

                  membro={membro}

                />

              ))
            }


          </div>


        )
      }


    </div>

  );

}
