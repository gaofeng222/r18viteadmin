// import { push } from "react-router-redux";
import type { UseInfoType } from "@/types/userType";
import { randomNumber } from "@/utils/common";

function parseData(data: string) {
  return JSON.parse(data);
}

const initState = {
  isLogin: !!Number(localStorage.getItem("isLogin")), // 0表示未登录，1表示已登录
  userInfo: parseData(localStorage.getItem("userInfo") || "{}"),
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
  localStorage.setItem("userInfo", JSON.stringify(data));
  localStorage.setItem("isLogin", "1");
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

export const logOutFormDispatch = () => {
  return (dispatchEvent: any) => {
    //模拟异步请求
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.removeItem("isLogin");
        localStorage.removeItem("userInfo");
        dispatchEvent({ type: "LOGOUT" });
        resolve(true);
      }, 2000);
    });
  };
};

export default LoginReducer;
