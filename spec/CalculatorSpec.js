describe("Calculator", function() {
  describe("testing multiplication", function() {
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
  })

  describe("testing addition", function() {
    it('testing sum of 1+1', function() {
      newCalculator = new Calculator
    expect(newCalculator.result("1 + 1")).toEqual(["1 + 1", 2])
    })

    it('testing sum of 2+4', function() {
      newCalculator = new Calculator
    expect(newCalculator.result("2 + 4")).toEqual(["2 + 4", 6])
    })

    it('testing sum of 300+450', function() {
      newCalculator = new Calculator
    expect(newCalculator.result("300 + 450")).toEqual(["300 + 450", 750])
    })
  })

  describe("testing subtraction", function() {
    it('testing subtraction - 200-50', function() {
      newCalculator = new Calculator
    expect(newCalculator.result("200 - 50")).toEqual(["200 - 50", 150])
    })

    it('testing subtraction - 80-20', function() {
      newCalculator = new Calculator
    expect(newCalculator.result("80 - 20")).toEqual(["80 - 20", 60])
    })
  })

  describe("testing division", function() {
    it('testing division - 200/2', function() {
      newCalculator = new Calculator
    expect(newCalculator.result("200 / 2")).toEqual(["200 / 2", 100])
    })

    it('testing division - 500/3 rounds correctly', function() {
      newCalculator = new Calculator
    expect(newCalculator.result("500 / 3")).toEqual(["500 / 3", 166.67])
    })
  })

  describe("edge case", function() {
    it('error displays when empty string given', function() {
      newCalculator = new Calculator
    expect(function() {newCalculator.result("")}).toThrowError("Input must be a valid mathematical string separated by spaces")
    })

  })

})
