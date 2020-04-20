function rangeOfNumbers(startNum, endNum) {
  return  create([], endNum, startNum)
};
function create (array, n, f){
  array.push(n)
  if(n === f){
    return array.reverse()
  }
  return create(array, n - 1, f)
}

console.log(rangeOfNumbers(1, 4))