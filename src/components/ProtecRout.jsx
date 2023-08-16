import { useSelector } from "react-redux";
import { Navigate, Outlet} from "react-router-dom";

function ProtecRout() {
  const users = useSelector(state => state.user);


  if (users !== "") {
  return   <Outlet />
  } else {
   return <Navigate to={"/login"}/>
  }
}
export default ProtecRout;
