function sumOfNumbers(numbers) {
  return numbers.reduce(function(prev, next) {
    return prev + next;
  }, 0);
}
var args = process.argv.slice(2);
var numbers = args.map(Number);
console.log(sumOfNumbers(numbers));
