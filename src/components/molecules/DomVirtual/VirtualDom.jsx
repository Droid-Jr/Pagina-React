import { useState } from "react"
import { Link } from "react-router-dom"

function VirtualDom() {

    const [Virtual, setVirtual] = useState(false)

  return (


    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setVirtual(!Virtual)}
            className={`${
              !Virtual
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Virtual DOM </h3>
        </div>
        {Virtual && (
          <>
            <p>
            Es un DOM ficticio creado en nuestras aplicaciones React. Podemos verlo una copia del DOM tradicional, de hecho, son paralelos, es decir, uno no anula al otro. La ventaja del virtual DOM es que permite una mejor optimización al momento de actualizar el DOM real. 
            </p>
            <img src="/img/virtual.png" />
            <p>
            Básicamente, antes de que el DOM real se actualice, react va a hacer una comparación, va a ver qué es lo que realmente cambió y lo que se necesita actualizar, y finalmente le dice al DOM real estos cambios, para optimizar lo máximo posible este proceso de renderizado.
            </p>
            <p>Para más información, visitar:
                <Link target="_blank" className="text-[blue]" to={"https://es.legacy.reactjs.org/docs/faq-internals.html"}>https://es.reactjs.org/docs/faq-internals.html</Link>
            </p>
          </>
        )}
      </article>
    </section>


  )
}
export default VirtualDom