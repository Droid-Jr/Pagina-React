import { useDispatch } from "react-redux"
import { setUser } from '../../store/slices/user.slice'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function FormularioLogin() {
  const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register , handleSubmit} = useForm()
    


const login =  (body) =>  {
  axios.post(`https://ecommerce-api-b6k5.onrender.com/login`,body)
  .then(res => {  dispatch( setUser(res.data.user) )
    localStorage.setItem("token", res.data.token)
      navigate("/")
  })
  .catch(err => {
    if (err) {
      alert("Credenciales incorrectas")
    }
    console.log(err)
  })
};


  return (
    <form onSubmit={handleSubmit(login)} className="w-[80%] min-h-[80%] sm:w-[400px] sm:h-[400px] bg-[rgba(0,0,0,0.4)] border-[#ffffff] border-[3px] rounded-2xl flex flex-col items-center shadow-[0px_0px_20px_#1A6DAF]">
        <picture className="w-[80%]   grid  h-[80px] ">
            <img className="drop-shadow-[1px_1px_5px_#25ABBE]" src="/log/logo2.png"   />
        </picture>

        <div className=" flex flex-col mt-10 sm:mt-0 items-center gap-10 py-5 sm:py-[100px]">

        
            <input  type="email" name="email" id="email" {...register("email")} className="border-[3px] border-[#25ABBE] sm:px-[30px] py-1 text-center rounded-xl outline-[#8ddee9] font-medium " placeholder="admin@gmail.com" />
       

        
            <input type="password" name="password" id="password" {...register("password")} className="border-[3px] border-[#25ABBE] sm:px-[30px] outline-[#86ecfa] font-medium py-1 text-center rounded-xl"  placeholder="******" />
        

        </div>

        <button type="submit" className="drop-shadow-[0px_0px_4px_#0160ad] m-auto py-1 rounded-lg text-[#ffffff] font-extrabold border-[white] border-[3px] w-[150px] hover:border-[#0e92ff] hover:text-[white] hover:bg-[#0e92ff]  duration-300 ease-in-out">Ingresar</button>
        
    </form>
  )
}
export default FormularioLogin