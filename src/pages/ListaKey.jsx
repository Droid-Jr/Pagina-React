import { Link } from "react-router-dom";
import Basico from "../components/molecules/ListaKey/Basico";
import ImportanciaKey from "../components/molecules/ListaKey/ImportanciaKey";
import Practico from "../components/molecules/ListaKey/Practico";

function ListaKey() {
  return (
    <div className="bg-[#b8b4b4] min-h-screen w-[100%]">
      <main className="flex flex-col gap-6">
        <section className="text-center ">
          <h2 className="text-[20px] font-semibold shadow-[2px_2px_2px]  py-2">
            Listas y Keys
          </h2>
          <p className="px-2 py-2">
            Hasta el momento, sólo hemos podido renderizar objetos y variables,
            como al mostrar los datos traídos de la API del clima, los cuales
            vienen en forma de objeto. Sin embargo, en muchas ocaciones la
            información viene en forma de array: los productos de un ecommerce,
            la lista de contactos de una red social, los mensajes en un chat,
            entre otros. Para estos casos, donde no conocemos cuántos ni cuáles
            objetos vamos a renderizar, o simplemente para reutilizar código,
            podemos usar las listas en React.
          </p>
        </section>

        <Basico/>
        <ImportanciaKey/>
        <Practico/>


        <p className="text-center">Para más información, consultar: <Link target="_blank" to={"https://es.legacy.reactjs.org/docs/lists-and-keys.html"} className="text-[blue] font-bold">https://es.reactjs.org/docs/lists-and-keys.html</Link></p>


      </main>
    </div>
  );
}
export default ListaKey;
