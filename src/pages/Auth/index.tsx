import {ReactElement} from "react"
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
interface Props {
  children: ReactElement;
}
function WithAuth({children}:Props){
  const {isLogin} = useSelector((state:any) => state.loginReducer);
  return <> {!isLogin ? <Navigate to="/login" replace /> : children} </>
   
}

export default WithAuth