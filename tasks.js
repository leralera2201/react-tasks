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
        let arrArgs = [].slice.call(arguments, 0)
        return a(gen.apply(null, arrArgs))
    }
}


function partial() {
    let fn = arguments[0]
    let arrArgs = [].slice.call(arguments, 1)
    return function(){
        let arrInnerArgs = [].slice.call(arguments, 0)
        return fn.apply(null, arrArgs.concat(arrInnerArgs))

    }
}


function partialAny() {
    let fn = arguments[0]
    let arrArgs = [].slice.call(arguments, 1)
    return function(){
        let arrArgsCopy = arrArgs.slice()
        let arrInnerArgs = [].slice.call(arguments, 0)
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
    let arrArgs = [].slice.call(arguments, 2)
    return function() {
        let arrInnerArgs = [].slice.call(arguments, 0)
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