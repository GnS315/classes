/*
Создадим класс Human - человек, в конструкторе объявим два его



*/

class Human {
    constructor(name, height) {
        this.name = name
        this.height = height
    }

    get name() {
        return this._name
    }

    get height() {
        return this._height
    }

    set name(value) {
        this._name = value
    }

    set height(value) {
        this._height = value
    }
}