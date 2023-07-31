import { useState } from "react";

function Valor() {
  const [Valor, setValor] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setValor(!Valor)}
            className={`${
              !Valor
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Valor</h3>
        </div>
        {Valor && (
          <>
            <p>
              Va a ser la variable que tendrá nuestro estado. Por defecto va a
              tener el valor que le pasemos al useState por parámetros al
              inicializarlo.
            </p>
            <img src="/img/valor.png" />
            <p>
              Podemos llamarlo como queramos. En este ejemplo se llamó "counter"
              porque es un contador. Pero también se podría colocar "user",
              "currentValue", "state", etc. Como convención, cuando se trata de
              un Booleano, se suele empezar con "is", por ejemplo: "isOn",
              "isUsed", "isImportant".
            </p>
          </>
        )}
      </article>
    </section>
  );
}
export default Valor;
