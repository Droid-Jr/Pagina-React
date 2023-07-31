import { Link } from "react-router-dom";
import Ejercicios from "../components/molecules/RenderCondicional/Ejercicios";
import FuncionOperador from "../components/molecules/RenderCondicional/FuncionOperador";
import OperadorAnd from "../components/molecules/RenderCondicional/OperadorAnd";
import OperadorConponente from "../components/molecules/RenderCondicional/OperadorConponente";
import OperadorTernario from "../components/molecules/RenderCondicional/OperadorTernario";

function RenderCon() {
  return (
    <div className="bg-[#b8b4b4] min-h-screen w-[100%]">
      <main className="flex flex-col gap-6">
        <section className="text-center ">
          <h2 className="text-[20px] font-semibold shadow-[2px_2px_2px]  py-2">
            Renderizado condicional
          </h2>
          <p className="px-2 py-2">
            En React, muchas veces queremos que se muestre una cosa u otra
            dependiendo de alguna condición, por ejemplo: si la información
            cargó, mostrar componente. Sino, mostrar spinner de carga. Estas
            condiciones son elementales si queremos que nuestra aplicación sea
            dinámica. Para lograrlo, hay múltiples alternativas. Y eso es lo que
            estaremos viendo en este apartado. El renderizado condicional se
            puede hacer desde JSX, o si la lógica es muy compleja, se puede
            hacer a través de una función o a través de otro componente.
          </p>
        </section>

        <OperadorAnd/>
        <OperadorTernario/>
        <FuncionOperador/>
        <OperadorConponente/>
        <Ejercicios/>

        <p>Para más información, consultar: <Link className="text-[blue] font-bold" to={"https://es.legacy.reactjs.org/docs/conditional-rendering.html"} target="_blank">https://es.reactjs.org/docs/conditional-rendering.html</Link></p>
      </main>
    </div>
  );
}
export default RenderCon;
