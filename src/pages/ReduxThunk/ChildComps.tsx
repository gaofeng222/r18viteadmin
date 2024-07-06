import { useSelector } from "react-redux";

function ThinkChildComps(){
  const {counter:count} = useSelector((state:any)=>state.countReducer)
  return(
    <div>
      <h1>Child Component</h1>
      <h2>Count: {count}</h2>
    </div>
  )
}

export default ThinkChildComps;