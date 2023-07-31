import ControlInput from "../components/molecules/InputControlados/ControlInput";
import Controlados from "../components/molecules/InputControlados/Controlados";
import Diferente from "../components/molecules/InputControlados/Diferente";

function InputControl() {
  return (
    <div className="bg-[#b8b4b4] min-h-screen w-[100%]">
      <main className="flex flex-col gap-6">
        <section className="text-center ">
          <h2 className="text-[30px] font-bold  shadow-[2px_2px_2px]  py-2">
            Inputs controlados
          </h2>
          <p className="px-2 py-2 text-center">
            Los inputs son una parte esencial de las aplicaciones web, ya que
            permiten al usuario introducir datos a nuestro programa, con una
            interfaz amigable.
          </p>
          <img  src="/img/control.png" />
          <p>
            Hay varios tipos de inputs, algunos similares, como los de texto,
            email, contraseña... y otros que son un poco distintos: los checks,
            radio buttons e incluso los select, aunque estos últimos no se
            llaman explícitamente inputs, los podríamos poner en esta categoría.
            Hay varias formas de obtener los datos de inputs en react. En este
            apartado veremos como usarlos con un método que es bastante
            interactivo, que es a través del estado.
          </p>
        </section>

        <ControlInput/>
        <Diferente/>
        <Controlados/>
      </main>
    </div>
  );
}
export default InputControl;
