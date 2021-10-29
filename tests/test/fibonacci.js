const Fibonacci = artifacts.require('Fibonacci');

contract('Fibonacci', (accounts) => {
  let fibonacci = null;
  before(async () => {
    fibonacci = await Fibonacci.deployed();
  });

  it('should correctly calculate fibonacci sequence', async () => {
    const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    for (var i = 0; i < expected.length; i++) {
      const result = await fibonacci.fib(i);
      assert(result.toNumber() === expected[i])
    }
  })
});
