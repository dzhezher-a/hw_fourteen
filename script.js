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
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      m = `${n} не є простим числом`;
    } else {
      m = `${n} є простим числом`;
    }
  }

  return m;
}

console.log(isPrime(17));

// Task 5
function isPowerOfThree(number) {
  while (number > 1) {
    if (number % 3 !== 0) {
      return "Не можна";
    }
    number /= 3;
  }
  return "Можна";
}

console.log(isPowerOfThree(243));
