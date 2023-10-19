class Kaleidoscope {
    // Объект контекста, изображение, размер(длина стороны квадрата канваса - отображаемая за раз площадь картинки), количество углов
    constructor(context, image, size, count) {
        this.size = size;
        this.context = context;
        this.image = image;
        // Количество углов
        this.count = count;
        this.angle = 360 / this.count * Math.PI / 180;
        //Высота одного треугольника
        this.rectHeight = this.size / 2
        // Длина грани
        this.edge = this.rectHeight * Math.tan(this.angle / 2) * 2

        this.Init();
    }

    Init() {
        // Установка внутреннего размера канваса по размеру size
        this.context.canvas.width = this.size;
        this.context.canvas.height = this.size;
        // Установка нулевых координат в центр
        this.context.translate(this.size / 2, this.size / 2);
        // Установка нормального направления освей (слева сверху - направо - вниз)
        this.CircleBorder()
        this.DrawPolygon();
    }

    // Обрезка краев по кругу
    CircleBorder() {
        this.context.arc(0, 0, this.size / 2, 0, Math.PI * 2, true);
        this.context.clip();
    }

    // Нарисовать изображение x и y - должны быть от 0.0 до 1, где 0 - начальная часть изображения, 1 - конец.
    // Отоброжаемый x в любом случае равен грани многоугольника, y - size/2
    DrawPolygon(x = 0.5, y = 0.5) {
        for (let i = 0; i < this.count; i++) {
            const turnRadian = this.angle * i; //угол вопорота от начального положения = угол*i в радианах
            this.DrawTriangle(turnRadian, x, y)
            // Отражаем каждый следующий по оси y
            this.context.scale(-1, 1)
        }
    }

    DrawTriangle(turnRadian, x, y) {
        // Вычисление пиксельных значений области
        const pxX = x * (this.image.width - this.edge)
        const pxY = y * (this.image.height - this.size / 2)

        this.context.save();
        // Поворот
        this.context.rotate(turnRadian);
        this.context.beginPath();
        // Рисование треугольника
        this.context.moveTo(0, 0); //Перемещаем в центр
        this.context.lineTo(-this.edge / 2, -this.rectHeight);
        this.context.lineTo(this.edge / 2, -this.rectHeight);
        this.context.clip();
        this.context.drawImage(this.image, -this.edge/2 - pxX, -this.size/2 - pxY, this.image.width, this.image.height)
        this.context.restore();
    }
}

export default Kaleidoscope;