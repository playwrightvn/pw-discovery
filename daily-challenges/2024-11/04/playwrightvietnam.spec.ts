function calculateMagicGate(calculations: string[]): number[] {
    return calculations.map(calc => {
      // Loại bỏ khoảng trắng và tách chuỗi thành các phần
      const cleanCalc = calc.replace(/\s+/g, '');
      const match = cleanCalc.match(/^(-?\d+)([\+\-\*\/])(-?\d+)$/);
      
      if (!match) {
        throw new Error('Invalid calculation format');
      }
  
      const [str1, num1Str, operator, num2Str] = match;
      console.log(str1);
      const num1 = parseInt(num1Str);
      const num2 = parseInt(num2Str);
  
      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return Math.floor(num1 / num2);
        default:
          throw new Error('Invalid operator');
      }
    });
  }
  
  // Test cases
  console.log(calculateMagicGate(["1 + 1", "200*2", "3 - 10"])); // [2, 400, -7]
  console.log(calculateMagicGate(["10/3", "5+5", "100 - 1"])); // [3, 10, 99]
  console.log(calculateMagicGate(["20*5", "10/2", "15-5"])); // [100, 5, 10]