import { useState } from "react"
import { Link } from "react-router-dom"

function RutaSlice() {

    const [Insta, setInsta] = useState(false)
    const [Insta2, setInsta2] = useState(false)
    const [Insta3, setInsta3] = useState(false)
    const [Insta4, setInsta4] = useState(false)


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
        <h3>Slices (Creando la store) </h3>
      </div>
      {Insta && (
        <>
          <p>Los slices van a ser cada uno de los estados que estaremos manipulando. Por ejemplo, si queremos un estado global de un contador, vamos a crear un slice (counterSlice). Si vamos a crear unas to do’s, vamos a crear un slice (toDosSlice). Si vamos a manejar una lista de usuarios, creamos un slice para esta (usersSlice).

Para crear nuestras primeras slices, vamos a crear una carpeta dentro de “store”, que se llamará “slices”. Y allí crearemos un archivo javascript por cada slice que creemos. 

El nombre del archivo va a terminar en `.slice.js`. En este caso, vamos a hacer un ejemplo con un contador, por lo que el archivo se llamara `counter.slice.js`.:</p>

          <img src="/img/slice.png" />

          <p>La estructura básica de un slice es la siguiente:</p>

          <img src="/img/slice1.png" />


          <p>El objeto del slice contendrá tres propiedades:</p>


          <div className="flex items-center gap-5">
        <i
          onClick={() => setInsta2(!Insta2)}
          className={`${
            !Insta2
              ? "fa-solid fa-circle-chevron-right fa-bounce"
              : "fa-solid fa-circle-chevron-right fa-rotate-90"
          }`}
        ></i>
        <h3>name </h3>
      </div>
      {
        Insta2 && <>
        <p>Es donde le pondremos el nombre del slice en un string. Por ejemplo: ‘counter’, ‘users’, ‘toDos’</p>
        <img src="/img/name.png" />
        
        </>
      }

<div className="flex items-center gap-5">
        <i
          onClick={() => setInsta3(!Insta3)}
          className={`${
            !Insta3
              ? "fa-solid fa-circle-chevron-right fa-bounce"
              : "fa-solid fa-circle-chevron-right fa-rotate-90"
          }`}
        ></i>
        <h3>initialState </h3>
      </div>
      {
        Insta3 && <>
        <p>Como lo dice su nombre, es el valor inicial del estado. Puede ser cualquier tipo de dato (número, string, booleano, objeto, arreglo…). 

En este caso, el contador es un número, así que lo vamos a empezar en 0.</p>

        <img src="/img/initial.png" />
        </>
      }


<div className="flex items-center gap-5">
        <i
          onClick={() => setInsta4(!Insta4)}
          className={`${
            !Insta4
              ? "fa-solid fa-circle-chevron-right fa-bounce"
              : "fa-solid fa-circle-chevron-right fa-rotate-90"
          }`}
        ></i>
        <h3>reducers </h3>
      </div>
      {
        Insta4 && <>
        <p>Es un objeto donde colocaremos los actions, es decir, las funciones que nos permitiran modificar el estado. Este apartado lo veremos a detalle más adelante, en la sección llamada “actions”.

Ya con esto, sólo nos quedaría declarar nuestro slice en la store. Para esto, vamos al index que creamos en el paso anterior, importamos el slice, y lo colocamos en el objeto reducers.</p>
        <img src="/img/reducer.png" />
        </>
      }


      <p>Ya con esto, sólo nos quedaría declarar nuestro slice en la store. Para esto, vamos al index que creamos en el paso anterior, importamos el slice, y lo colocamos en el objeto reducers.</p>

      <img src="/img/tolki.png"  />





          <p>Finalmente, si queremos ver nuestra store, podemos descargarnos esta extensión
            <Link to={"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd"} target="_blank" className="text-[blue] font-extrabold">https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd</Link>

Ahora, si inspeccionamos se añadirá una pestaña al final, que dirá “redux”. Allí podremos ver la **store** de nuestra aplicación, las acciones que se ejecutan, entre otra información útil..</p>
          <img src="/img/slice22.png" />
        </>
      )}
    </article>
  </section>

  )
}
export default RutaSlice