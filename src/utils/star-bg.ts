function startBg(element: string) {
  // 获取画布元素和2D上下文
  const canvas = <HTMLCanvasElement>document.getElementById(element);
  const ctx = canvas.getContext("2d");
  // 设置画布宽度和高度
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight - 50);

  let hue = 217; // 设定颜色
  let stars = <Star[]>[]; // 存储星星的数组
  let count = 0;
  let maxStars = 1500; // 星星数量

  // 创建用于渲染星星的小画布
  const canvas2 = <HTMLCanvasElement>document.createElement("canvas");
  let w2 = (canvas2.width = 100);
  let h2 = (canvas2.height = 100);
  let ctx2 = canvas2.getContext("2d");
  let gradientCache = ctx2!.createRadialGradient(
    w2 / 2,
    h2 / 2,
    0,
    w2 / 2,
    h2 / 2,
    w2 / 2
  );
  gradientCache.addColorStop(0.025, "#fff");
  gradientCache.addColorStop(0.1, "hsl(" + hue + ", 61%, 33%)");
  gradientCache.addColorStop(0.25, "hsl(" + hue + ", 64%, 6%)");
  gradientCache.addColorStop(1, "transparent");
  ctx2!.fillStyle = gradientCache;
  ctx2!.beginPath();
  ctx2!.arc(w2 / 2, h2 / 2, w2 / 2, 0, Math.PI * 2);
  ctx2!.fill();

  // 生成随机数
  function random(min: number): number;
  function random(min: number, max?: number): number;
  function random(min: number, max?: number) {
    if (arguments.length < 2) {
      max = min;
      min = 0;
    }
    if (typeof min == "number" && typeof max == "number") {
      if (min > max) {
        var hold = max;
        max = min;
        min = hold;
      }
    } else {
      throw new Error("参数类型错误");
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // 确定星星轨道半径
  function maxOrbit(x: number, y: number) {
    const max = Math.max(x, y),
      diameter = Math.round(Math.sqrt(max * max + max * max)) + 200;
    return diameter / 2;
  }

  // 创建星星对象
  class Star {
    orbitRadius: number;
    radius: number;
    orbitX: number;
    timePassed: any;
    speed: number;
    alpha: number;
    constructor() {
      this.orbitRadius = random(maxOrbit(w, h));
      this.radius = random(60, this.orbitRadius) / 10;
      this.orbitX = w / 8;
      this.orbitX = h / 2;
      this.timePassed = random(2, maxStars);
      this.speed = random(this.orbitRadius) / 30200000;
      this.alpha = random(2, 10) / 10;
      count++;
      stars[count] = this;
    }

    // 在画布上绘制星星
    draw() {
      const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX;
      const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitX;
      const twinkle = random(10);

      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
      }

      ctx!.globalAlpha = this.alpha;
      ctx!.drawImage(
        canvas2,
        x - this.radius / 2,
        y - this.radius / 2,
        this.radius,
        this.radius
      );
      this.timePassed += this.speed;
    }
  }

  // 创建一定数量的星星对象
  for (var i = 0; i < maxStars; i++) {
    new Star();
  }

  // 开始绘制星空背景
  function start() {
    ctx!.globalCompositeOperation = "source-over";
    ctx!.globalAlpha = 1;
    ctx!.fillStyle = "hsla(" + hue + ", 64%,6%,0.2)";
    ctx!.fillRect(0, 0, w, h);

    ctx!.globalCompositeOperation = "lighter";
    for (var i = 1, l = stars.length; i < l; i++) {
      stars[i].draw();
    }
    window.requestAnimationFrame(start);
  }

  start();
}

export default startBg;
