/*
* Блок про ООП
*
* ООП - объектно ориентированное программирование - методология программирования, основанная на представлении программ
* в виде совокупности взаимодействующих объектов каждый из которых является экземпляром определенного класса, а классы
* образуют иерархию наследования.
* Принципы ООП: инкапсуляция, наследование, полиморфизм, абстракция
* - Инкапсуляция говорит о том, что данные объекта не должны быть напрямую доступны, а должны вызываться путем методов
* для доступа к данным. Инкапсулция позволяет нам скрывать/показывать свойства функции
* - Наследование - возможность дочерних классов наследовать свойства и методы от родительского класса
* - Абстракция - демонстрация только основных вещей и сокрытие внутренней реализации
* - Полиморфизм - возможность вызывать один и тот же метод для разных объектов и при этом каждый объект будет
* реагировать по-своему
* */

/*
* Блок про Классы в JS
*
* В ооп класс - это расширяемый шаблон кода для создания объектов, который устанавливает в них начальные
* значения (свойства) и реализацию поведения (методы).
* Ниже создадим класс Human - человек
* Свойства и методы бывают публичными и приватными. По соглашению перед названиями приватных свойств
* и методов ставится нижнее подчеркивание. Ниже weight сделал приватным, оъявить значение можно только
* при создании экземпляра класса в конструкторе. Извне получать или менять его мы не можем, но в самом 
* классе можем к нему обращаться. Для публичных свойств созданы геттеры и сеттеры, для приватных только
* геттеры.
*
* */

class Human {
    name // Публичный в ts можно было бы отметить модификатором public
    height // Публичный public
    _weight // Приватный в ts можно было бы отметить модификатором private

    order = 'primates' //Свойство: отряд - приматы, свойство экземпляра класса

    static humanClass = 'mammals' //Статическое свойство: класс - млекопитающие, свойство самого класса, а не эклемпляра

    // Конструктор, где объявляем имя, рост, вес
    constructor(name, height, weight) {
        this.name = name
        this.height = height
        this._weight = weight
    }
    // Геттеры - для чтения
    get name() {
        return this.name
    }

    get height() {
        return this.height
    }

    get weight() {
        return this._weight
    }
    //Сеттеры - для записи
    set name(value) {
        this.name = value
    }

    set height(value) {
        this.height = value
    }

    // Метод для расчета ИМТ. Является методом отдельного экземпляра класса.
    calculateBMI() {
        return this._weight/this.height**2
    }
    // Статический метод для расчета ИМТ. Он является методом всего класса, а не отдельного экземпляра
    static calculateBMIStatic(weight, height) {
        return weight/height**2
    }

    run() { // Метод, который выводит в логи сообщение, ниже переопределим метод
        console.log(`Я человек ${this.name}, и я бегу`)
    }

}

/*
* Создаем класс Работник, унаследованный от класса Человек, он примет все свойства и методы родительского класса
* */

class Employee extends Human {
    constructor(name, height, weight, salary) { //Конструктор
        super(name, height, weight) // Вызываем родительский конструктор
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