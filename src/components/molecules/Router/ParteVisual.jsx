import { useState } from "react";

function ParteVisual() {
  const [One, setOne] = useState(false);
  const [One1, setOne1] = useState(false);
  const [One2, setOne2] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setOne(!One)}
            className={`${
              !One
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>En la parte visual </h3>
        </div>
        {One && (
          <>
            <p>
              Lo podemos hacer con dos componentes de React Router: Link y
              Navigate.
            </p>

            <div className="flex items-center gap-5">
              <i
                onClick={() => setOne1(!One1)}
                className={`${
                  !One1
                    ? "fa-solid fa-circle-chevron-right fa-bounce"
                    : "fa-solid fa-circle-chevron-right fa-rotate-90"
                }`}
              ></i>
              <h3>Link </h3>
            </div>
            {One1 && (
              <>
                <p>
                  Para que un usuario se mueva entre una url y otra generalmente
                  se usan etiquetas "a"
                </p>

                <img src="/img/ancor.png" />

                <p>
                  Sin embargo, si son url’s de la misma aplicación, React Router
                  nos proporciona un componente llamado Link. Para HTML, el
                  componente Link es un "a" común y corriente, pero para React,
                  es un enlace mucho más optimizado. Como atributo donde colocar
                  la url, Link utiliza uno llamado “to” En vez de “href”
                </p>

                <img src="/img/ancor2.png" />
              </>
            )}

            <div className="flex items-center gap-5">
              <i
                onClick={() => setOne2(!One2)}
                className={`${
                  !One2
                    ? "fa-solid fa-circle-chevron-right fa-bounce"
                    : "fa-solid fa-circle-chevron-right fa-rotate-90"
                }`}
              ></i>
              <h3>Navigate </h3>
            </div>

            {One2 && (
              <>
                <p>
                  Este es otro componente de React Router, reemplaza al
                  “Redirect” de la v5. La diferencia es que reenvía directamente
                  a otra ruta, sin necesidad de hacer clic en ningún enlace. Le
                  daremos un uso práctico más adelante con las rutas protegidas.
                </p>

                <img src="/img/navigate.png" />
              </>
            )}
          </>
        )}
      </article>
    </section>
  );
}
export default ParteVisual;
