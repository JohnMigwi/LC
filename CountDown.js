function countDown(n) {
    if (n === 0) {
      return [0]; 
    } else {
      const numbers = countDown(n - 1)
      numbers.push(n); 
      return numbers;
    }
  }