// 声明一个全局的Window接口扩展，用于识别__REDUX_DEVTOOLS_EXTENSION__属性
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: Function;
  }
}
