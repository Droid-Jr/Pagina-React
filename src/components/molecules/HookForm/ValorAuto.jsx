import { useState } from "react"

function ValorAuto() {

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
          <h3>Colocar valores automáticamente</h3>
        </div>
        {Insta && (
          <>
            <p>Si queremos llenar los valores del formulario, debemos usar de igual forma el método “reset”, pero esta vez, el objeto que le pasemos por parámetro tendrá los valores que queramos ponerle al formulario.</p>

            <img src="/img/auto.png" />

           
          </>
        )}
      </article>
    </section>




  )
}
export default ValorAuto