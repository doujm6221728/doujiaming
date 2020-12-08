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
      result += array[i] + separator
    }
    return result + array[i]
  }
  
  ,
  last: function (array) {
    var result = array.length
    
    return array[result - 1]
  }
  
  ,
  // concat: function (array, values) {
  //   var result = array.slice()
  //   for (var i = 0; i < values.length; i++) {
  //     if (values[i]) {
  //       result.push(values[i])
  //     }
  //   }
  //   return result
  // }






































}
