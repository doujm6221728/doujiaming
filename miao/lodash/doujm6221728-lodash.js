var doujm6221728 = {
  compact: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  } 

  ,
  chunk: function (array, size = 1) {
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

  ,
  join: function (array, separator=',') {
    var result = ''
    for (var i = 0; i < array.length - 1; i++) {
      result = result + array[i] + separator
    }
    return result + array[i]
  }
  
  ,
  last: function (array) {
    var result = array.length
    
    return array[result - 1]
  }

  ,
  concat: function (array, values) {
    var result = array.slice()
    for (var i = 0; i < values.length; i++) {
      if (values[i]) {
        result.push(values[i])
      }
    }
    return result
  }

  ,
  drop: function (array, n = 1) {
    var result = []
    for (var i = n; i < array.length; i++) {
      result.push(array[i])
    }
    return result
  }

  ,
  dropRight: function (array, n = 1) {
    var result = []
    for (var i = 0; i < array.length - n; i--) {
      result.push(array[i])
    }
    return result
  }

  ,
  reverse: function (array) {
    var result = [] 
    for (var i = array.length - 1; i >= 0; i--) {
      result.push(array[i])
    }
    return result
  }

  ,
  //二分查找
  sortedIndex: function (array, value) {
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

  ,
  head: function (array) {
    if (array != null && array.length != null) {
      return array[0]
    } else {
      return undefined
    }
  }
  
  ,
  initial: function (array) {
    var result = []
    for (var i = 0; i < array.length - 1; i++) {
      result.push(array[i])
    }
    return result
  }
  
  ,
  max: function (array) {
    var max = -Infinity
    for (var i = 0; i < array.length; i++) {
      max = Math.max(max, array[i])
    }
    return  max
  }

  ,
  min: function (array) {
    var min = Infinity
    for (var i = 0; i < array.length; i++) {
      min = Math.min(min, array[i])
    }
    return min
  }

  ,
  sum: function (array) {
    var sums = 0
    for (var i = 0; i < array.length; i++) {
      sums += array[i]
    }
    return sums
  }



































}
