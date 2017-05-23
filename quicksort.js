let array = [85, 24, 63, 45, 17, 31, 96, 50]

let quickSort = (arr) => {
  if (arr.length <= 1) {return arr}
  let idx = Math.floor(arr.length / 2)
  let p = arr.splice(idx, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    arr[i] < p ? left.push(arr[i]) : right.push(arr[i])
  }
  console.log(quickSort(left).concat([p], quickSort(right)))
  return quickSort(left).concat([p], quickSort(right))
}

quickSort(array)
