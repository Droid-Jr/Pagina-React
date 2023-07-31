import { Link } from "react-router-dom"
import Actualizacion from "../components/molecules/CicloDeVida/Actualizacion"
import Desmontaje from "../components/molecules/CicloDeVida/Desmontaje"
import Montaje from "../components/molecules/CicloDeVida/Montaje"

function CicloDeVida() {


  return (


    <div className="bg-[#b8b4b4] min-h-screen w-[100%]">
      <main className="flex flex-col gap-6">
      <section className="text-center ">
        <h2 className="text-[20px] font-semibold shadow-[2px_2px_2px]  py-2">
        Ciclo de vida de los componentes 
        </h2>
        <p className="px-2 py-2">
        Los componentes de nuestras aplicaciones pasan por varias etapas durante su ejecución. Y dependiendo de la etapa donde estén, es donde se pueden llevar a cabo diferentes acciones. El ciclo de vida de los componentes es un concepto que se encuentra relacionado principalmente a los componentes clase, los cuáles, de hecho, tienen diferentes métodos para cada una de estas etapas, etapas que no se ven tan marcadas en los componentes funcionales. Éste apartado será bastante teórico. Y lo aprovecharemos para ver cada una de estas fases, y lo que podemos ejecutar en las mismas.
        </p>
      </section>
      
      <Montaje/>
      <Actualizacion/>
      <Desmontaje/>

      <p>Para más información, visitar:
        <Link target="_blank" className="text-[blue]" to={"https://es.legacy.reactjs.org/docs/state-and-lifecycle.html"}>https://es.reactjs.org/docs/state-and-lifecycle.html</Link>
      </p>
      
      </main>
    </div>



  )
}
export default CicloDeVida