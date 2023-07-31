import { Link } from "react-router-dom";
import CambiarValor from "../components/molecules/usestate/CambiarValor";
import Valor from "../components/molecules/usestate/Valor";
import Sintaxis from "../components/molecules/usestate/sintaxis";

function UsestateReact() {
  return (
    <div className="bg-[#b8b4b4] min-h-screen w-[100%]">
      <main className="flex flex-col gap-6">
      <section className="text-center ">
        <h2 className="text-[20px] font-semibold shadow-[2px_2px_2px]  py-2">
          UseState
        </h2>
        <p className="px-2 py-2">
        Es el hook más importante y básico. Nos va a permitir almacenar información y modificarla. No importa la cantidad de renders que realice la aplicación, useState va a recordar su valor sin volverse a inicializar.
        </p>
        <p >Nota: Podemos ejecutar useState cuántas veces queramos en un componente.</p>
        
      </section>
      
      <Sintaxis />
      <Valor/>
      <CambiarValor/>
      <p>Para más información, visitar: 
       <Link className="text-[blue]" target="_blank" to={"https://legacy.reactjs.org/docs/hooks-state.html"}>https://reactjs.org/docs/hooks-state.</Link>
      </p>
      </main>
    </div>
  );
}
export default UsestateReact;
