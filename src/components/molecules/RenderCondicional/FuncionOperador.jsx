import { useState } from "react";

function FuncionOperador() {
  const [FuntionOper, setFuntionOper] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setFuntionOper(!FuntionOper)}
            className={`${
              !FuntionOper
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Renderizado condicional a través de una función </h3>
        </div>
        {FuntionOper && (
          <>
            <p>
              Cuando nuestra lógica se vuelve muy compleja, los condicionales
              ternarios de JSX se vuelven difíciles de leer. En esos casos es
              mejor extraer esa lógica en una función que retorne JSX, y
              ejecutar esa función en la parte visual del componente. Haciendo
              renderizado de esta forma podemos permitirnos usar otras
              estructuras de control que no permite JSX, como los switch - case.
              Retomaremos el ejemplo de arriba, donde haciamos condiciones
              anidadas con operador ternario. En donde validábamos si el usuario
              estaba loggeado y luego validábamos su rol. Con una función
              quedaría así:
            </p>

            <img src="/img/operfun.png" />

            <p>
              Como podemos ver, queda más legible que cuando anidamos
              condicionales ternarios como en el ejemplo anterior.
            </p>
          </>
        )}
      </article>
    </section>
  );
}
export default FuncionOperador;
