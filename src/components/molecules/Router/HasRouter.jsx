import { useState } from "react";

function HasRouter() {
  const [Instas, setInstas] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setInstas(!Instas)}
            className={`${
              !Instas
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Router (HashRouter y BrowserRouter) </h3>
        </div>
        {Instas && (
          <>
            <p>
              Es el que le indicará a React en qué momento se empezará a usar la
              estructura de rutas, entre otras configuraciones. Puede ser de dos
              tipos: BrowserRouter y HashRouter. - **BrowserRouter**: Es un
              router que se usa principalmente cuando hay alguna tecnología para
              server side rendering detrás de nuestra aplicación. En este caso
              estamos usando aplicaciones construidas enteramente en front end,
              por lo que nos dará problema cuando despleguemos nuestras
              aplicaciones en entornos de producción como netlify o cuando la
              intentemos correr en versiones antiguas de navegadores. -
              **HashRouter**: Es el router indicado para sitios web estáticos
              donde el servidor sólamente responde por una única ruta. Usando
              HashRouter podemos hacer aplicaciones sin preocuparnos de errores
              404 en producción. Nos va a añadir un símbolo numeral (#) luego
              del host, es decir, nuestras rutas quedarían así:
              http://localhost:3000/#/home En conclusión: cuando trabajemos en
              entorno de desarrollo (en el localhost) no hay ninguna diferencia.
              Pero cuando se despliegue en sitios como netlify veremos que
              browserRouter nos puede dar problemas. Por lo que, para este
              curso, **utilizaremos** **HashRouter**.
            </p>
          </>
        )}
      </article>
    </section>
  );
}
export default HasRouter;
