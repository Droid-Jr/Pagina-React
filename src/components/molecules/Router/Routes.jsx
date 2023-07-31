import { useState } from "react"

function Routes() {

const [Ros, setRos] = useState(false)

  return (


    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setRos(!Ros)}
            className={`${
              !Ros
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Routes </h3>
        </div>
        {Ros && (
          <>
            <p>Es el componente donde agruparemos las rutas. </p>

            <img src="/img/routes.png" />

          </>
        )}
      </article>
    </section>


  )
}
export default Routes