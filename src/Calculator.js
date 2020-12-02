class Calculator {

  result(string) {
    let stringSeparation = string.split(" ")
    return this.calculator(stringSeparation[0], stringSeparation[1], stringSeparation[2])
  }

  calculator(number1, mathsign, number2) {
    if(mathsign === "*"){
     return [`${number1} ${mathsign} ${number2}`, number1*number2]
    }else if (mathsign === "+"){
      let sum = parseInt(number1) + parseInt(number2)
      return [`${number1} ${mathsign} ${number2}`, sum]
    }
  }

}
