import { Link } from "react-router-dom"
import AnidadasRutas from "../components/molecules/Router/AnidadasRutas"
import ParametrosRutas from "../components/molecules/Router/ParametrosRutas"
import PrimeraRuta from "../components/molecules/Router/PrimeraRuta"
import ProtegidaRuta from "../components/molecules/Router/ProtegidaRuta"
import Redireccion from "../components/molecules/Router/Redireccion"

function RouterDoms() {



  return (


    <div className="bg-[#b8b4b4] min-h-screen w-[100%]">
    <main className="flex flex-col gap-6">
    <section className="text-center ">
      <h2 className="text-[30px] font-extrabold shadow-[2px_2px_2px]  py-2">
      React Router Dom
      </h2>
      <p className="px-2 py-2">
      Hasta el momento hemos usado React en su naturaleza de Single Page Application (SPA). Pero no todos los proyectos que construyamos van a ser de una sola página, la mayoría de las veces las aplicaciones se dividen en url’s, que permiten tener la aplicación en diferentes rutas: /login, /home, /signup, /about, entre otras. Para esa tarea se utiliza React Router.
      </p>


      <div className="flex justify-center">
      <img src="/img/router.png"  />
      </div>

      <p>Instalación</p>
      <img src="/img/router1.png"  />
    </section>
    <div className="w-[90%] grid place-content-center">

    <PrimeraRuta/>
    <Redireccion/>
    <ParametrosRutas/>
    <AnidadasRutas/>
    <ProtegidaRuta/>
    </div>

    <p>Para más información, consultar: <Link target="_blank" className="text-[blue] font-extrabold" to={"https://reactrouter.com/docs/en/v6/"}>https://reactrouter.com/docs/en/v6/</Link></p>
    
    
    </main>
  </div>




  )
}
export default RouterDoms