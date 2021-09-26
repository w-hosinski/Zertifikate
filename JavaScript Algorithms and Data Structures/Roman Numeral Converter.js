const convertToRoman = num => {
    let output = [] 
    while (num>999) {
        output.push("M")
        num -= 1000
    }
    if(Math.floor(num/100) == 9) {
        output.push("CM")
        num -= 900
    }
    if(Math.floor(num/100) == 4) {
        output.push("CD")
        num -= 400
    }
    while (num>499) {
        output.push("D")
        num -= 500
    }
    while (num>99) {
        output.push("C")
        num -= 100
    }
    if(Math.floor(num/10) == 9) {
        output.push("XC")
        num -= 90
    }
    if(Math.floor(num/10) == 4) {
        output.push("XL")
        num -= 40
    }
    while (num>49) {
        output.push("L")
        num -= 50
    }
    while (num>9) {
        output.push("X")
        num -= 10
    }
    if(num == 9) {
        output.push("IX")
        num -= 9
    }
    if(num == 4) {
        output.push("IV")
        num -= 4
    }

    while (num>4) {
        output.push("V")
        num -= 5
    }
    while (num>0) {
        output.push("I")
        num -= 1
    }
    return output.join("")
}
console.log(convertToRoman(2421))