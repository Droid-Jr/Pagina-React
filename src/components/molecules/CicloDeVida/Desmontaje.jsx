import { useState } from "react";

function Desmontaje() {
  const [Desmonta, setDesmonta] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setDesmonta(!Desmonta)}
            className={`${
              !Desmonta
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Desmontaje</h3>
        </div>
        {Desmonta && (
          <>
            <p>
              En esta fase el componente por alguna razón será eliminado, por lo
              que hay que realizar acciones para que no queden eventListeners y
              otras funcionalidades que se puedan quedar ejecutando a pesar de
              que nuestro componente ya se eliminó. Lo que se conoce como
              saneamiento o clean up. En los componentes funcionales, esta fase
              es representada con la función que retornan los useEffect. En los
              componentes clases, el método encargado de esta fase es uno solo,
              llamado **ComponentWillUnmount**, donde se realiza la misma
              funcionalidad de saneamiento descrita anteriormente.
            </p>
          </>
        )}
      </article>
    </section>
  );
}
export default Desmontaje;
