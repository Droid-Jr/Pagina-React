import { useState } from "react";

function TiposCompo() {
  const [Cuando2, setCuando2] = useState(false);

  return (
    <section className="w-[90%] m-auto">
        
        <div className="flex items-center gap-5">
      <i
        onClick={() => setCuando2(!Cuando2)}
        className={`${
            !Cuando2
            ? "fa-solid fa-circle-chevron-right fa-bounce"
            : "fa-solid fa-circle-chevron-right fa-rotate-90"
        }`}
        ></i>
      <p>
        Los componentes en react pueden ser componentes funcionales o
        componentes de clase :
      </p>
        </div>

      {Cuando2 && (
        <>
          <article>
            <ul>
              <h3>Componentes de clase</h3>

              <li>
                Son componentes basados en la estructura de class de JavaScript,
                y funciona heredando de la clase React. El jsx se escribe en el
                método render. Antiguamente eran el estándar, ya que era el
                único tipo de componente que permitía manejo de estado hasta que
                se inventaron los Hooks.
              </li>
              <img src="/img/tipos.png" />

              <li>Componentes funcionales</li>
              <p>
                Son componentes basados en funciones. Pueden ser declarados como
                funciones flechas o con la palabra reservada "function". El jsx
                se escribe retornándose en la función. Son los que usaremos en
                el resto del curso.
              </p>
              <p>
                Los componentes funcionales tienen tres características que lo
                destacan :{" "}
              </p>

              <ol>
                <li>1. Es una función</li>
                <li>2. Su nombre empieza con mayúsculas</li>
                <li>3. retorna jsx</li>
              </ol>
              <img src="/img/tipos2.png" />
            </ul>
          </article>
        </>
      )}
    </section>
  );
}
export default TiposCompo;
