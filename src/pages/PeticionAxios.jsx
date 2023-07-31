import CancelarPeticion from "../components/molecules/Axios/CancelarPeticion"
import ConsumirApi from "../components/molecules/Axios/ConsumirApi"
import Intalacion from "../components/molecules/Axios/Intalacion"
import Metodos from "../components/molecules/Axios/Metodos"
import TokenTrabajo from "../components/molecules/Axios/TokenTrabajo"

function PeticionAxios() {


  return (


    <div className="bg-[#b8b4b4] min-h-screen w-[100%]">
    <main className="flex flex-col gap-6">
    <section className="text-center ">
      <h2 className="text-[20px] font-semibold shadow-[2px_2px_2px]  py-2">
      Peticiones HTTP con axios
      </h2>
      <p className="px-2 py-2">
      Al hablar de peticiones HTTP, hay muchas librerías que nos pueden ayudar con la tarea. Actualmente, la opción más popular al trabajar con React es Axios, la cuál nos va a permitir lidiar con REST APIs de forma rápida y sencilla.
      </p>
    </section>
    
    <Intalacion/>
    <Metodos/>
    <CancelarPeticion/>
    <TokenTrabajo/>
    <ConsumirApi/>

    
    
    
    </main>
  </div>



  )
}
export default PeticionAxios