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
      console.log("aaaaaaa", action.type);
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

export default LoginReducer;
