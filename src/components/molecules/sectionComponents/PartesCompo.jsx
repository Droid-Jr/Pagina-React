import { useState } from "react"

function PartesCompo() {

    const [Cuando3, setCuando3] = useState(false)

  return (

    <section className="w-[90%] m-auto">
        <div className="flex items-center gap-5">

        <i
        onClick={() => setCuando3(!Cuando3)}
        className={`${
            !Cuando3
            ? "fa-solid fa-circle-chevron-right fa-bounce"
            : "fa-solid fa-circle-chevron-right fa-rotate-90"
        }`}
        ></i>
        <p>Partes de un componente funcional</p>
        {
            Cuando3 && <>
            <p>Un componente se puede dividir en parte la parte funcional, donde estará toda la lógica, y la parte visual, que es donde se retornará todo el jsx.</p>

<img src="/img/partes1.png" />
<p>Para mandar a llamar un componente dentro de un jsx, se haría de la siguiente forma</p>
<img src="/img/parte2.png" />
            </>
        }

        
        </div>

        

    </section>


  )
}
export default PartesCompo