import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function NavBard() {
  
    const navigate = useNavigate();

    const [Ruta, setRuta] = useState('');

    const handleRuta = e => {
      const ruta = e.target.value;
      setRuta(ruta);
      ruta !== '' && navigate(`${ruta}`)
    };

  return (
    <div className=" flex  items-center justify-around w-[100%] h-[100px] bg-[rgb(0,0,0,.9)] gap-14">
        <Link to={"/"}>
        <img className="w-[200px]  drop-shadow-[2px_2px_2px_#25ABBE]" src="/log/logo2.png"  /></Link>

        <select className='outline-[#25ABBE] font-semibold py-1 px-2 rounded-md ' value={Ruta} onChange={handleRuta} >
        <option value="">Selecciona una ruta</option>
            <option value="/conpos">Componentes</option>
            <option value="/usetate">UseState</option>
            <option value="/domvirtual">Dom Virtual</option>
            <option value="/siclo">Ciclo de Vida</option>
            <option value="/efect">UseEffect</option>
            <option value="/axios">Axios</option>
            <option value="/render">Render Condicional</option>
            <option value="/key">Listas Keys</option>
            <option value="/inputs">Inputs Controlados</option>
            <option value="/hookForm">Hook Form</option>
            <option value="/router">Roudeter Dom</option>
            <option value="/redux">Redux</option>
            <option value="/snipes"> Presonalisados</option>
        </select>
        
    </div>
  )
}
export default NavBard