/* ДЗ 2 - работа с исключениями и отладчиком */

/*
 Задача 1:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isAllTrue(array, fn) {
    try {
        if (array.length <= 0 || !(array instanceof Array)) {
            throw new Error('array is empty');
        }

        if (!(fn instanceof Function)) {
            throw new Error('fn is not a function!');
        }
    } catch (e) {
        return e.name + ': ' + e.message;
    }

    let isAllTrue = 0;
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            isAllTrue++;
        }
    }

    if (array.length !== isAllTrue) {
        return false;
    }

    return true;
}


/*
 Задача 2:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isSomeTrue(array, fn) {
    try {
        if (array.length <= 0 || !(array instanceof Array)) {
            throw new Error('array is empty');
        }

        if (!(fn instanceof Function)) {
            throw new Error('fn is not a function!');
        }
    } catch (e) {
        return e.name + ': ' + e.message;
    }

    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return true;
        }
    }

    return false;
}

/*
 Задача 3:
 Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запусти fn для каждого переданного аргумента (кроме самой fn)
 Функция должна вернуть массив аргументов, для которых fn выбросила исключение
 Необходимо выбрасывать исключение в случаях:
 - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn) {
    try {
        if (!(fn instanceof Function)) {
            throw new Error('fn is not a function!');
        }
    } catch (e) {
        return e.name + ': ' + e.message;
    }

    let arr = [];
    for (let i = 1; i < arguments.length; i++) {
        try {
            fn(arguments[i])
        } catch (e) {
            arr.push(arguments[i]);
        }
    }

    return arr;
}

/*
 Задача 4:
 Функция имеет параметр number (по умолчанию - 0)
 Функция должна вернуть объект, у которого должно быть несколько методов:
 - sum - складывает number с переданными аргументами
 - dif - вычитает из number переданные аргументы
 - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
 - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно
 Необходимо выбрасывать исключение в случаях:
 - number не является числом (с текстом "number is not a number")
 - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator() {
    let num = arguments[0];
    let obj = {
            sum: function () {
                let res = num;
                for (let i = 0; i < arguments.length; i++) {
                    try {
                        if (typeof arguments[i] === 'string') {
                            throw new Error('number is not a number');
                        }
                    } catch (e) {
                        return e.name + ': ' + e.message;
                    }
                    res += arguments[i];
                }
                return res;
            },
            dif: function () {
                let res = num;
                for (let i = 0; i < arguments.length; i++) {
                    try {
                        if (typeof arguments[i] === 'string') {
                            throw new Error('number is not a number');
                        }
                        res -= arguments[i];
                    }catch (e) {
                        return e.name + ': ' + e.message;
                    }
                }
                return res;
            },
            div: function () {
                let res = num;
                for (let i = 0; i < arguments.length; i++) {
                    try {
                        if (arguments[i] === 0) {
                            throw new Error('division by 0');
                        }else if (typeof arguments[i] === 'string') {
                            throw new Error('number is not a number');
                        }
                        res /= arguments[i];
                    }catch (e) {
                        return e.name + ': ' + e.message;
                    }
                }
                return res;
            },
            mul: function () {
                let res = num;
                for (let i = 0; i < arguments.length; i++) {
                    try {
                        if (typeof arguments[i] === 'string') {
                            throw new Error('number is not a number');
                        }
                        res *= arguments[i];
                    }catch (e) {
                        return e.name + ': ' + e.message;
                    }
                }
                return res;
            }
    };
    return obj;
}


export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};
