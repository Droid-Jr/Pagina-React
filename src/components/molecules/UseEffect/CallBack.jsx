import { useState } from "react"

function CallBack() {

    const [Call, setCall] = useState(false)

  return (


    <section className="w-[90%] m-auto">
    <article>
      <div className="flex items-center gap-5">
        <i
          onClick={() => setCall(!Call)}
          className={`${
            !Call
              ? "fa-solid fa-circle-chevron-right fa-bounce"
              : "fa-solid fa-circle-chevron-right fa-rotate-90"
          }`}
        ></i>
        <h3>Callback </h3>
      </div>
      {Call && (
        <>
          <p>
          Es donde le vamos a decir al componente qué es lo que se va a actualizar. Allí pondremos lo que se conoce como “efectos secundarios”, como llamar a una API del navegador, hacer una petición HTTP, ejecutar un setTimeout, setInterval, entre otras funcionalidades. En general, un efecto secundario son acciones que se realizan una vez que se haya renderizado el componente
          </p>

          <img src="/img/call.png"/>
          
        </>
      )}
    </article>
  </section>


  )
}
export default CallBack