import { useState } from "react"

function Montaje() {

    const [Montaje, setMontaje] = useState(false)

  return (


    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setMontaje(!Montaje)}
            className={`${
              !Montaje
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Montaje </h3>
        </div>
        {Montaje && (
          <>
            <p>
            En esta fase nuestro componente se renderizará por primera vez y hace los efectos secundarios que se ejecutan luego del render. En los componentes funcionales, esto hace alusión a lo que se realiza en la parte funcional y en el primer renderizado de los useEffect. Excluyendo funciones como onClick’s. En los componentes clase, hace alusión a los métodos:
            </p>
            
            <p><span className="text-[23px] font-bold">ComponentWillMount</span>
            Aquí se ejecutará código antes de que se realice el render. Aquí podemos hacer cambios en el estado evitando la renderización del componente. 
            </p>
            <p><span className="text-[23px] font-bold">Render</span>
            Aquí se mostrará el código JSX retornado por el componente. 
            </p>

            <p><span className="text-[23px] font-bold">ComponentDidMount</span>
            Este método es para ejecutar código inmediatamente después de la renderización del componente. Aquí se puede colocar los efectos secundarios 
            </p>
            
          </>
        )}
      </article>
    </section>


    )

}
export default Montaje