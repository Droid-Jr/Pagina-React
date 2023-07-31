import { useState } from "react"


function PropsCon() {

    const [Props, setProps] = useState(false)
    const [Props2, setProps2] = useState(false)
    const [Props3, setProps3] = useState(false)

  return (

   <section className="w-[90%] m-auto">
    <article>

    <div className="flex items-center gap-5">
          <i
            onClick={() => setProps(!Props)}
            className={`${
              !Props
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Props</h3>
        </div>
        {
            Props && <>
            <p>Las props permiten el paso de información entre componentes. Gracias a las props, nuestros componentes serán muy dinámicos y reutilizables.</p>
            
            <div className="flex items-center gap-5">
          <i
            onClick={() => setProps2(!Props2)}
            className={`${
              !Props2
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Sintaxis básica</h3>
        </div>
        {
            Props2 && <>
            <p>Las props se declararán al momento de llamar al componente.</p>
            <img src="/img/props.png" />
            <p>El componente recibirá como parámetros un objeto, en el cuál estarán todas las propiedades que se enviaron en el momento que fue llamado. Por convención, a este objeto se le llama props.</p>
            <img src="/img/props2.png" />
            <p>En este caso, el objeto props contendrá lo siguiente : </p> 
            <img src="/img/props3.png" />           
            </>
        }
        <div className="flex items-center gap-5">
          <i
            onClick={() => setProps3(!Props3)}
            className={`${
              !Props3
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Desestructurando</h3>
        </div>
        {
            Props3 && <>
            
            <p>El objeto **props** era lo más común hace un tiempo. Sin embargo, después se puso de moda desestructurar dicho objeto, ya que da lugar a menos errores. Además de que permite colocar valores por defecto.Si el componente fue llamado de esta forma</p>

            <img src="/img/destruc.png" />

            <p>En vez de recibirlo todo como el objeto props, Haríamos una desestructuración de dicho objeto</p>

            <img src="/img/destruc2.png" />

            <p>Y si por alguna razón se llama el componente sin ninguna propiedad</p>

            <img src="/img/destruc3.png" />
            <p>Podemos colocar un valor por defecto de esta forma</p>
            <img src="/img/destrucc4.png" />

            
            </>
        }
            </>
        }
        


    </article>
    
   </section>


  )
}
export default PropsCon