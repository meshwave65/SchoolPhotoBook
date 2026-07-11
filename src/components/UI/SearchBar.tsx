interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}


export default function SearchBar({
  value,
  onChange
}: SearchBarProps) {


  return (

    <div
      className="
        w-full
        mb-8
      "
    >

      <input

        type="text"

        value={value}

        onChange={(e) =>
          onChange(e.target.value)
        }

        placeholder="Buscar por nome..."

        className="
          w-full
          bg-white/10
          border
          border-[#c5a46e]/30
          rounded-full
          px-6
          py-4
          text-xl
          text-center
          placeholder:text-[#c5a46e]/50
          focus:outline-none
          focus:border-[#c5a46e]
        "

      />

    </div>

  );

}
