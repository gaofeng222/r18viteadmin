//生成1到10的随机数,大于5返回true,否则返回false
export function randomNumber() {
  const isFlag = Math.random() * 10 + 1 >= 5;
  console.log("🚀 ~ randomNumber ~ isFlag:", isFlag);

  return isFlag;
}
