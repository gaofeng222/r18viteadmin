const initState = {
  counter: 0,
};

function CounterReducer(state = initState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "SAGA_COUNT_INCREMENT":
      return { ...state, counter: state.counter + action.payload.count };
    case "SAGA_COUNT_DECREMENT":
      return { ...state, counter: state.counter - action.payload.count };
    default:
      return state;
  }
}
const setCount = (type) => {
  return { type };
};
//异步加法

export const incrementAsync = (delay = 3000) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(setCount("INCREMENT"));
    }, delay);
  };
};

//异步减法
export const decrementAsync = (delay = 3000) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(setCount("DECREMENT"));
    }, delay);
  };
};

export default CounterReducer;
