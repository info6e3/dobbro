class KaleidoscopeModel {
    constructor(context, image, count) {
        this.canvasSize = context.canvas.width;
        this.context = context;
        this.image = image;
        this.count = count;
        this.Init();
    }

    Init() {
        this.SetCenter();
        this.circleBorder()
        this.DrawPolygon();
    }

    SetCenter() {
        this.context.translate(this.canvasSize/2, this.canvasSize/2);
    }

    Clear() {
        this.context.canvas.width = this.canvasSize; //Очистка канваса
        this.context.canvas.height = this.canvasSize;
        this.SetCenter();
    }

    circleBorder() {
        this.Clear();
        this.context.arc(0, 0, this.canvasSize/2, 0, Math.PI * 2, true);
        this.context.clip();
    }

    DrawPolygon(x=0, y=0) {
        const angle = 360/this.count; //Угол - 360/количество углов
        for(let i = 0; i < this.count; i++) {
            const turnRadian = (angle*Math.PI/180)*i; //угол вопорота от начального положения = угол*i в радианах

            this.context.scale(-1,1);


            if(i % 2 === 0) {
                this.DrawTriangle(this.context, this.image, this.canvasSize/2, angle, turnRadian, x, y)

            } else {
                this.DrawTriangle(this.context, this.image, this.canvasSize/2, angle, turnRadian, x, y)
            }
        }
    }


    DrawTriangle(context, img, height, angle, turnRadian, x, y) {
        //Сторона A=B*sin(a)/sin(b), где a - угол к центру окружности, c - угол напротив гипотинузы, b - дальний угол, size = A
        this.canvasSide = height * Math.sin(angle/2*Math.PI/180)/Math.sin((90-angle/2)*Math.PI/180);

        this.context.save();
        this.context.rotate(turnRadian);

        this.context.beginPath();
        this.context.moveTo(0,0); //Перемещаем в центр
        this.context.lineTo(-this.canvasSide,-height);
        this.context.lineTo(this.canvasSide,-height);
        this.context.clip();

        this.context.drawImage(img, -x, -y, this.image.width, this.image.height, -height, -height, height*2, height*2);
        this.context.restore();
    }
}

export default KaleidoscopeModel;