import { App } from './app';

describe('this is a spec file', () => {
  it('should test addition', () => {
    const app = new App();
    expect(app.add(2, 3)).toBe(5);
    expect(app.add(-1, 1)).toBe(0);
    expect(app.add(0, 0)).toBe(0);
    expect(app.add(-2, -3)).toBe(-5);
  });
  it('should test Sum of Digits', () => {
    const app = new App();
    expect(app.sumOfDigits(123)).toBe(6);
    expect(app.sumOfDigits(-456)).toBe(15);
    expect(app.sumOfDigits(0)).toBe(0);
  });
  it('should test factorial', () => {
    const app = new App();
    expect(app.factorial(5)).toBe(120);
    expect(app.factorial(-3)).toBeNull();
  });
  it('should check prime', () => {
    const app = new App();
    expect(app.isPrime(9)).toBeFalse();
    expect(app.isPrime(7)).toBeTrue();
    expect(app.isPrime(-1)).toBeFalse();
    expect(app.isPrime(4)).toBeFalse();
    expect(app.isPrime(2)).toBeTrue();
  });
  it('should test GCD', () => {
    const app = new App();
    expect(app.gcd(48, 18)).toBe(6);
    expect(app.gcd(-48, 18)).toBe(6);
  });
  it('should test LCM', () => {
    const app = new App();
    expect(app.lcm(4, 5)).toBe(20);
    expect(app.lcm(-4, 5)).toBe(20);
  });
  it('should test Reverse a Number', () => {
    const app = new App();
    expect(app.reverseNumber(123)).toBe(321);
    expect(app.reverseNumber(-456)).toBe(-654);
  });
});
