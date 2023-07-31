import { useState } from "react";

function OperadorConponente() {
  const [OperadorConpo, setOperadorConpo] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setOperadorConpo(!OperadorConpo)}
            className={`${
              !OperadorConpo
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Renderizado condicional a través de otro componente </h3>
        </div>
        {OperadorConpo && (
          <>
            <p>
              Similar al de la función, también podemos hacer un renderizado
              condicional usando un componente diseñado para la tarea. Estos
              componentes tendrán más de un return. Retomaremos el ejemplo de
              arriba, donde haciamos condiciones anidadas con operador ternario.
              En donde validábamos si el usuario estaba loggeado y luego
              validábamos su rol, con un componente quedaría así:
            </p>

            <img src="/img/compooper.png" />
          </>
        )}
      </article>
    </section>
  );
}
export default OperadorConponente;
