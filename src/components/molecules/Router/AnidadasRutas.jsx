import { useState } from "react";

function AnidadasRutas() {
  const [Two, setTwo] = useState(false);
  const [Two2, setTwo2] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setTwo(!Two)}
            className={`${
              !Two
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Rutas anidadas </h3>
        </div>
        {Two && (
          <>
            <p>
              Para usar las subrutas, debemos poner una componente Route, sólo
              que lo pondremos dividido en tag de apertura y cierre . Este tag
              tendrá sólamente el atributo “element” (sin path). En dicho
              atributo pondremos el componente que contendrá el layout. Adentro
              de este Route, vamos a poner las rutas que llevarán ese layout.
              Estas últimas serán rutas normales, con atributos “element” y
              “path”. En el siguiente ejemplo, se harán cinco rutas. Dos de
              ellas, login y signup no tendrán layout. Mientras que las rutas
              “/” “/about” y “/about/team” van a tener un layout específico con
              navbar y footer. Este es un caso donde se usa mucho este tipo de
              rutas, ya que queremos que la navbar salga cuándo el usuario ya
              esté loggeado. No cuándo esté en el login.
            </p>

            <img src="/img/anidada.png" />

            <p>
              . En el componente MainLayout, colocamos el layout, y lo que
              vengan en las demás rutas lo representaremos con un componente "
              Outlet " que nos proporciona React Router. Por ejemplo, si la ruta
              en la que se encuentra el usuario es “/”, outlet será "
              DefaultComponent " si la ruta es /about/team, el componente que se
              mostrará será " Team " .
            </p>

            <img src="/img/oulet.png" />

            <div className="flex items-center gap-5">
          <i
            onClick={() => setTwo2(!Two2)}
            className={`${
              !Two2
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Utilizando “Routes” dentro de otro componente </h3>
        </div>

        {
            Two2 && <>
            <p>Podemos volver a ejecutar el componente Routes dentro de otro componente. En este caso, a la ruta padre habría que colocarle un asterisco * al final.</p>

            <h3>ejemplo</h3>

            <p>Componente con el Router</p>

            <img src="/img/conporo.png"  />
            
            <p>Componente Dashboard</p>

            <div className="flex">
            <img src="/img/das.png" />
            <img src="/img/das22.png" />
            </div>
            </>
        }



          </>
        )}
      </article>
    </section>
  );
}
export default AnidadasRutas;
