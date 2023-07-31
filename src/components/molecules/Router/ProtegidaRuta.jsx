import { useState } from "react";

function ProtegidaRuta() {
  const [Insta, setInsta] = useState(false);
  const [Insta2, setInsta2] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setInsta(!Insta)}
            className={`${
              !Insta
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Rutas Protegidas </h3>
        </div>
        {Insta && (
          <>
            <p>
              Muchas veces necesitamos que el usuario tenga ciertos permisos en
              nuestra aplicación para que pueda acceder a alguna ruta en
              concreto. Por ejemplo: no permitirle ir al “dashboard” de nuestra
              aplicación hasta que no pase el login y se guarde un token en el
              localStorage. Para estos casos necesitamos proteger nuestras
              rutas. Vamos a poner un ejemplo, donde traeremos la información
              del usuario a través de Redux, y de ahí validaremos si esta
              loggeado. Lo primero que debemos hacer es crear un componente
              llamado “ProtectedRoutes”, que si cumple una condición, muestra el
              componente “Outlet” (Ver rutas anidadas). De lo contrario, a
              través del componente “Navigate” lo envíamos al loggin.
            </p>

            <img src="/img/rutas.png" />

            <p>
              . Luego, iremos a nuestras rutas, y las rutas que queremos
              proteger las vamos a poner anidadas dentro de una ruta cuyo
              atributo “element” va a tener al componente “ProtectedRoutes” que
              creamos anteriormente.
            </p>

            <img src="/img/rutas1.png" />

            <div className="flex items-center gap-5">
              <i
                onClick={() => setInsta2(!Insta2)}
                className={`${
                  !Insta2
                    ? "fa-solid fa-circle-chevron-right fa-bounce"
                    : "fa-solid fa-circle-chevron-right fa-rotate-90"
                }`}
              ></i>
              <h3>Cómo redireccionar fuera de un componente </h3>
            </div>

            {Insta2 && (
              <>
                <p>
                  useNavigate es muy útil para redireccionar al usuario desde la
                  parte funcional. Sin embargo, tiene una limitación: es un
                  hook. Y al ser un hook, sólamente se puede usar en
                  componentes. Esto puede llegar a ser problemático, ya que a
                  veces queremos redireccionar en otras estructuras, como por
                  ejemplo en un thunk, de redux thunk. Para hacerlo, hay una
                  alternativa: Lo primero que tenemos que hacer es crear un
                  Router personalizado, el cual será un componente con lo
                  siguiente:
                </p>
                <img src="/img/prueba.png" />

                <p>
                  Luego, iremos a nuestras rutas, y las rutas que queremos
                  proteger las vamos a poner anidadas dentro de una ruta cuyo
                  atributo “element” va a tener al componente “ProtectedRoutes”
                  que creamos anteriormente.
                </p>

                <img src="/img/prueba1.png" />

                <p>
                  Finalmente, al armar nuestra estructura de React Router en "
                  App ", ya no vamos a encerrar todo dentro de “HashRouter” o
                  “BrowserRouter”, dichos componentes los vamos a reemplazar por
                  el Router que acabamos de crear, y le pasamos una prop history
                  que tendrá el “history” que también creamos previamente:
                </p>

                <img src="/img/prueba2.png" />
                <p>
                  Ahora cuándo quieras redireccionar, vas a tener que importar
                  el objeto “history” que creaste, y usar su método “/replace”.
                </p>

                <img src="/img/prueba3.png" />
              </>
            )}
          </>
        )}
      </article>
    </section>
  );
}
export default ProtegidaRuta;
