import { Calculator } from './calculator';

describe('Test for Calculator', () => {
  describe('Test for multiply', () => {
    it('should return nine', () =>{
      // Arrange
      let calculator = new Calculator();
      // Act
      let result = calculator.multiply(3, 3);
      // Assert
      expect(result).toEqual(9);
    });
  });
});