import { useEffect } from "react";
import star from  '@/utils/star-bg'
import style from './login.module.scss'

function Login(){
  useEffect(() => {
    console.log('login')
    document.title = "Login";
    star('star')
  });
  return (
    <div className={style['login-page']}>
      <canvas id="star" className={style.star}>测试文字</canvas>
    </div>
  )
}

export default Login;