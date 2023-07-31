import { useState } from "react";

function OperadorTernario() {
  const [Ternario, setTernario] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setTernario(!Ternario)}
            className={`${
              !Ternario
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Renderizado condicional en JSX con operador ternario </h3>
        </div>
        {Ternario && (
          <>
            <p>
              Consiste en aprovechar la sintaxis del operador ternario de
              javascript. Es bueno para cuándo queremos condiciones que tengan
              un comportamiendo similar a if - else (ya que en JSX no se puede
              usar if - else).
            </p>

            <img src="/img/ternario.png" />

            <p>
              ¿Cómo lo usamos en React? Supongamos que tenemos un objeto llamado
              “user”, y este user tiene una propiedad isLogged, que es un
              booleano. Si es true, mostraremos un componente donde se muestra
              una sección principal de la aplicación. Si es false, es decir, no
              ha iniciado sesión, mostraremos un componente donde pueda hacer
              Login.
            </p>

            <img src="/img/ternario2.png" />
            <p>
              Recordemos que, al ser código dinámico, tenemos que colocar la
              condición entre llaves. **Aclaración**. ****El contenido de las
              condiciones es JSX, así como podemos colocar componentes, también
              podemos colocar cualquier tag. (Siempre deben estar dentro de un
              mismo padre).
            </p>

            <img src="/img/ternario3.png" />

            <p>
              Y si el contenido de las condiciones toma más de una línea,
              podemos hacer saltos sin problema. Aunque para mantener el código
              ordenado, lo recomendable es agrupar el JSX entre paréntesis (Así
              como cuando hacemos el return de los componentes).
            </p>

            <img src="/img/ternario4.png" />

            <p>
              ¿Y cómo hacemos si queremos tener varias condiciones anidadas?
              Supongamos que ahora, además de validar si el usuario está
              loggeado, queremos validar también su rol en la aplicación, en
              caso de que sea un administrador, mostramos un dashboard con más
              información, si no lo es, mostramos el home sin más, y si ni
              siquiera está loggeado, lo llevamos al login. Para colocar varias
              condiciones, tenemos que usar varios operadores ternarios
              anidados.
            </p>

            <img src="/img/ternario5.png" />
          </>
        )}
      </article>
    </section>
  );
}
export default OperadorTernario;
