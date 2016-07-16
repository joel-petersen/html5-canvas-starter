import {Random} from "./random";

class App {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    rnd: Random;
    constructor() {
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.sizeCanvas();
      this.rnd = new Random();
      document.body.appendChild(this.canvas);
      window.requestAnimationFrame(t=>this.draw(t));
    }
    sizeCanvas():void {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    draw(t:number):void {
        window.requestAnimationFrame(t=>this.draw(t));
        this.ctx.save();
        this.ctx.fillStyle = `hsla(0,0%,100%,${Math.random()})`;
        for (let i = 0; i < 50; i++) {
            this.ctx.fillRect(Math.random()*this.canvas.width, Math.random()*this.canvas.height, Math.random()*30, Math.random()*30);
            this.ctx.clearRect(Math.random()*this.canvas.width, Math.random()*this.canvas.height, Math.random()*10, Math.random()*10);
        }
        this.ctx.restore();
    }
}

const app = new App();
console.log('HI!!!')
console.log(app);
