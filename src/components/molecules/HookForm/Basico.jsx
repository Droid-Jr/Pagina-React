import { useState } from "react"

function Basico() {

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
        <h3>Uso básico </h3>
      </div>
      {Insta && (
        <>
          <p>Instalación: </p>

          <img src="/img/hook2.png" />

          <p>Luego lo ejecutamos. Retorna un objeto. Vamos a desestructurar dos propiedades muy importantes: register y handleSubmit.</p>

          <img src="/img/hook3.png" />

          <p>Ahora vamos a integrarlo en el formulario. En el elemento "FROM" vamos a ejecutar handleSubmit en el atributo onSubmit. Pasándole como parámetros una función que declararemos más adelante, que manejará el submit. Finalmente, en los inputs ejecutamos spread operator de register, pasándole por parámetros un string de como queremos que se llame lo que contenga esos inputs.</p>

          <img src="/img/hook4.png"  />

          <p>Finalmente, vamos a hacer la función “submit”, que será la que se ejecutará al hacer submit. Esta recibirá un parámetro “data” que será un objeto y contendrá toda la información de los inputs que hayamos puesto. Dicha información estará lista para ser enviada en una petición HTTP o para lo que sea que la necesitemos.</p>

          <img src="/img/hook5.png" />

          <p>Por ejemplo, en esta ocasión, donde los inputs los registramos como “email” y “password”, data será un objeto con propiedades “email” y “password”. Y su valor depende de lo que haya escrito el usuario</p>

          <img src="/img/hook6.png" />
        </>
      )}
    </article>
  </section>




  )
}
export default Basico