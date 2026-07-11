interface MenuProps {
  navegar: (pagina: string) => void;
}


export default function Menu({
  navegar,
}: MenuProps) {

  return (
    <div className="page">

      <h1>
        ÍNDICE
      </h1>


      <button
        onClick={() => navegar("apresentacao")}
      >
        Apresentação
      </button>


      <button
        onClick={() => navegar("historia")}
      >
        História
      </button>


      <button
        onClick={() => navegar("formandos")}
      >
        Formandos
      </button>


    </div>
  );
}
