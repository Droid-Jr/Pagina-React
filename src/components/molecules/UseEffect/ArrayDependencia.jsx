import { useState } from "react";

function ArrayDependencia() {
  const [Depen, setDepen] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setDepen(!Depen)}
            className={`${
              !Depen
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Array de dependencias </h3>
        </div>
        {Depen && (
          <>
            <p>
              Es el segundo parámetro. Allí le indicaremos a useEffect qué es lo
              que debe cambiar para que se ejecute el callback. Es importante
              acotar que sí o sí se va a ejecutar el useEffect, al menos una
              vez. Su primera ejecución es al finalizar el primer renderizado.
              Si se coloca un array de dependencias vacío, esta será la única
              vez donde se ejecutará.
            </p>

            <img src="/img/depe.png" />

            <p>
              Si se coloca valores al array, el useEffect se ejecutará luego del
              primer renderizado, y luego cada vez que dichos valores cambien.
              Por esta razón es que generalmente se colocan estado y props, ya
              que son los que pueden cambiar durante la ejecución de la
              aplicación.
            </p>

            <img src="/img/depe2.png" />

            <p>
              Finalmente, si no se coloca nada, el useEffect se ejecutará cada
              vez que el componente se renderice. Advertencia: colocar useEffect
              sin arreglo de dependencias no es algo común, suele producir un
              ciclo infinito si dentro se hace una modificación al estado.
            </p>

            <img src="/img/depe3.png" />
          </>
        )}
      </article>
    </section>
  );
}
export default ArrayDependencia;
