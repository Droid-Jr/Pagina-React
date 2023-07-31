import { useState } from "react";

function ParametrosRutas() {
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
          <h3>Parámetros </h3>
        </div>
        {Insta && (
          <>
            <p>
              Los parámetros son usados para cuando queremos url’s dinámicas,
              donde lo que recibiremos no es un valor concreto, sino que puede
              variar. Generalmente se usa con id’s. Para crear un parámetro,
              debemos usar el componente Route y en path poner el dato dinámico,
              antepuesto por dos puntos ( **:** )
            </p>

            <img src="/img/parametro.png" />

            <p>
              . Quiere decir que en esa ruta puede ser “/users/3”, “/users/94”,
              “/users/5”, “/users/anything”... Por ejemplo:
            </p>

            <img src="/img/parametro1.png" />

            <p>
              - Accediendo a los parámetros Para obtener el dato dinámico
              declarado en parámetros, React Router nos proporciona un hook
              llamado “useParams”, que al ejecutarlo nos retornará un objeto
              cuyas propiedades se denominarán dependiendo de como llamamos a
              los datos dinámicos anteriormente
            </p>

            <img src="/img/parametro2.png" />
          </>
        )}
      </article>
    </section>
  );
}
export default ParametrosRutas;
