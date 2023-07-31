import { useState } from "react";

function OperadorAnd() {
  const [Operador, setOperador] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setOperador(!Operador)}
            className={`${
              !Operador
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>IRenderizado condicional en JSX con operador && </h3>
        </div>
        {Operador && (
          <>
            <p>
              Consiste en ejecutar una condición usando el operador AND (&&). No
              te preocupes si no conoces a la perfección este operador, puedes
              hacer renderizado condicional sin entenderlo a profundidad. Aunque
              si quieres aprenderlo a usar al 100% consulta [esta
              página](https://es.javascript.info/logical-operators). Con este
              operador, colocaremos una condición, seguido de (&&) y luego el
              código JSX. Si la condición es verdadera, se renderizará el código
              JSX. Si es falsa, no se renderizará nada.:
            </p>

            <img src="/img/and.png" />

            <p>
              Se usa cuando no queremos que se muestre nada cuando la condición
              no se cumple, es decir, cuando queremos un comportamiento “if” y
              no uno “if - else” Al igual que con el operador ternario, podemos
              colocar código en varias líneas. De ser el caso, es recomendable
              escribirlo entré paréntesis.
            </p>

            <img src="/img/and2.png" />
          </>
        )}
      </article>
    </section>
  );
}
export default OperadorAnd;
