describe("Calculator", function() {
  it('testing sum of 1*1', function() {
    newCalculator = new Calculator
  expect(newCalculator.result("1 * 1")).toEqual(["1 * 1", 1])
  })

  it('testing sum of 4*2', function() {
    newCalculator = new Calculator
  expect(newCalculator.result("4 * 2")).toEqual(["4 * 2", 8])
  })

  it('testing sum of 2000*4', function() {
    newCalculator = new Calculator
  expect(newCalculator.result("2000 * 4")).toEqual(["2000 * 4", 8000])
  })

  it('testing sum of 1+1', function() {
    newCalculator = new Calculator
  expect(newCalculator.result("1 + 1")).toEqual(["1 + 1", 2])
  })

  it('testing sum of 2+4', function() {
    newCalculator = new Calculator
  expect(newCalculator.result("2 + 4")).toEqual(["2 + 4", 6])
  })
})
