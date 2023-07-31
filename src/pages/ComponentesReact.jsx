
import ComponenFuncional from "../components/molecules/sectionComponents/ComponenFuncional";
import CuandoUsar from "../components/molecules/sectionComponents/CuandoUsar";
import Extension from "../components/molecules/sectionComponents/Extension";
import PartesCompo from "../components/molecules/sectionComponents/PartesCompo";
import PropsCon from "../components/molecules/sectionComponents/PropsCon";
import TiposCompo from "../components/molecules/sectionComponents/TiposCompo";

function ComponentesReact() {



  return (

    <div className="bg-[#b8b4b4] min-h-screen w-[100%] ">
      <main className="flex flex-col gap-6">
      <section className="text-center ">
          <h2 className="text-[20px] font-semibold shadow-[2px_2px_2px]  py-2">Componentes</h2>
          <p className="px-2 py-2">Los componentes son esenciales para dividir la lógica y la vista de nuestra aplicación en partes más sencillas. Tienen la ventaja de ser reutilizables. Se caracterizan porque se nombran en UpperCase, con la primera letra mayúscula, y retornan jsx.</p>
        </section>
      <CuandoUsar/>
      <TiposCompo/>
      <PartesCompo/>
      <ComponenFuncional/>
      <PropsCon/>
      <Extension/>
      </main>
    </div>
  )
}
export default ComponentesReact