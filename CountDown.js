function countDown(n) {
    if (n === 0) {
      return [0]; // Base case: Return an array with the single number 0
    } else {
      const numbers = countDown(n - 1); // Recursive call with smaller n
      numbers.push(n); // Add the current n to the array
      return numbers;
    }
  }