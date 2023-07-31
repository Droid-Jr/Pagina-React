import { useState } from "react";

function RutaRoute() {
  const [Ros, setRos] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setRos(!Ros)}
            className={`${
              !Ros
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Route </h3>
        </div>
        {Ros && (
          <>
            <p>
              Son los componentes que tendrán cada ruta en particular. Cuentan
              con dos atributos: path y element.{" "}
            </p>

            <p>
              <span className="font-extrabold">element: </span> Aquí vamos a
              renderizar código JSX será el que se mostrará en cada ruta.
              Generalmente se colocan componentes
            </p>
            <p>
              <span className="font-extrabold">path: </span> - Será donde
              pondremos el nombre de cada ruta. Por ejemplo, si ponemos un
              componente que diga: “/home”, cada vez que estemos en la ruta:
              “http://localhost:3000/#/home”, nos mostrará lo que esté en el
              atributo element. Si se deja un path sólamente con “/”, quiere
              decir que lo que esté en element será lo que se muestre en la ruta
              raíz: “http://localhost:3000/#/”. Y si colocamos alguna ruta que
              no existe, por defecto se mostraría esta. Si queremos que cuando
              no se encuentre la ruta, se muestre un componente en específico,
              se puede colocar path=”*”, que será un componente que se renderice
              cuando la ruta no coincida con ninguna de las anteriores.
            </p>
          </>
        )}
      </article>
    </section>
  );
}
export default RutaRoute;
