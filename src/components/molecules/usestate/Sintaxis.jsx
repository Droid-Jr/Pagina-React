import { useState } from "react";

function Sintaxis() {
    const [Sintaxis, setSintaxis] = useState(false);

  return (


    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setCuando(!Sintaxis)}
            className={`${
              !Sintaxis
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Sintaxis básica</h3>
        </div>
        {Sintaxis && (
          <>
            <p>
            Lo primero que hay que hacer es importarlo de React.
            </p>
            <img src="/img/sintaxis.png" />
            <p>
            Ahora, dentro de un componente, vamos a mandar a llamar useState como si fuera una función. Va a retornar dos valores en un array, por lo que normalmente se desestructura de esta forma:
            </p>

            <img src="/img/sintaxis2.png" />
          </>
        )}
      </article>
    </section>



  )
}
export default Sintaxis