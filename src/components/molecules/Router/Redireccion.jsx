import { useState } from "react"
import ParteVisual from "./ParteVisual"
import ParteFuncional from "./ParteFuncional"

function Redireccion() {

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
          <h3>Redireccionamiento </h3>
        </div>
        {Insta && (
          <>
            <p>Para hacer que el usuario vaya a una url u otra sin necesidad de que escriba en la barra de navegación, hay que usar redireccionamiento. Hay dos formas de hacer redireccionamiento, desde la parte visual y desde la parte funcional:</p>

            <ParteVisual/>
            <ParteFuncional/>
            
          </>
        )}
      </article>
    </section>



  )
}
export default Redireccion