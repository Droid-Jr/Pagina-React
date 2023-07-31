import { useState } from "react";
import { Link } from "react-router-dom";

function ConsumirApi() {
  const [Consumo, setConsumo] = useState(false);
  const [Consumo2, setConsumo2] = useState(false);
  const [Consumo3, setConsumo3] = useState(false);
  const [Consumo4, setConsumo4] = useState(false);
  const [Consumo5, setConsumo5] = useState(false);
  const [Consumo6, setConsumo6] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setConsumo(!Consumo)}
            className={`${
              !Consumo
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Consumo de API en react con useState y useEffect </h3>
        </div>
        {Consumo && (
          <>
            <p>
              Una de las formas más comunes para consumir API’s en React es a
              través del hook useState, ya que permite almacenar la información
              devuelta con la API. Es importante colocar la petición ya sea en
              un useEffect, si queremos que se ejecute al cargar la aplicación,
              o en una función, si queremos que se ejecute en algún evento, como
              al darle clic a un botón, en un submit, etc.
            </p>

            <img src="/img/consumo1.png" />

            <p>
              Si la petición se deja fuera de cualquier función, el cambio en el
              estado provocará un bucle infinito.
            </p>

            <img src="/img/consumir2.png" />

            <div className="flex items-center  flex-col gap-5">
              <i
                onClick={() => setConsumo2(!Consumo2)}
                className={`${
                  !Consumo2
                    ? "fa-solid fa-circle-chevron-right fa-bounce"
                    : "fa-solid fa-circle-chevron-right fa-rotate-90"
                }`}
              ></i>
              <h3>Recomendaciones </h3>
              {Consumo2 && (
                <>
                  <div className="flex items-center gap-5">
                    <i
                      onClick={() => setConsumo3(!Consumo3)}
                      className={`${
                        !Consumo3
                          ? "fa-solid fa-circle-chevron-right fa-bounce"
                          : "fa-solid fa-circle-chevron-right fa-rotate-90"
                      }`}
                    ></i>
                    <h3>Guarda en el estado la información importante </h3>
                  </div>
                  {Consumo3 && (
                    <>
                      <p>
                        Cuando trabajamos con axios, siempre nos va a devolver
                        las API’s con este formato
                      </p>
                      <img src="/img/impor.png" />

                      <p>
                        Allí hay información como los headers, el status de la
                        petición, las características de la petición, y cosas
                        que generalmente no vamos a utilizar en nuestra
                        aplicación. La información de la API en sí, viene en la
                        propiedad `data`, por lo que al guardar la información
                        en el estado, es recomendable guardar directamente dicha
                        propiedad `res.data`. Otras veces, la misma API nos trae
                        información que no vamos a utilizar. Por ejemplo, esta
                        API trae una propiedad `data` internamente, y una
                        propiedad `status` que dice “success”. Si el status no
                        lo vamos a usar, podemos acceder directamente a `data`.
                        Luego tenemos una propiedad products, pero esa propiedad
                        tampoco la vamos a utilizar, sólo usaremos el array que
                        hay adentro, por lo que almacenaremos
                        `res.data.data.products`.
                      </p>
                      <img src="/img/impor2.png" />
                      <div className="flex items-center gap-5">
                        <i
                          onClick={() => setConsumo6(!Consumo6)}
                          className={`${
                            !Consumo6
                              ? "fa-solid fa-circle-chevron-right fa-bounce"
                              : "fa-solid fa-circle-chevron-right fa-rotate-90"
                          }`}
                        ></i>
                        <h3>Errores de asincronía</h3>
                      </div>
                      {Consumo6 && (
                        <>
                          <p>
                            Es común que al trabajar con API’s, nos salga un
                            error como este
                          </p>

                          <img src="/img/error.png" />

                          <p>
                            Esto es un error de asincronía, y ocurre debido a
                            que react va a empezar a renderizar la vista antes
                            de recibir la respuesta de la API, por lo que al
                            acceder a propiedades muy profundar empiece a
                            ocurrir.Hay que leerlo, ya que nos da la ubicación
                            del error
                          </p>

                          <img src="/img/error2.png" />

                          <p>Por lo que podemos deducir que es aquí </p>

                          <img src="/img/error3.png" />

                          <p>
                            Para solucionarlo, se pueden usar varias opciones
                          </p>

                          <div className="flex flex-col items-center gap-5">
                            <i
                              onClick={() => setConsumo4(!Consumo4)}
                              className={`${
                                !Consumo4
                                  ? "fa-solid fa-circle-chevron-right fa-bounce"
                                  : "fa-solid fa-circle-chevron-right fa-rotate-90"
                              }`}
                            ></i>
                            <h3>Con encadenamiento opcional</h3>
                            {Consumo4 && (
                              <>
                                <p>
                                  Podemos usar lo que se conoce en javascript
                                  como “optional chaining” o encadenamiento
                                  opcional. Lo colocamos antes de la propiedad
                                  que estaba intentando leer
                                </p>

                                <img src="/img/opcional.png" />

                                <p>
                                  También se puede colocar para cuando accedemos
                                  a un array
                                </p>
                                <img src="/img/opcional2.png" />
                              </>
                            )}
                          </div>
                          {}
                          <div className="flex items-center gap-5">
                            <i
                              onClick={() => setConsumo5(!Consumo5)}
                              className={`${
                                !Consumo5
                                  ? "fa-solid fa-circle-chevron-right fa-bounce"
                                  : "fa-solid fa-circle-chevron-right fa-rotate-90"
                              }`}
                            ></i>
                            <h3>Con renderizado condicional</h3>
                          </div>
                          {Consumo5 && (
                            <>
                              <p>Ver la sección de @Renderizado condicional </p>

                              <img src="/img/condicion1.png" />
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </>
        )}
      </article>
      <p>
        Para más información, visitar:{" "}
        <Link
          target="_blank"
          to={"https://axios-http.com/es/"}
          className="text-[blue]"
        >
          https://axios-http.com/es/
        </Link>
      </p>
    </section>
  );
}
export default ConsumirApi;
