import { Link } from "react-router-dom";

function Home(){
  return(
    <div>
      Home
      <Link to="/about">关于我们</Link>
    </div>
  )
}

export default Home;