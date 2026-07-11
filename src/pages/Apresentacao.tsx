import { assets } from "../assets/index.ts";


export default function Apresentacao() {

  return (

    <div
      className="
        p-0
        max-w-5xl
        mx-auto
        pb-0
      "
    >

      <div className="h-12" />


      <img
        src={assets.logoFNM}
        alt="Faculdade Nacional de Medicina"
        className="
          w-1/4
          mx-auto
          mb-0
        "
      />


      <h2
        className="
          text-5xl
          font-bold
          text-center
          mb-12
        "
      >
        APRESENTAÇÃO
      </h2>


      <div
        className="
          text-xl
          leading-relaxed
          space-y-8
        "
      >

        <p>
          Este aplicativo foi desenvolvido com o propósito de facilitar o acesso
          ao nosso livro de formatura e preservar, de uma forma moderna e
          dinâmica, as histórias, lembranças e conexões construídas ao longo da
          nossa trajetória na Faculdade Nacional de Medicina.
        </p>


        <p>
          Mais do que um simples registro de nomes e fotografias, esta
          plataforma representa uma forma de manter viva a memória de uma
          geração de colegas e amigos que compartilharam momentos únicos,
          desafios, conquistas e experiências que marcaram nossas vidas.
        </p>


        <p>
          Esta é uma primeira versão de uma iniciativa que poderá evoluir
          continuamente, incorporando novas informações, funcionalidades e
          recursos que tornem este espaço cada vez mais completo, útil e
          significativo para todos nós.
        </p>


        <p>
          Estamos abertos às sugestões e contribuições dos colegas para
          aprimorar esta ferramenta e fortalecer ainda mais o propósito de
          manter nossa turma unida, preservando esta verdadeira relíquia
          histórica: o registro de mais de 300 amigos e amigas que fizeram
          parte desta caminhada.
        </p>


        <p>
          Neste momento especial, dedicamos também uma homenagem carinhosa e
          respeitosa aos nossos colegas e amigos que já partiram. Que seus
          nomes, suas histórias e suas trajetórias permaneçam sempre presentes
          na memória de todos nós.
        </p>


        <p
          className="
            text-center
            italic
            mt-12
          "
        >
          Que este espaço seja um ponto de encontro, lembrança e celebração da
          amizade construída ao longo dos anos.
        </p>


        <div
          className="
            text-center
            italic
            mt-12
          "
        >

          <p>
            Dr. Luiz Sérgio Gomes de Oliveira
          </p>

          <p>
            Formando de 1975 da FNM da UFRJ
          </p>

        </div>


      </div>


    </div>

  );

}
