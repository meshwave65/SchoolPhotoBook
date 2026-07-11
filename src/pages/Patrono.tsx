import { assets } from "../assets";

export default function Patrono() {

  return (

    <div className="p-12 max-w-4xl mx-auto pb-32">

      <img
        src={assets.Patrono}
        alt="Patrono"
        className="
                w-full
                max-w-3xl
                mx-auto
                rounded-3xl
                mb-12
                shadow-2xl
            "
        />

      <h2 className="text-3xl font-bold mb-8 text-center">
        PATRONO
      </h2>


      <div className="text-lg leading-relaxed text-center">

        <p>
          Prof. CESAR B. PERNETTA
        </p>

      </div>


    </div>

  );
}
