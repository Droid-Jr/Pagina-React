import { useState } from "react"

function Diferente() {

    const [Insta, setInsta] = useState(false)
    const [Insta1, setInsta1] = useState(false)
    const [Insta2, setInsta2] = useState(false)


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
        <h3>Inputs diferentes a “text”. </h3>
      </div>
      {Insta && (
        <>
          <div className="flex items-center gap-5">
        <i
          onClick={() => setInsta1(!Insta1)}
          className={`${
            !Insta1
              ? "fa-solid fa-circle-chevron-right fa-bounce"
              : "fa-solid fa-circle-chevron-right fa-rotate-90"
          }`}
        ></i>
        <h3>Checkbox </h3>
      </div>

      {
        Insta1 && <>
        
        <p>Los checkbox manejan valores de true o false. Para obtener el valor de un checkbox tendríamos que acceder a la propiedad “checked” de e.target, y para acceder a su valor, tendríamos que acceder al atributo “checked”.</p>

        <img src="/img/check.png" />
        
        </>
      }


<div className="flex items-center gap-5">
        <i
          onClick={() => setInsta2(!Insta2)}
          className={`${
            !Insta2
              ? "fa-solid fa-circle-chevron-right fa-bounce"
              : "fa-solid fa-circle-chevron-right fa-rotate-90"
          }`}
        ></i>
        <h3>Radio </h3>
      </div>

      {
        Insta2 && <>
        
        <p>Para manejar los inputs de tipo radio, hay que hacer varios inputs, y un sólo estado. Por cada opción, vamos a crear un input, donde la propiedad onChange ponga el estado estado en la propiedad que queramos que tenga con esa opción. Y en checked, vamos a hacer una validación, para comprobar si el estado tiene el valor de dicha opción</p>


        <img src="/img/radio.png"  />
        
        
        </>
      }



        </>
      )}
    </article>
  </section>




  )
}
export default Diferente