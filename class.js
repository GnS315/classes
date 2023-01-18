/*
* Блок про ООП
* ООП - объектно ориентированное программирование - методология программированияЮ основанная на представлении программ
* в виде совокупности взаимодействующих объектов каждый из которых является экземпляром определенного класса, а классы
* образуют иерархию наследования.
* Принципы ООП: инкапсуляция, наследование, полиморфизм, абстракция
* - Инкапсуляция говорит о том, что данные объекта не должны быть напрямую доступны, а должны вызываться путем методов для
* доступа к данным. Инкапсулция позволяет нам скрывать/показывать свойства функции
* - Наследование - возможность дочерних классов наследовать свойства и методы от родительского класса
* - Полиморфизм - возможность переопределять методы,
* - Абстракция - демонстрация только основных вещей и сокрытие внутренней реализации
* */
class Human {
    order = 'primates' //Свойство: отряд - приматы
    static humanClass = 'mammals' //Статическое свойство: класс - млекопитающие

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
    calculate() {
        return this.weight/this.height**2
    }
    // Статический метод для расчета индекса массы тела. Он является методом всего класса а не отдельного экземпляра
    static calculateBMI(weight, height) {
        return weight/height**2
    }

}

/*
* Создаем класс Работник, унаследованный от класса Человек
* */
class Employee extends Human {
    constructor(...args) { //Конструктор
        super(...args); // Вызываем super для наследования конструктора родительского класса и передаем аргументы
    }
}

const programmer = new Employee('Олег', 190, 39)
console.log(programmer)