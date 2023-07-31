import AccesoStore from "../components/molecules/Redux/AccesoStore";
import Basico from "../components/molecules/Redux/Basico";
import RutaSlice from "../components/molecules/Redux/RutaSlice";

function Reduxs() {
  return (
    <div className="bg-[#b8b4b4] min-h-screen w-[100%]">
      <main className="flex flex-col gap-6">
        <section className="text-center ">
          <h2 className="text-[30px] font-extrabold shadow-[2px_2px_2px]  py-2">
            Redux
          </h2>
          <p className="px-2 py-2">
            Redux es una librería con la que podemos manejar un estado global
            para nuestra aplicación React, y así evitar el uso excesivo y
            desconcertante de las props. Esta basado en la arquitectura “flux”.
            Redux se ha vuelto indispensable para que nuestros proyectos sean
            escalables. Hacer un proyecto grande sin redux se puede volver muy
            difícil de mantener.
          </p>

          <div className="grid place-content-center">
            <img src="/img/redux.png" />
          </div>

          <div className="grid place-content-center">
          <p>Instalación</p>
          <img src="/img/redux1.png" />
          </div>
        </section>

        <div className="w-[90%]  grid place-content-center ">
        <Basico/>
        <RutaSlice/>
        <AccesoStore/>


        </div>





      </main>
    </div>
  );
}
export default Reduxs;
