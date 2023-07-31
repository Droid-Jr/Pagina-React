import { Link } from "react-router-dom"
import ArrayDependencia from "../components/molecules/UseEffect/ArrayDependencia"
import BasicEfect from "../components/molecules/UseEffect/BasicEfect"
import CallBack from '../components/molecules/UseEffect/CallBack'
import EvenListener from "../components/molecules/UseEffect/EvenListener"
function Efect() {

  return (

    <div className="bg-[#b8b4b4] min-h-screen w-[100%]">
    <main className="flex flex-col gap-6">
    <section className="text-center ">
      <h2 className="text-[20px] font-semibold shadow-[2px_2px_2px]  py-2">
      UseEffect
      </h2>
      <p className="px-2 py-2">
      El useEffect nos va a permitir controlar la actualización de nuestro componente luego de que éste se haya renderizado, lo cuál nos viene bien para procesos asíncronos, trabajar con API’s, entre otras funcionalidades. Es uno de los hooks más utilizados de React, ya que sustituye a los métodos de ciclo de vida de los componentes clase.
      </p>
    </section>
    
    <BasicEfect/>
    <CallBack/>
    <ArrayDependencia/>
    <EvenListener/>

    <p>Para más información, visitar
      <Link target="_blank" to={"https://es.legacy.reactjs.org/docs/hooks-effect.html"} className="text-[blue]">https://es.reactjs.org/docs/hooks-effect.html</Link>
    </p>
    
    
    </main>
  </div>


  )
}
export default Efect