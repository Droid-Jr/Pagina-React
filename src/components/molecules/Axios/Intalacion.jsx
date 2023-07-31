import { useState } from "react";

function Intalacion() {
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
          <h3>Instalación e importación </h3>
        </div>
        {Insta && (
          <>
            <p>Instalación: En consola ejecutar:</p>

            <img src="/img/insta.png" />

            <p>. Importación</p>

            <img src="/img/insta2.png" />
          </>
        )}
      </article>
    </section>
  );
}
export default Intalacion;
