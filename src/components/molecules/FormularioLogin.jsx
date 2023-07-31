import { useDispatch, useSelector } from "react-redux"
import { setUser } from '../../store/slices/user.slice'
import { useNavigate } from "react-router-dom";

function FormularioLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

const user  = useSelector(state => state.user)

const captu = e => {
  e.preventDefault();
  dispatch(setUser(e.target.email.value))
  navigate("/conpos");
  console.log(user)
}


  return (
    <form onSubmit={captu} className="w-[80%] min-h-[70%] sm:w-[400px] sm:h-[400px] bg-[rgba(250,249,249,0.2)] border-[#000000] border-[3px] rounded-2xl flex flex-col items-center shadow-[3px_1px_5px_1px]">
        <picture className="w-[80%]   grid place-items-center  h-[100px] ">
            <img src="/log/logo1.png"   />
        </picture>

        <div className=" flex flex-col mt-5 sm:mt-0 items-center gap-10 py-5 sm:py-10">

        
            <input  id="email" className="border-[3px] border-[#292929] sm:px-[30px] py-1 text-center rounded-xl outline-[#E51F27] font-medium " type="text" placeholder="admin" />
       

        
            <input className="border-[3px] border-[#3f3f3f] sm:px-[30px] outline-[#E51F27] font-medium py-1 text-center rounded-xl" type="password" placeholder="******" />
        

        </div>

        <button type="submit" className="m-auto py-1 rounded-lg text-[black] font-extrabold border-[#000000] border-[3px] w-[150px] hover:border-[#ff0909] hover:text-[#ff0909] hover:bg-[white]  duration-300 ease-in-out">Ingresar</button>
        
    </form>
  )
}
export default FormularioLogin