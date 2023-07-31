import { useState } from "react"

function AccesoStore() {

    const [Insta, setInsta] = useState(false)

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
        <h3>Accediendo a la store en nuestros componentes </h3>
      </div>
      {Insta && (
        <>
          <p>Hasta el momento ya tenemos nuestro estado funcionando, pero no lo estamos utilizando en los componentes y en la vista. Para esto, vamos al componente donde vayamos a usar al estado, e importamos “useSelector” de react-redux.</p>

          <img src="/img/selector.png" />

          <p>. Luego, ejecutamos useSelector. Le pasaremos un callback, donde el parámetro será la store, y buscaremos la propiedad que necesitemos, accediendo a la store como un objeto común. Para esto nos puede ser útil la Redux Devtools Extension. El valor retornado por useSelector lo podemos guardar en una variable, cuyo nombre debe tener relación con el valor al que estamos accediendo</p>

          <img src="/img/selector1.png" />
        </>
      )}
    </article>
  </section>

  )
}
export default AccesoStore