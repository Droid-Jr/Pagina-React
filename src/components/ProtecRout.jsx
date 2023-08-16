
import { Navigate, Outlet} from "react-router-dom";

function ProtecRout() {
  const token = localStorage.getItem("token");


  if (token) {
  return   <Outlet />
  } else {
   return <Navigate to={"/login"}/>
  }
}
export default ProtecRout;
