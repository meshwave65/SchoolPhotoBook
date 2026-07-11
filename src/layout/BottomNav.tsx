interface BottomProps {
  navegar: (pagina: string) => void;
}

export default function BottomNav({
  navegar,
}: BottomProps) {
  return (
    <footer
      className="
        fixed
        bottom-0
        left-0
        right-0
        bg-[#0a1f0a]
        border-t-2
        border-[#c5a46e]
        px-4
        py-3
        flex
        items-center
        justify-center
        gap-4
        z-50
      "
    >
      <input
        type="text"
        placeholder="Buscar..."
        className="
          flex-1
          max-w-md
          rounded
          border
          border-[#c5a46e]
          bg-white
          px-3
          py-2
          text-black
          placeholder:text-gray-500
          outline-none
        "
      />

      <button
        className="
          rounded
          border
          border-[#c5a46e]
          px-4
          py-2
          text-[#c5a46e]
          hover:bg-[#c5a46e]
          hover:text-[#0a1f0a]
          transition
        "
      >
        Limpar
      </button>

      <select
        defaultValue=""
        onChange={(e) => navegar(e.target.value)}
        className="
          rounded
          border
          border-[#c5a46e]
          bg-white
          px-3
          py-2
          text-black
          outline-none
          cursor-pointer
        "
      >
        <option value="">Índice</option>
        <option value="apresentacao">Apresentação</option>
        <option value="historia">História</option>
        <option value="juramento">Juramento</option>
        <option value="paraninfo">Paraninfo</option>
        <option value="patrono">Patrono</option>
        <option value="homenagens">Homenagens Especiais</option>
        <option value="homenagens_admin">Homenagens Administrativas</option>
        <option value="formandos">Formandos</option>
        <option value="falecidos">Falecidos</option>
      </select>
    </footer>
  );
}
