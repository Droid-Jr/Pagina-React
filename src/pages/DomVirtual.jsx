import Dom from "../components/molecules/DomVirtual/Dom"
import VirtualDom from "../components/molecules/DomVirtual/VirtualDom"

function DomVirtual() {


  return (

    <div className="bg-[#b8b4b4] min-h-screen w-[100%]">
      <main className="flex flex-col gap-6">
      <section className="text-center ">
        <h2 className="text-[20px] font-semibold shadow-[2px_2px_2px]  py-2">
        DOM y DOM virtual
        </h2>
        <p className="px-2 py-2">
        El DOM (Document Objects Model) es la estructura básica de los archivos HTML y XML. React tiene un DOM especial llamado Virtual DOM, con el que se logra una mejor optimización. Este apartado será muy teórico, ya que vamos a ahondar en estos conceptos de forma profunda, debido a que son importantes para nuestra comprensión de React, además de que son típicas preguntas de entrevistas.
        </p>
      </section>
      
      <Dom/>
      <VirtualDom/>
      
      <p>Para más información, visitar: 
      </p>
      </main>
    </div>


  )
}
export default DomVirtual