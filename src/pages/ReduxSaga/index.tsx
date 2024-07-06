import { Button, Space } from "antd";
import { count } from "console";
import ThinkChildComps from "../ReduxThunk/ChildComps";
import { useDispatch, useSelector } from "react-redux";
import './index.scss'


function ReduxSaga() {
  const {counter:count,welcome} = useSelector((state:any) => state.countReducer)
  const dispatch = useDispatch()
  const handleClickAdd = () => {
    dispatch({type: 'INCREMENT'})
 }
 const handleClickMinus = () => {
    // 调用dispatch方法，传入一个action对象
    dispatch({type: 'DECREMENT'})
 }


 const handleClickAsyncAdd = () => {
    dispatch({type:"SAGA_INCREMENT",payload: {count:300}})
 }

 const handleClickAsyncMinus = () => {
  dispatch({type:"SAGA_DECREMENT",payload: {count:100}})
 }

 const handleChangeWelcome = () => {
  dispatch({type:"TODO_CREATED",payload: {welcome:'Welcome to Redux Saga!'}})
 }
  return <div className="redux-saga-box">{/* 显示两个antd按钮，一个加法一个减法 */}
  {/* 显示当前值 */}
  <h3>{count}</h3>
  <p>{welcome}</p>
 <div>
   <Space>
     <Button onClick={handleClickAdd}>同步+</Button>
     <Button onClick={handleClickMinus}>同步-</Button>
   </Space>
   <Space>
     <Button onClick={handleClickAsyncAdd}>异步3s+</Button>
     <Button onClick={handleClickAsyncMinus}>异步3s-</Button>
   </Space>
   <div>
     <Button onClick={handleChangeWelcome}>change words</Button>
   </div>
 </div>
 <ThinkChildComps /></div>;
}

export default ReduxSaga