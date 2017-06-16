const assert = require("assert");
const primes = require("./primes");

// O(n) algorithm to decide if two strings are algorithms
// 1. Map each character of both strings to a prime number
// 2. Multiply the primes for each word
// 3. If the product is the same, the words are anagrams
//
// I first came across the algorhtm in a tweet:
// https://twitter.com/fermatslibrary/status/875340896379817984
function isAnagram(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  const aPrimes = getPrimes(a);
  const bPrimes = getPrimes(b);

  return product(aPrimes) === product(bPrimes);
}

function getPrimes(str) {
  return str.split("").map((c, i) => primes[c.charCodeAt(0)]);
}

function product(numbers) {
  return numbers.reduce((sum, n) => sum * n);
}

//
// Test
//
assert(isAnagram("a", "a"));
assert(isAnagram("looped", "poodle"));
assert(isAnagram("relation", "oriental"));
assert(isAnagram("relation", "oriental"));

assert(!isAnagram("foo", "bar"));
