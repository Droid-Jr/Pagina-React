import { useState } from "react"

function BasicEfect() {

    const [Efects, setEfects] = useState(false)

  return (

    <section className="w-[90%] m-auto">
    <article>
      <div className="flex items-center gap-5">
        <i
          onClick={() => setEfects(!Efects)}
          className={`${
            !Efects
              ? "fa-solid fa-circle-chevron-right fa-bounce"
              : "fa-solid fa-circle-chevron-right fa-rotate-90"
          }`}
        ></i>
        <h3>Sintaxis básica </h3>
      </div>
      {Efects && (
        <>
          <p>
          Lo primero que hay que hacer es importarlo de React.
          </p>

          <img src="/img/efec.png"/>
          
          <p>
          Ahora sí lo podemos usar. Para usarlo hay que ejecutarlo con dos parámetros: El primer parámetro es obligatorio, es el callback que estará ejecutando, y el segundo parámetro es el array de dependencias. Es opcional, pero su uso es lo más común.
          </p>

          <img src="/img/efec2.png"/>
          
        </>
      )}
    </article>
  </section>


  )
}
export default BasicEfect