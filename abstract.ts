/*
* Абстрактные классы - похожи на обычные классы, за исключением того, что мы не можем создавать нарямую объект
* абстрактного класса, исппользуя его конструктор. Как правило обстрактные классы описывают сущности, которые не
* не имеют конкретного воплощения. Метод getArea() не выполняет никакой полезной работы, т.к. у абстрактной
* фигуры не может быть пплощади, и поэтому мы определяем метод как абстрактный. Так же абстрактный класс может
* иметь абстрактные поля с модификатором abstract. В данном случае класс Figure оределяет два абстрактных поля
* x и y, которые представляют из себя начальную точку фигуры. Класс Rectangle предоставляет для них реализацию
* с помощью определения полей через параметры конструктора
**/

abstract class Figure {
    abstract x: number;
    abstract y: number;
    abstract getArea(): void;
}

class Rectangle extends Figure{
    //x: number;
    //y: number;

    constructor(public x: number, public y: number, public width: number, public height: number){
        super();
    }

    getArea(): void{
        let square = this.width * this.height;
        console.log("area =", square);
    }
   //Перегрузка
    getLength(arg: string): void;
    getLength(arg: any[]): void;
    getLength(arg: any): void {
        console.log(arg.length)
    }

}

const figure = new Rectangle(1, 2, 3, 4)
figure.getLength('sdfsdfhbjhbjbj') //14
figure.getLength([1,2,3,4,5,6]) //6