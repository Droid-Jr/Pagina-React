import { useState } from "react";

function ImportanciaKey() {
  const [Importamte, setImportamte] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setImportamte(!Importamte)}
            className={`${
              !Importamte
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Importancia de las keys </h3>
        </div>
        {Importamte && (
          <>
            <p>
              Muchas personas no colocan las keys en sus aplicaciones de react,
              por lo que cuando programan les aparece este warning
            </p>

            <img src="/img/imkey.png" />

            <p>
              El rol de las keys es como un identificador, es muy útil sobretodo
              cuando estamos trabajando con Arrays que son cambiantes, a los que
              se le borran y agregan elementos. En estos casos, la key le va a
              indicar a React cuáles elementos están cambiando, cuáles fueron
              agregados nuevos y cuáles fueron removidos. Si no se lo colocamos,
              cada vez que eliminemos un elemento, react va a volver a
              renderizar todos los elementos de la lista, aunque dichos
              elementos no hayan cambiado. Muchas personas colocan el índice del
              elemento del array como key. Pero esto también es una mala
              práctica, debido a que, cuando eliminemos un elemento, por
              ejemplo, el de indice 1, el que tenía índice 2 ahora tendrá índice
              1, el que tenía 3 tendrá 2, el que tendría 4 tendrá 3, y así
              sucesivamente. Y todos estos elementos que tienen nuevo índice,
              React va a interpretar como si estuvieran cambiando, cuándo el
              único que ha cambiado fue el que se eliminó. Por eso no es bueno
              colocar el índice como key, ya que se llega al mismo resultado que
              como si no se hubiese puesto.
            </p>
          </>
        )}
      </article>
    </section>
  );
}
export default ImportanciaKey;
