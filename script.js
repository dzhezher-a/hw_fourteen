// Task 1
for (let i = 20; i < 31; i += 0.5) {
  console.log(i);
}

// Task 2
let USD = 27;

for (let i = 10; i < 101; i += 10) {
  console.log(`${i} доларів це ${i * USD} гривень`);
}

// Task 3
function lessThanN(n) {
  for (let i = 1; i < 101; i++) {
    if (Math.pow(i, 2) > n) {
      continue;
    }
    console.log(i);
  }
}

lessThanN(123);

// Task 4
function isPrime(n, m) {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      m = `${n} не є простим числом`;
    } else {
      m = `${n} є простим числом`;
    }
  }

  return m;
}

console.log(isPrime(6, ""));

// Task 5
function threeToThePow(number, string) {
  for (let i = 1; i <= number ** (1 / 3); i++) {
    if (Math.pow(3, i) === number) {
      string = "Можна";
    } else {
      string = "Не можна";
    }
  }

  return string;
}

console.log(threeToThePow(9, ""));
