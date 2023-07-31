import { useState } from "react"

function ParteFuncional() {

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
          <h3>En la parte funcional </h3>
        </div>
        {Insta && (
          <>
            <p>ISi queremos que el redireccionamiento no se haga a través de un link sino que se haga al hacer clic a un botón, o al enviar un formulario, lo podemos hacer a través de un hook de react-router-dom llamado “useNavigate”. </p>

            <img src="/img/partefun.png" />

            <p>. Con navigate podemos redireccionar hacia una ruta en específico</p>

            <img src="/img/partefun1.png" />
            
            <p>También podemos devolver a la ruta donde estaba el usuario previamente</p>

            <img src="/img/partefun2.png"  />

            <p>Ejemplo practico de useNavigate:</p>

            <img src="/img/partefun3.png" />

          </>
        )}
      </article>
    </section>


  )
}
export default ParteFuncional