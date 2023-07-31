import { useState } from "react"
import { Link } from "react-router-dom"

function CambiarValor() {

    const [Cambiar, setCambiar] = useState(false)



  return (

    <section className="w-[90%] m-auto">
    <article>
      <div className="flex items-center gap-5">
        <i
          onClick={() => setCambiar(!Cambiar)}
          className={`${
            !Cambiar
              ? "fa-solid fa-circle-chevron-right fa-bounce"
              : "fa-solid fa-circle-chevron-right fa-rotate-90"
          }`}
        ></i>
        <h3>Función para cambiar el valor</h3>
      </div>
      {Cambiar && (
        <>
          <p>
          Es la que va de segundo en el arreglo desestructurado. 
          </p>
          <img src="/img/funcion.png" />
          <p>
          Es la que va a permitir agregarle otro dato al valor. Por convención, se nombra como el valor, anteponiendo el prefijo "set", haciendo referencia a que se le esta insertando un valor al estado.

Para usarlo, se invoca a modo de función, pasando como parámetros el nuevo valor del estado. por ejemplo:
          </p>
          <img src="/img/funcion2.png" />
          <p>También se puede usar el valor que tenía previamente el estado para cambiarlo en función del mismo.</p>
          <img src="/img/funcion3.png" />
          <p>Si se esta trabajando con un estado booleano, y se quiere colocar el valor contrario al que tenía previamente (un toggle), se puede hacer colocando el operador de negación al estado actual</p>
          <img src="/img/funcion4.png" />

          <h3>
          Actualizaciones funcionales
          </h3>
          <p>Al trabajar con el estado anterior, también se le puede pasar como parámetro un callback, y este último recibe como parámetro el estado anterior. Se retorna la modificación que se le va a hacer:</p>
          <img src="/img/funcion5.png" />

          <p>Por convención, al parámetro se le coloca prev + el nombre del estado, haciendo referencia a que se esta usando el estado anterior. Ejm: prevCounter, prevValue, prevState...</p>

          <Link target="_blank" to={"https://legacy.reactjs.org/docs/hooks-state.html"}>Clic aqui para mas informacion</Link>
        </>
      )}
    </article>
  </section>

    
  )
}
export default CambiarValor