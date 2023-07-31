import { useState } from "react"

function Basico() {

    const [Basico, setBasico] = useState(false)


  return (


    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setBasico(!Basico)}
            className={`${
              !Basico
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Conceptos básicos </h3>
        </div>
        {Basico && (
          <>
            <p>Para renderizar una lista, tenemos que usar la función map() de JavaScript. Recordemos que map toma los elementos de un array y devuelve otro array con dichos elementos pero con una modificación.

            </p>

            <img src="/img/lista.png" />

            <p>. Recordemos también que JSX lo podemos ver como otro tipo de dato de javaScript, así como los números o los string. Por lo que podemos hacer un .map() que en cada iteración retorne un elemento JSX con los datos del elemento iterado.</p>

            <img src="/img/lista2.png" />

            <p>También podemos hacer el .map() dentro del mismo return del componente</p>
            <img src="/img/lista3.png"  />
            
            <p>Ambas sintaxis tienen un propósito, que es hacer esto, pero reutilizando código:</p>

            <img src="/img/lista4.png" />
            
            <p>Como estamos trabajando con JSX, recordemos que al retornar más de una línea es recomendable agrupar el código entre paréntesis para mantener el orden:</p>

            <img src="/img/lista5.png" />
            
            
            <p>La mayor peculiaridad de las listas, es que el elemento padre retornado necesita un atributo especial llamado “key”, que sea único y que no se repita en ninguna iteración.</p>

            <img src="/img/lista6.png" />

            <p>Estaremos viendo el propósito de este atributo “key” más adelante.</p>
          </>
        )}
      </article>
    </section>



  )
}
export default Basico