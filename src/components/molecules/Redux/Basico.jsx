import { useState } from "react"

function Basico() {

    const [Insta, setInsta] = useState(false)


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
          <h3>Configuraciones básicas</h3>
        </div>
        {Insta && (
          <>
            <p>Antes que nada, vamos a crear la store de redux. Para esto, vamos a crearnos una carpeta llamada store en la carpeta src, y allí creamos un archivo llamado index.js (o index.jsx si estas usando vite). </p>

            <img src="/img/reduxba.png" />

            <p>En ese archivo, vamos a colocar la estructura básica de la store, que sería la siguiente:
            </p>

            <img src="/img/reduxba1.png" />
            <p>Luego vamos al otro index, el de src (o a main.jsx, si estas usando vite)</p>
            <img src="/img/reduxba2.png" />
            <p>Y reemplazamos lo que tenía antes con esto</p>
            <img src="/img/reduxba3.png" />
            pY ya con esto tendríamos todo lo necesario para empezar a crear las slices y trabajar con redux.
          </>
        )}
      </article>
    </section>



  )
}
export default Basico