import { useState } from "react"
import HasRouter from "./HasRouter"
import Routes from "./Routes"
import RutaRoute from "./RutaRoute"


function PrimeraRuta() {

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
          <h3>Creando nuestras primeras rutas </h3>
        </div>
        {Insta && (
          <div className="py-5 grid gap-5">
            <p>Para crear una ruta en React Router hay tres componentes principales: Router, Routes y Route.</p>

            <HasRouter/>

            <Routes/>

            <RutaRoute/>







            <h2>Uso básico de React Router:</h2>
            <img src="/img/basicoroute.png" alt="" />

            <p>Es importante mencionar que todo lo que coloquemos afuera del componente Routes se vería en todas las rutas, por lo que es el sitio perfecto para mostrar footers o barras de navegación, ya que son elementos que suelen estar presentes en todas las rutas. Es lo que se conoce como “Layout”: </p>
            
            <img src="/img/basicorouter1.png"  />
          </div>
        )}
      </article>
    </section>




  )
}
export default PrimeraRuta