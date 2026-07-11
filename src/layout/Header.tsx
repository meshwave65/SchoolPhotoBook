export default function Header() {
  return (
    <header
      className="
        w-full
        bg-[#0a1f0a]
        border-b-2
        border-[#c5a46e]
        py-6
        px-4
        text-center
      "
    >
      <h1
        className="
          text-3xl
          md:text-5xl
          font-bold
          tracking-wider
          text-[#e8d5b8]
          leading-tight
        "
      >
        FACULDADE NACIONAL DE MEDICINA
      </h1>

      <h2
        className="
          mt-2
          text-lg
          md:text-2xl
          tracking-[0.25em]
          text-[#c5a46e]
          font-medium
        "
      >
        UNIVERSIDADE FEDERAL DO RIO DE JANEIRO
      </h2>

      <p
        className="
          mt-3
          text-base
          md:text-lg
          tracking-[0.35em]
          uppercase
          text-[#d9c39a]
        "
      >
        Turma de Formandos de 1975
      </p>
    </header>
  );
}
