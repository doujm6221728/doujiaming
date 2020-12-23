

var doujm6221728 = function () {

  // function get(object, path, defaultValue) {
  //   var names = path.split('.')
  //   for (var name of names) {
  //     if (name in object) {
  //       object = object[name]
  //     } else {
  //       return defaultValue
  //     }
  //   }
  //   return object
  // }

  // function property(path) {

  //   return function (obj) {
  //     return get(obj, path)
  //   }
  // }

  // function matches(src) {
  //   return function (obj) {
  //     for (var key in src) {
  //       if (src[key] && typeof src[key] == 'object') {
  //         if (!src[key], obj[key]) {
  //           return false
  //         }
  //       } else {
  //         if (obj[key] !== src[key]) {
  //           return false
  //         }
  //       }
  //     }
  //     return true
  //   }
  // }

  // function iteratee(predicate) {
  //   if (typeof predicate === 'function') {
  //     return predicate
  //   }
  //   if (typeof predicate === 'string') {
  //     return _.property(predocate)
  //   }
  //   if (Array.isArray(predicate)) {
  //     return _.matchesProperty(predicate)
  //   }
  //   if (typeof predicate === 'object') {
  //     return _.matches(predicate)
  //   }
  // }
 

  function compact(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  } 

  
  function chunk(array, size = 1) {
    var result = []
    for (var i = 0; i < array.length; i += size) {
      var result2 = []
      for (var j = i; j < size + i && j < array.length; j++) {
        result2.push(array[j])
      }
      result.push(result2)
    }
    return result
  }

  
  function join(array, separator = ',') {
    var result = ''
    for (var i = 0; i < array.length - 1; i++) {
      result = result + array[i] + separator
    }
    return result + array[i]
  }
  
 
  function last(array) {
    var result = array.length
    
    return array[result - 1]
  }

 
  function drop(array, n = 1) {
    var result = []
    for (var i = n; i < array.length; i++) {
      result.push(array[i])
    }
    return result
  }

 
  function dropRight(array, n = 1) {
    var result = []
    for (var i = 0; i < array.length - n; i++) {
      result.push(array[i])
    }
    return result
  }

 
  function reverse(array) {
    var result = [] 
    for (var i = array.length - 1; i >= 0; i--) {
      result.push(array[i])
    }
    return result
  }

 
  //二分查找
  function sortedIndex(array, value) {
    var left = 0
    var right = array.length 
    while (left < right) {
      var mid = Math.floor((left + right) / 2)
      if (array[mid] < value) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    return right
  }

 
  function head(array) {
    if (array != null && array.length != null) {
      return array[0]
    } else {
      return undefined
    }
  }
  
 
  function initial(array) {
    var result = []
    for (var i = 0; i < array.length - 1; i++) {
      result.push(array[i])
    }
    return result
  }
  
 
  function max(array) {
    if (array.length == 0) return undefined
    var max = array[0]
    for (var i = 0; i < array.length; i++) {
      max = Math.max(max, array[i])
    }
    return  max
  }

 
  function min(array) {
    if (array.length == 0) return undefined
    var min = array[0]
    for (var i = 0; i < array.length; i++) {
      min = Math.min(min, array[i])
    }
    return min
  }

 
  function sum(array) {
    var sums = 0
    for (var i = 0; i < array.length; i++) {
      sums += array[i]
    }
    return sums
  }

 
  function fill(array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }

 
  function flatten(arrays) {
    return [].concat(...arrays)
  }

 
  function flattenDeep(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        result.push(...flattenDeep(array[i]))
      } else {
        result.push(array[i])
      }
    }
    return result
  }

 
  function flattenDepth(array, depth = 1) {
    var result = array
    while (depth) {
      result = flatten(result)
      depth--
    }
    return result
  }

 
  function concat(arrays, values) {
    var result = []
    for (var i = 0; i < arrays.length; i++) {
      result.push(array[i])
    }
    for (var i = 0; i < values.length; i++) {
      if (Array.isArray(values[i])) {
        values[i].forEach(it => {
          result.push(it)
        })
      } else {
        result.push(values[i])
      }
    }
    return result
  }

 
  function reduce(array, reducer, result) {
    var start = 0
    if (result == undefined) {
      result = array[0]
      start = 1
    }
    for (var i = start; i < arrray.length; i++) {
      result = reducer(result, array[i])
    }
    return result
  }

 
  //predicate: 谓词，lodash中用作判断的
  function groupBy(array, predicate = it => it) {
    var result = {}
    for (var i = 0; i < array.length; i++) {
      var key = predicate(array[i], i, array)
      if (!Array.isArray(result[key])) {
        result[key] = array[i]
      } 
      result[key].push(array[i])
    }
    return result
  }

 
  //返回首个提供的参数
  function identity(val) {
    return val
  }
  //也就是 const identity = it => it

 
  function sumBy(array, predicate = it => it) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
      sum += predicate(array[i], i, array)
    }
    return sum
  }

 
  //返回映射后的新对象
  function mapValues(object, mapper) {
    var result = {}
    for (var key in object) {
      result[key] = mapper(object[key], key, object) //对象没有下标 就返回key
    }
    return result
  }

 
  //反向版 mapValues
  function mapKeys(object, mapper){
    var result = {}
    for (var key in object) {
      result[mapper(object[key], key, object)] = object[key] //对象没有下标 就返回key
    }
    return result
  }
  
 
  function indexOf(array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  }


  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  }


  function difference(array, ...values) {
    var obj = {}
    var result = []

    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < values[0].length; j++) {
        var key = values[i][j]
        obj[key] = 1
      }
    }

    for (var i = 0; i < array.length; i++) {
      if (!(array[i] in obj)) {
        result.push(array[i])
      }
    }
    return result
  }
  

  function nth(array, n = 0) {
    if (n < 0) {
      return array[array.length + n]
    }
    return array[n]
  }
  

  function fromPairs(pairs) {
    var map = {}
    for (var i = 0; i < pairs.length; i++) {
      map[pairs[i][0]] = pairs[i][1]
    }
    return map
  }


  function pull(array, ...values) {
    var result = []
    var ary = []
    
    for (var i of values) {
      ary.push(i)
    }
    for (var i = 0; i < array.length; i++) {
      if (!(ary.includes(array[i]))) {
        result.push(array[i])
      }
    }
    return result
  }


  function pullAll(array, values) {
    var result = array

    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (array[j] === values[i]) {
          result.splice(j, 1)
        }
      }
    }
    return result
  }



  function ary(func, n = func.length) {
    return function (...args) {
      return func.slice(0, n)
    }
  }


  function before(n, func) {
    var c = 0
    var result
    return function (...args) {
      if (c < n) {
        func.call(this, ...args)
        c++
      } else {
        return result
      }
    }
  }


  function after(n, func) {
    var c = 0
    return function () {
      c++
      if (c > n) {
        return func,call(this, ...args)
      }
    }
  }


  function flip(func) {
    return function (...args) {
      func(...args.reverse())
    }
  }


  function negate(predicate) {
    return function (...args) {
      return !predicate(...args)
    }
  }


  function tail(array) {
    var result = []
    for (var i = 1; i < array.length; i++) {
      result.push(array[i])
    }
    return result
  }
  

  function take(array, n = 1) {
    return array.slice(0,n)
  }
  

  function takeRight(array, n = 1) {
    var result = []
    if (array.length < n) {
      return array
    }
    for (var i = array.length - n; i < array.length; i++) {
      result.push(array[i])
    }
    return result
  }


  function without(array, ...values) {
    var result = []
    var ary = []
    
    for (var i of values) {
      ary.push(i)
    }
    for (var i = 0; i < array.length; i++) {
      if (!(ary.includes(array[i]))) {
        result.push(array[i])
      }
    }
    return result
  }


  function zip(...arrays) {
    var result = []
    
    for (var i = 0; i < arrays[0].length; i++) {
      var tmp = []

      for (var j = 0; j < arrays.length; j++) {
        tmp.push(arrays[j][i])
      }
      result.push(tmp)
    }
    return result
  }


  function zipObject(props, values) {
    var map = {}
    for (var i = 0; i < props.length; i++) {
      map[props[i]] = values[i]
    }
    return map
  }


  function flatMap(collection, iteratee) {
    var result = []
    for (var i = 0; i < collection.length; i++) {
      result.push(...iteratee(collection[i], i, collection))
    }
    return result
  }


  function forEach(collection, iteratee) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iteratee(collection[i], i, collection)
      }
    }

    if (typeof collection == 'Object') {
      for (var j in collection) {
        iteratee(collection[j], j, collection)
      }
    }
    
    return collection
  }













  return {
    compact,
    chunk,
    join,
    last,
    drop,
    dropRight,
    reverse,
    sortedIndex,
    head,
    initial,
    max,
    min,
    sum,
    fill,
    flatten,
    flattenDeep,
    flattenDepth,
    concat,
    reduce,
    groupBy,
    identity,
    sumBy,
    mapValues,
    mapKeys,
    indexOf,
    lastIndexOf,
    difference,
    nth,
    fromPairs,
    pull,
    ary,
    before,
    after,
    flip,
    negate,
    pullAll,
    tail,
    take,
    takeRight,
    without,
    zip,
    zipObject,
    flatMap,
    forEach,

  }
}()
