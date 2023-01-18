/*
* Блок про ООП
*
* ООП - объектно ориентированное программирование - методология программирования, основанная на представлении программ
* в виде совокупности взаимодействующих объектов каждый из которых является экземпляром определенного класса, а классы
* образуют иерархию наследования.
* Принципы ООП: инкапсуляция, наследование, полиморфизм, абстракция
* - Инкапсуляция говорит о том, что данные объекта не должны быть напрямую доступны, а должны вызываться путем методов для
* доступа к данным. Инкапсулция позволяет нам скрывать/показывать свойства функции
* - Наследование - возможность дочерних классов наследовать свойства и методы от родительского класса
* - Полиморфизм - возможность вызывать один и тот же метод для разных объектов и при этом каждый объект будет
* реагировать по-своему
* - Абстракция - демонстрация только основных вещей и сокрытие внутренней реализации
* */

/*
* Блок про Классы в JS
*
* В ооп класс - это расширяемый шаблон кода для создания объектов, который устанавливает в них начальные
* значения (свойства) и реализацию поведения (методы).
*
* */

class Human {
    order = 'primates' //Свойство: отряд - приматы, свойство экземпляра класса
    static humanClass = 'mammals' //Статическое свойство: класс - млекопитающие, свойство самого класса, а не эклемпляра

    // Конструктор, где объявляем имя, рост, вес
    constructor(name, height,weight) {
        this.name = name
        this.height = height
        this.weight = weight
    }
    // Геттеры - для чтения
    get name() {
        return this._name
    }

    get height() {
        return this._height
    }

    get weight() {
        return this._weight
    }
    //Сеттеры - для записи
    set name(value) {
        this._name = value
    }

    set height(value) {
        this._height = value
    }

    set weight(value) {
        this._weight = value
    }
    // Метод для расчета ИМТ. Является методом отдельного экземпляра класса.
    calculateBMI() {
        return this.weight/this.height**2
    }
    // Статический метод для расчета индекса массы тела. Он является методом всего класса а не отдельного экземпляра
    static calculateBMIStatic(weight, height) {
        return weight/height**2
    }

    run() { // Метод, который выводит в логи сообщение, ниже переопределим метод
        console.log(`Я человек ${this.name}, и я бегу`)
    }

}

/*
* Создаем класс Работник, унаследованный от класса Человек
* */

class Employee extends Human {
    constructor(name, height, weight, salary) { //Конструктор
        super(name, height,weight) // Вызываем родительский конструктор
        this.salary = salary
    }

    run() { // Переопределяем метод
        console.log(`Я работник ${this.name}, и я бегу`)
    }
}

const human = new Human('Ivan', 155, 99)
const employee = new Employee('Vasili', 190, 55, 50000)

//Из-за того, что мы переопределили метод, он работает по-разному в зависимости от экземпляра класса.
console.log(human.run()) // Я человек Ivan, и я бегу
console.log(employee.run()) // Я работник Vasili, и я бегу