safeIn = Number.MAX_SAFE_INTEGER;
//Solution 1
var sum_to_a = function (n) {
  i = 0;
  sum = 0;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
};

//Solution 2
var sum_to_b = function (n) {
  i = 0;
  sum = 0;
  do {
    sum += i;
    i++;
  } while (i <= n);
  return sum;
};

//Solution 3
var sum_to_c = function (n) {
  i = 0;
  sum = 0;
  while (true) {
    sum += i;
    i++;
    if (i > n) break;
  }
  return sum;
};

//Solution 4
var sum_to_d = function (n) {
  for (i = 0, sum = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.log(`Solution 1, the result: ${sum_to_a(3)}`);
console.log(`Solution 2, the result: ${sum_to_b(4)}`);
console.log(`Solution 3, the result: ${sum_to_c(5)}`);
console.log(`Solution 4, the result: ${sum_to_d(6)}`);
