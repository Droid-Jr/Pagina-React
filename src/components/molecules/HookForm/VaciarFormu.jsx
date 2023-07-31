import { useState } from "react"

function VaciarFormu() {

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
        <h3>Vaciar el formulario</h3>
      </div>
      {Insta && (
        <>
          <p>Para vaciar el formulario podemos traer una propiedad adicional de React hook form llamada “reset”. </p>

          <img src="/img/vaciar.png" />

          <p>También necesitamos crear un objeto de los valores por defecto que vamos a poner en el formulario. Los atributos del objeto dependerán de lo que hayamos puesto en register. Siguiendo el ejemplo del login:</p>

          <img src="/img/vaciar1.png" />

          <p>Finalmente, cada vez que queramos que se vacíen los valores, debemos ejecutar reset, pasándole por parámetros el arreglo de los valores por defecto</p>

          <img src="/img/vaciar2.png"  />
        </>
      )}
    </article>
  </section>




  )
}
export default VaciarFormu