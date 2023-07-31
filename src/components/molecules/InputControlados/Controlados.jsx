import { useState } from "react";

function Controlados() {
  const [Insta, setInsta] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setInsta(!Insta)}
            className={`${
              !Insta
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Pros y contras de los inputs controlados </h3>
        </div>
        {Insta && (
          <>
            <h2>Ventajas:</h2>
            <p></p>

            <p>
              Son una de las formas más sencillas de manejar inputs en react.
            </p>

            <h2>Desventaja:</h2>

            <p>
              - Requieren de muchos renders: cada vez que escribamos o borremos
              un caracter del input, va a haber un render, lo cuál puede llegar
              a afectar el rendimiento de nuestra aplicación si abusamos de este
              tipo de inputs. Conclusión: los inputs controlados son perfectos
              para ocasiones en donde requerimos que un input sea bastante
              interactivo, por ejemplo: un buscador con autocompletado. Pero en
              general pueden ser de mucha ayuda cuando queramos un input
              individual, por su simplicidad. En cambio, para otras estructuras
              como formularios, donde no se necesita tanta reactividad como en
              un autocompletado, es mejor usar otras alternativas como react
              hook form.
            </p>
          </>
        )}
      </article>
    </section>
  );
}
export default Controlados;
