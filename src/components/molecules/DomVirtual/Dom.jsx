import { useState } from "react";

function Dom() {
  const [Dom, setDom] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setDom(!Dom)}
            className={`${
              !Dom
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Dom </h3>
        </div>
        {Dom && (
          <>
            <p>
              El DOM es el que se encarga de generar una estructura de tipo
              arbol con nodos, que permitirá al navegador entender nuestro
              código HTML. Básicamente convierte nuestro código HTML en esto:
            </p>
            <img src="/img/dom.png" />
            <p>
              JavaScript tiene diferentes formas de manejar el DOM, por ejemplo,
              a través de los métodos getElementById, getElementByTag... podemos
              seleccionar dichos elementos, y luego, con propiedades como
              appendChild, o innerHTML, podemos actualizar su contenido. Sin
              embargo, actualizar el DOM es una tarea costosa, ya que, si cambia
              un elemento, se tiene que actualizar todos los hijos de ese
              elemento, sin importar si han cambiado o no
            </p>
          </>
        )}
      </article>
    </section>
  );
}
export default Dom;
