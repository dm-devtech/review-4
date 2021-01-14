class Calculator {

  result(string) {
    if (string === "") throw new Error("Input must be a valid mathematical string separated by spaces")
    let stringSeparation = string.split(" ")
    return this.calculator(stringSeparation[0], stringSeparation[1], stringSeparation[2])
  }

  calculator(number1, mathsign, number2) {
    if (mathsign === "*") return this.multiplication(number1, mathsign, number2)
    if (mathsign === "+") return this.addition(number1, mathsign, number2)
    if (mathsign === "-") return this.subtraction(number1, mathsign, number2)
    if (mathsign === "/") return this.division(number1, mathsign, number2)
  }

  multiplication(number1, mathsign, number2) {
    return [`${number1} ${mathsign} ${number2}`, number1*number2]
  }

  addition(number1, mathsign, number2) {
    let sum = parseInt(number1) + parseInt(number2)
    return [`${number1} ${mathsign} ${number2}`, sum]
  }

  subtraction(number1, mathsign, number2) {
    let subtraction = parseInt(number1) - parseInt(number2)
    return [`${number1} ${mathsign} ${number2}`, subtraction]
  }

  division(number1, mathsign, number2) {
    let division = (parseInt(number1) / parseInt(number2)).toFixed(2)
    return [`${number1} ${mathsign} ${number2}`, parseFloat(division)]
  }

}
