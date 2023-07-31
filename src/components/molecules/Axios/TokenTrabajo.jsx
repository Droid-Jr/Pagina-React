import { useState } from "react";

function TokenTrabajo() {
  const [Token, setToken] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setToken(!Token)}
            className={`${
              !Token
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Trabajando con tokens</h3>
        </div>
        {Token && (
          <>
            <p>
              Muchas veces, para poder ejecutar un endpoint, necesitamos estar
              loggeados. Para trabajar con el login se maneja lo que se conoce
              como “tokens”, los cuales permiten proteger los endpoints y le
              proporcionan al backend la información del usuario loggeado. Hay
              varias formas de manejar el token. Una de ellas es cuando el
              backend nos envía el token al ejecutar un endpoint de login. Y
              nosotros como frontend’s lo debemos guardar en algún sitio del
              navegador, por ejemplo, el LocalStorage, para que, aunque el
              usuario cierre nuestra aplicación, al volverla abrir pueda acceder
              de nuevo a su sesión sin necesidad de hacer login de nuevo.
              Existen varios métodos para trabajar con tokens, eso lo elije el
              backend. El más común es uno que se llama **Bearer**, el cuál será
              el que se usará en este curso. Para enviar un token con Bearer,
              tenemos que crear una función, que retornará un objeto con una
              configuración, por lo que se le suele llamar **getConfig**. Este
              objeto, entre otras cosas, modifica lo que se conoce como
              **headers**. En este caso vamos a trabajar con una cabecera en
              concreto llamada **Authorization**, y ahí es donde pondremos el
              token, al cuál se le va a anteponer la palabra **Bearer**.
            </p>

            <img src="/img/token.png" />

            <p>Ahora, para llamar a un endpoint, en el último parámetro ejecutaremos esta función</p>

            <img src="/img/token2.png" />
            <p>Para el resto de endpoints es la misma estructura.</p>
          </>
        )}
      </article>
    </section>
  );
}
export default TokenTrabajo;
