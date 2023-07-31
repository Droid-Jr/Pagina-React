import { useState } from "react"

function ControlInput() {

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
          <h3>Manejando inputs controlados </h3>
        </div>
        {Insta && (
          <>
            <p>Para tener un input controlado, primero vamos a necesitar un estado, el cual va a contener el valor de dicho input. El valor por defecto que se le suele poner es un string vacío, pero eso ya dependerá de las necesidades de la aplicación.</p>

            <img src="/img/text.png" />

            <p>. Luego, en el return del componente, vamos a colocar el input, el cuál va a tener dos propiedades fundamentales: value y onChange. El value va a ser el del estado, y en el onChange vamos a poner el nuevo valor del input en el estado (setValue). </p>

            <img src="/img/text2.png" />
            <p>Y con esto ya tendríamos un estado, el cuál ya tendrá el valor del input en todo momento. Cuando necesitemos el valor del input, sólo tendríamos que usar el del estado.</p>

            <img src="/img/text3.png"  />
          </>
        )}
      </article>
    </section>



  )
}
export default ControlInput