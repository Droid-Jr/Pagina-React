import { useState } from "react"

function ComponenFuncional() {

    const [Cuando4, setCuando4] = useState(false)

  return (

    <section className="w-[90%] m-auto">
         <article>

        <div className="flex items-center gap-5">
          <i
            onClick={() => setCuando4(!Cuando4)}
            className={`${
                !Cuando4
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
            ></i>
          <h3>reación de un componente funcional</h3>
        </div>

        {
            Cuando4 && <>
            
            <p>La sintaxis básica de un componente funcional es la siguiente : </p>

        <img src="/img/funcional.png" />
        <p>Para crearlos rápidamente se puede usar una extensión llamada "Reactjs code snippets" de charalampos karypidis</p>

        <img src="/img/funcional2.png" />

        <p>Una vez instalada, podemos escribir rsc, y luego presionar tab. La extensión nos generará todo el código básico de un componente funcional.</p>

        <img src="/img/funcional3.png" />

            
            </>
        }
        
        </article>
    </section>

  )
}
export default ComponenFuncional