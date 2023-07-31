import { useState } from "react"

function Actualizacion() {

    const [Actual, setActual] = useState(false)

  return (

    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setActual(!Actual)}
            className={`${
              !Actual
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Actualización </h3>
        </div>
        {Actual && (
          <>
            <p>
            En esta fase nuestro componente se renderizó, y sólo está esperando cambios en el estado, en las props, y en otros tipos de datos para actualizarse. En los componentes funcionales, esta fase se puede ver en los useEffect con arreglo de dependencia, el cuál contiene props o estados adentro. En los componentes clase, esta fase se representa a través de los siguientes métodos:
            </p>
            
            <p><span className="text-[23px] font-bold">. componentWillReceiveProps</span>
            Este método se ejecuta cuándo el componente recibe props actualizadas.
            </p>
            <p><span className="text-[23px] font-bold">. shouldComponentUpdate</span>
            Se ejecutará para comparar las nuevas props y el nuevo estado, y comprobar cuánto ha cambiado con el que había previamente. Debe retornar un booleano, si retorna true el componente debe actualizarse, en caso de retornar false, el componente debe quedarse como está 
            </p>

            <p><span className="text-[23px] font-bold">. componentWillUpdate</span>
            En este caso, este método es similar al componentWillMount, donde se hacen algunas acciones antes de que el componente se renderice. La diferencia es que en este caso el componente ya se encuentra renderizado, sólo esta preparando los nuevos cambios. 
            </p>

            <p><span className="text-[23px] font-bold">. componentDidUpdate</span>
            Este método es similar al componentWillMount, hará los efectos secundarios una vez el componente ya se ha renderizado. Es donde colocaremos acciones asíncronas, sólo que por segunda vez. 
            </p>
            
          </>
        )}
      </article>
    </section>


  )

}
export default Actualizacion