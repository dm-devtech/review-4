describe("Calculator", function() {
  it('testing sum of 1*1', function() {
    newCalculator = new Calculator
  expect(newCalculator.result("1 * 1")).toEqual(["1 * 1", 1])
  })

  it('testing sum of 1+1', function() {
    newCalculator = new Calculator
  expect(newCalculator.result("1 + 1")).toEqual(["1 + 1", 2])
  })
})
