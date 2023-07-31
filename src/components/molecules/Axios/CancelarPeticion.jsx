import { useState } from "react"

function CancelarPeticion() {

    const [Cancelar, setCancelar] = useState(false)

  return (

    <section className="w-[90%] m-auto">
    <article>
      <div className="flex items-center gap-5">
        <i
          onClick={() => setCancelar(!Cancelar)}
          className={`${
            !Cancelar
              ? "fa-solid fa-circle-chevron-right fa-bounce"
              : "fa-solid fa-circle-chevron-right fa-rotate-90"
          }`}
        ></i>
        <h3>Cancelar una petición </h3>
      </div>
      {Cancelar && (
        <>
          <p>A veces necesitamos cancelar una petición HTTP antes de que ésta haya cargado. 

Para estos casos, lo primero que debemos hacer es crear un recurso que contendrá un token de cancelación:
          </p>

          <img src="/img/cancelar.png" />

          <p>Luego, en nuestra petición, pasamos un segundo parámetro que sea un objeto, con un atributo “cancelToken”, y le pasamos la propiedad token del objecto source que declaramos previamente.</p>

          <img src="/img/cancelar2.png" />  
          <p>Finalmente, para cancelarla ejecutamos el método “cancel” del objeto source.</p>     
          <img src="/img/cancelar3.png" /> 
          <p>Es muy útil para evitar que siga cargando cuándo se elimina un componente, a través de la función clean up del useEffect.</p> 
          <img src="/img/cancelar4.png" />
        </>
      )}
    </article>
  </section>
    
  )
}
export default CancelarPeticion