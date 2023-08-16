import datos from '../data/fondo.json'

function Home() {

console.log(datos[0])

  return (
    <>
    <div className="w-[100%] ">

     <div className="w-[100%] h-screen bg-[url('/fondo/react2.jpg')] bg-center bg-cover">
      <h1>hola pe causa</h1>
     </div>
    </div>
    </>
  )
}
export default Home