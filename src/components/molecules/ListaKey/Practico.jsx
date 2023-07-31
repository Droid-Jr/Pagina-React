import { useState } from "react";

function Practico() {
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
          <h3>Uso práctico de las listas </h3>
        </div>
        {Insta && (
          <>
            <p>
              En proyectos reales, las listas generalmente se usan para
              renderizar array’s de datos, y cada elemento de estos array’s
              suelen ser objetos. Por ejemplo, una api generalmente entrega una
              lista de usuarios de esta forma:
            </p>

            <img src="/img/listakey.png" />

            <p>.Para renderizarla en un componente, se haría de esta forma:</p>

            <img src="/img/listakey2.png" />
          </>
        )}
      </article>
    </section>
  );
}
export default Practico;
