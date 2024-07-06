// import { push } from "react-router-redux";
import type { UseInfoType } from "@/types/userType";
const initState = {
  isLogin: false,
  userInfo: {
    username: "张三",
    age: 60,
  },
};

function LoginReducer(
  state = initState,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
        userInfo: { ...state.userInfo, ...action.payload },
      };
    case "LOGOUT":
      return { ...state, isLogin: false };
    default:
  }
  return state;
}

const setLogin = (data: UseInfoType) => {
  return { type: "LOGIN", payload: data };
};

// 定义 DispatchEvent 类型

export const loginFormDisaptch = (data: UseInfoType) => {
  return (dispatchEvent: any) => {
    //模拟异步请求
    return new Promise((resolve) => {
      setTimeout(() => {
        if (data.username === "admin" && data.password === "123456") {
          dispatchEvent(setLogin(data));
          resolve(true);
        } else {
          resolve(false);
        }
      }, 200);
    });
  };
};

export default LoginReducer;
