import { useState } from "react"

function Metodos() {

    const [Getme, setGetme] = useState(false)
    const [Getme2, setGetme2] = useState(false)
    const [Getme3, setGetme3] = useState(false)
    const [Getme4, setGetme4] = useState(false)
    const [Getme5, setGetme5] = useState(false)
    const [Getme6, setGetme6] = useState(false)

  return (

    <section className="w-[90%] m-auto">
    <article>
      <div className="flex items-center gap-5">
        <i
          onClick={() => setGetme(!Getme)}
          className={`${
            !Getme
              ? "fa-solid fa-circle-chevron-right fa-bounce"
              : "fa-solid fa-circle-chevron-right fa-rotate-90"
          }`}
        ></i>
        <h3>Instalación e importación </h3>
      </div>
      {Getme && (
        <>
            <div className="flex items-center gap-5">
        <i
          onClick={() => setGetme2(!Getme2)}
          className={`${
            !Getme2
              ? "fa-solid fa-circle-chevron-right fa-bounce"
              : "fa-solid fa-circle-chevron-right fa-rotate-90"
          }`}
        ></i>
        <h3>Metodo Get </h3>
        {
            Getme2 && <>
            <img src="/img/get.png"/>
            </>
        }
      </div>

      <div className="flex items-center gap-5">
        <i
          onClick={() => setGetme3(!Getme3)}
          className={`${
            !Getme3
              ? "fa-solid fa-circle-chevron-right fa-bounce"
              : "fa-solid fa-circle-chevron-right fa-rotate-90"
          }`}
        ></i>
        <h3>Metodo Post </h3>
        {
            Getme3 && <>
            <p>data será el objeto que enviaremos con la petición</p>
            <img src="/img/post.png" />
            </>
        }
      </div>
      <div className="flex items-center gap-5">
        <i
          onClick={() => setGetme4(!Getme4)}
          className={`${
            !Getme4
              ? "fa-solid fa-circle-chevron-right fa-bounce"
              : "fa-solid fa-circle-chevron-right fa-rotate-90"
          }`}
        ></i>
        <h3>Metodo Delete </h3>
        {
            Getme4 && <>
            <img src="/img/delete.png"  />
            </>
        }
      </div>

      <div className="flex items-center gap-5">
        <i
          onClick={() => setGetme5(!Getme5)}
          className={`${
            !Getme5
              ? "fa-solid fa-circle-chevron-right fa-bounce"
              : "fa-solid fa-circle-chevron-right fa-rotate-90"
          }`}
        ></i>
        <h3>Metodo Put </h3>
        {
            Getme5 && <>
            <p>data será el objeto que enviaremos con la petición</p>
            <img src="/img/put.png"  />
            
            </>
        }
      </div>

      <div className="flex items-center gap-5">
        <i
          onClick={() => setGetme6(!Getme6)}
          className={`${
            !Getme6
              ? "fa-solid fa-circle-chevron-right fa-bounce"
              : "fa-solid fa-circle-chevron-right fa-rotate-90"
          }`}
        ></i>
        <h3>Metodo Patch </h3>
      </div>
      {
        Getme6 && <>
        <p>data será el objeto que enviaremos con la petición</p>
        <img src="/img/patch.png"  />
        </>
      }
        </>
      )}
    </article>
  </section>


  )
}
export default Metodos