import { Button, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import './index.scss'
import ThinkChildComps from "./ChildComps";
import {incrementAsync, decrementAsync} from "@/store//reducers/countReducer";

type AppDispatch = /*unresolved*/ any;

function ReduxThunk() {
  const {counter:count} = useSelector((state:any) => state.countReducer);
  const dispatch = useDispatch<AppDispatch>();
  const handleClickAdd = () => {
     dispatch({type: 'INCREMENT'})
  }
  const handleClickMinus = () => {
     // 调用dispatch方法，传入一个action对象
     dispatch({type: 'DECREMENT'})
  }


  const handleClickAsyncAdd = () => {
     dispatch(incrementAsync())
  }

  const handleClickAsyncMinus = () => {
     dispatch(decrementAsync())
  }

  return <div className="demo-thunk-box">
    {/* 显示两个antd按钮，一个加法一个减法 */}
     {/* 显示当前值 */}
     <h3>{count}</h3>
    <div>
      <Space>
        <Button onClick={handleClickAdd}>同步+</Button>
        <Button onClick={handleClickMinus}>同步-</Button>
      </Space>
      <Space>
        <Button onClick={handleClickAsyncAdd}>异步3s+</Button>
        <Button onClick={handleClickAsyncMinus}>异步3s-</Button>
      </Space>
    </div>
    <ThinkChildComps />
  </div>;
}

export default ReduxThunk