import { useState } from "react";

function CuandoUsar() {
  const [Cuando, setCuando] = useState(false);

  return (
    <section className="w-[90%] m-auto">
      <article>
        <div className="flex items-center gap-5">
          <i
            onClick={() => setCuando(!Cuando)}
            className={`${
              !Cuando
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>¿Cuándo usar componentes? (Pensando en React)</h3>
        </div>
        {Cuando && (
          <>
            <p>
              Los componentes pueden ser cualquier elemento html: una tabla, un
              div, un form, incluso a un input lo podríamos volver componente si
              su lógica se llega a complicar, como cuando debemos hacer la
              funcionalidad para que se vea o no la contraseña al dar clic en el
              ícono del ojo.{" "}
            </p>
            <img src="/img/input.png" />
            <p>
              Para saber si debemos convertir un elemento a un componente
              podríamos considerar estas condiciones:
            </p>
            <li>
              ¿Este elemento es independiente de otros? Por ejemplo, una navbar,
              una sección de recomendados, un menu lateral.
            </li>
            <li>
              ¿Este elemento es repetitivo?, por ejemplos: comentarios, listas
              de usuarios.
            </li>
            <li>
              ¿Tiene una funcionalidad en concreto que se enreda con las otras
              funcionalidades del componente actual?
            </li>

            <h3>
              Si cumple alguna de estas condiciones, probablemente haríamos bien
              al separarlo en un componente aparte. Por ejemplo, la sección
              principal de facebook:
            </h3>
            <img src="/img/face.png" />
            <p>Se puede dividir de esta forma</p>
            <img src="/img/dividir.png" />
            <ul>
              <h3>Ahí se encuentran siete componentes resaltados:</h3>
              <li>Barra de navegación</li>
              <li>Menú lateral</li>
              <li>Creación de posts</li>
              <li>Stories</li>
              <li>Publicación</li>
              <li>Eventos y grupos</li>
              <li>Juegos</li>
              <li>Chat</li>
            </ul>
            <p>
              Y recordemos que un componente puede retornar otro componente. Por
              ejemplo, cada storie puede ser un componente, que es retornado
              dentro del componente de stories, ya que como vemos, cada storie
              particular es un elemento repetitivo.
            </p>
          </>
        )}
      </article>
    </section>
  );
}
export default CuandoUsar;
