import { useState } from "react";

function EvenListener() {
  const [Eventito, setEventito] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setEventito(!Eventito)}
            className={`${
              !Eventito
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Saneamiento o clean up (trabajando con eventListeners) </h3>
        </div>
        {Eventito && (
          <>
            <p>
              Para trabajar con eventListeners, igual que con una API, hay que
              inicializarlos en un useEffect para que no se genere un nuevo
              eventListener cada vez que haya un render en el componente.
            </p>

            <img src="/img/eve.png" />

            <p>
              El problema es que si por alguna razón el componente donde está
              ese useEffect se llega a eliminar, la aplicación nos pondrá este
              warning
            </p>

            <img src="/img/eve2.png" />

            <p>
              Esto se debe a que, aunque nuestro componente no exista, el
              eventListener quedó vigente en la aplicación. Y si por alguna
              razón se vuelve a ejecutar el componente, se va a crear otro
              eventListener, quedando uno que es completamente innecesario. Y si
              hacemos este proceso más veces, se nos van a crear muchos
              eventListeners, afectando el rendimiento de nuestra aplicación.
              Para estos casos se necesita algo que elimine ese eventListener
              cuando nuestro componente es eliminado. Y para esos casos es el
              cleanup, el cleanup es una función que será retornada por el
              useEffect, la cual se va a ejecutar cuando el componente se
              desmonte.
            </p>

            <img src="/img/eve3.png" />

            <p>
              Por ejemplo, para el eventListener de resize del ejemplo de
              arriba, podemos hacerle cleanup al componente de esta forma:
            </p>

            <img src="/img/eve4.png" />

            <p>
              Sin embargo, esa función para hacer limpieza no sólo se ejecuta
              cuándo el componente es eliminado, también se ejecuta después de
              cada vez que el componente se renderiza. Evitando renders
              innecesarios.
            </p>
          </>
        )}
      </article>
    </section>
  );
}
export default EvenListener;
