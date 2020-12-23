function sequence(start = 0, step = 1) {
    return function() {
        let sum = 0
        sum += start
        start += step
        return sum
    }
}


function take(fn, count) {
    let results = []
    for(let i = 0; i< count; i++) {
        results.push(fn())
    }
    return results
}


function map(fn, array) {
    let results = []
    for(let i = 0; i < array.length; i++) {
        results.push(fn(array[i]))
    }
    return results
}


function fmap(a, gen) {
    return function(){
        let arrArgs = []
        for(let i = 0; i < arguments.length; i++) {
            arrArgs.push(arguments[i])
        }
        return a(gen.apply(null, arrArgs))
    }
}


function partial() {
    let fn = arguments[0]
    let arrArgs = []
    for(let i = 1; i < arguments.length; i++) {
        arrArgs.push(arguments[i])
    }
    return function(){

        let arrInnerArgs = []
        for(let i = 0; i < arguments.length; i++) {
            arrInnerArgs.push(arguments[i])
        }
        return fn.apply(null, arrArgs.concat(arrInnerArgs))

    }
}


function partialAny() {
    let fn = arguments[0]
    let arrArgs = []
    for(let i = 1; i < arguments.length; i++) {
        arrArgs.push(arguments[i])
    }
    return function(){
        let arrArgsCopy = arrArgs.slice()
        let arrInnerArgs = []
        for(let i = 0; i < arguments.length; i++) {
            arrInnerArgs.push(arguments[i])
        }
        let otherArgs = []
        let k = 0
        for(let i = 0; i < arrArgsCopy.length; i++){
            if(arrArgsCopy[i] === undefined){
                arrArgsCopy[i] = arrInnerArgs[k]
                k++
            }
        }
        while(k < arrInnerArgs.length){
            otherArgs.push(arrInnerArgs[k])
            k++
        }
        return fn.apply(null, arrArgsCopy.concat(otherArgs))

    }
}


function bind(fn, context) {
    let arrArgs = []
    for(let i = 2; i < arguments.length; i++) {
        arrArgs.push(arguments[i])
    }
    return function() {
        let arrInnerArgs = []
        for(let i = 0; i < arguments.length; i++) {
            arrInnerArgs.push(arguments[i])
        }

        return fn.apply(context, arrArgs.concat(arrInnerArgs));
    };
}


function pluck(objects, fieldName) {
    let arr = []
    for(let i = 0; i < objects.length; i++){
        arr.push(objects[i][fieldName])
    }
    return arr
}


function filter (arr, fn) {
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}


function count (obj) {
    return Object.keys(obj).length
}