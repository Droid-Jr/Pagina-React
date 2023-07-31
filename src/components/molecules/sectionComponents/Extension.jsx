import { useState } from "react"
import { Link } from "react-router-dom"

function Extension() {

    const [Extension, setExtension] = useState(false)



  return (

    <section className="w-[90%] m-auto">

        <article>

        <div className="flex items-center gap-5">
          <i
            onClick={() => setExtension(!Extension)}
            className={`${
              !Extension
                ? "fa-solid fa-circle-chevron-right fa-bounce"
                : "fa-solid fa-circle-chevron-right fa-rotate-90"
            }`}
          ></i>
          <h3>Extensión de chrome para React</h3>
        </div>
        {
            Extension && <div className="py-3">
            
            <p>Existe una extensión de chrome que nos permitirá inspeccionar nuestros componentes React, ver las props, entre otra información.</p>

            <Link className="text-[red] px-10 text-[30px]"  target="_blank" to={"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?authuser=1&gclid=CjwKCAiA-9uNBhBTEiwAN3IlNCEbLCIfSZtOfiT4z9yvHiJ4yqeQTYm-YwlMea6oE_bEw7d6pyS0FRoCWxIQAvD_BwE"}>Click aqui</Link>
            
            </div>
        }

        </article>

    </section>

  )
}
export default Extension