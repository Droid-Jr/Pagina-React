import { Link } from "react-router-dom"
import Basico from "../components/molecules/HookForm/Basico"
import VaciarFormu from "../components/molecules/HookForm/VaciarFormu"
import ValorAuto from "../components/molecules/HookForm/ValorAuto"

function HookForms() {



  return (
    <div className="bg-[#b8b4b4]  min-h-screen w-[100%]">
    <main className="flex flex-col gap-6">
      <section className="text-center ">
        <h2 className="text-[30px] font-extrabold  shadow-[2px_2px_2px]  py-2">
        React Hook Form
        </h2>

        <p>React Hook Form es una librería que nos ayuda a manejar formularios en React. Es una alternativa a los inputs controlados, ya que permiten hacer lo mismo pero con menos renders y menos código.</p>
        <p className="px-2 py-2 text-center">
        Instalación: 
        </p>
        <div className="grid place-content-center">
        <img  src="/img/hook.png" />
        </div>
      </section>


      <Basico/>

      <VaciarFormu/>
      <ValorAuto/>
      <div className="text-center">
        <p>Para más información, consultar:  <Link target="_blank" to={"https://react-hook-form.com/"} className="text-[blue] font-bold">https://react-hook-form.com/</Link></p>
      </div>
    </main>
  </div>




  )
}
export default HookForms