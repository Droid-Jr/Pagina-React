import { useState } from "react";
import { Link } from "react-router-dom";

function Ejercicios() {
  const [Ejercicio, setEjercicio] = useState(false);
  const [Ejercicio1, setEjercicio1] = useState(false);
  const [Ejercicio2, setEjercicio2] = useState(false);
  const [Ejercicio3, setEjercicio3] = useState(false);
  const [Ejercicio4, setEjercicio4] = useState(false);
  const [Ejercicio5, setEjercicio5] = useState(false);
  const [Ejercicio6, setEjercicio6] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setEjercicio(!Ejercicio)}
            className={`${
              !Ejercicio
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Ejercicios </h3>
        </div>
        {Ejercicio && (
          <>
            <div className="flex items-center gap-5">
              <i
                onClick={() => setEjercicio1(!Ejercicio1)}
                className={`${
                  !Ejercicio1
                    ? "fa-solid fa-circle-chevron-right fa-bounce"
                    : "fa-solid fa-circle-chevron-right fa-rotate-90"
                }`}
              ></i>
              <h3>Ejercicio base </h3>
            </div>
            {Ejercicio1 && (
              <>
                <p>
                  Consume esta API{" "}
                  <Link target="_blank" className="text-[blue]">
                    https://restcountries.com/
                  </Link>{" "}
                  para traer la información de un país en particular (no tiene
                  que ser random). Mostrando el nombre oficial del país, la
                  bandera, Población, area, continente, region, subregion y
                  capital. Visualmente, divide la información en demography
                  (population, area), location(continent, region, subregion) y
                  capital **Requisito**: no trabajar en App, crear un componente
                  llamado `Country` y hacer la aplicación allí
                </p>
                <img src="/img/basic.png" />
              </>
            )}

            <div className="flex items-center gap-5">
              <i
                onClick={() => setEjercicio2(!Ejercicio2)}
                className={`${
                  !Ejercicio2
                    ? "fa-solid fa-circle-chevron-right fa-bounce"
                    : "fa-solid fa-circle-chevron-right fa-rotate-90"
                }`}
              ></i>
              <h3>#1 operador && </h3>
            </div>
            {Ejercicio2 && (
              <>
                <p>
                  Hacer un botón, que al darle clic permita mostrar u ocultar el
                  componente creado anteriormente
                </p>

                <img src="/img/tarea1.jpeg" />
              </>
            )}

            <div className="flex items-center gap-5">
              <i
                onClick={() => setEjercicio3(!Ejercicio3)}
                className={`${
                  !Ejercicio3
                    ? "fa-solid fa-circle-chevron-right fa-bounce"
                    : "fa-solid fa-circle-chevron-right fa-rotate-90"
                }`}
              ></i>
              <h3>#2 operador ternario </h3>
            </div>

            {Ejercicio3 && (
              <>
                <p>
                  Añadir una pantalla de carga a la aplicación. Si esta cargando
                  la API, que se muestre la pantalla de carga. De lo contrario,
                  que se muestre la información
                </p>

                <div className="flex w-[50%] min-h-[400px]">
                  <img
                    className="border-[black] border"
                    src="/img/tarea2.jpeg"
                    alt=""
                  />

                  <img
                    className="border-[black] border"
                    src="/img/tarea1.jpeg"
                  />
                </div>
              </>
            )}

            <div className="flex items-center gap-5">
              <i
                onClick={() => setEjercicio4(!Ejercicio4)}
                className={`${
                  !Ejercicio4
                    ? "fa-solid fa-circle-chevron-right fa-bounce"
                    : "fa-solid fa-circle-chevron-right fa-rotate-90"
                }`}
              ></i>
              <h3>#3 operador ternario anidado </h3>
            </div>

            {Ejercicio4 && (
              <>
                <p>
                  Colocar tres botones, que permitan seleccionar la información
                  mostrada (demography, location o capital)
                </p>

                <img className="border-[black] border" src="/img/tarea3.jpeg" />
              </>
            )}

            <div className="flex items-center gap-5">
              <i
                onClick={() => setEjercicio5(!Ejercicio5)}
                className={`${
                  !Ejercicio5
                    ? "fa-solid fa-circle-chevron-right fa-bounce"
                    : "fa-solid fa-circle-chevron-right fa-rotate-90"
                }`}
              ></i>
              <h3>#4 renderizado condicional a través de una función </h3>
            </div>

            {Ejercicio5 && (
              <>
                <p>
                  Hacer el ejercicio anterior, pero haciendo la condición en una
                  función{" "}
                </p>

                <img className="border-[black] border" src="/img/tarea3.jpeg" />
              </>
            )}

            <div className="flex items-center gap-5">
              <i
                onClick={() => setEjercicio6(!Ejercicio6)}
                className={`${
                  !Ejercicio6
                    ? "fa-solid fa-circle-chevron-right fa-bounce"
                    : "fa-solid fa-circle-chevron-right fa-rotate-90"
                }`}
              ></i>
              <h3>#5 renderizado condicional a través de un componente </h3>
            </div>

            {Ejercicio6 && (
              <>
                <p>
                  Hacer el ejercicio anterior, pero haciendo la condición en un
                  componente
                </p>

                <img className="border-[black] border" src="/img/tarea3.jpeg" />
              </>
            )}
          </>
        )}
      </article>
    </section>
  );
}
export default Ejercicios;
