const rot13 = str => {
    let inputArr = str.split("")
    for(let i=0; i<inputArr.length; i++) {
        switch (inputArr[i]) {
            case "A": inputArr[i] = "N"; break
            case "B": inputArr[i] = "O"; break
            case "C": inputArr[i] = "P"; break
            case "D": inputArr[i] = "Q"; break
            case "E": inputArr[i] = "R"; break
            case "F": inputArr[i] = "S"; break
            case "G": inputArr[i] = "T"; break
            case "H": inputArr[i] = "U"; break
            case "I": inputArr[i] = "V"; break
            case "J": inputArr[i] = "W"; break
            case "K": inputArr[i] = "X"; break
            case "L": inputArr[i] = "Y"; break
            case "M": inputArr[i] = "Z"; break
            case "N": inputArr[i] = "A"; break
            case "O": inputArr[i] = "B"; break
            case "P": inputArr[i] = "C"; break
            case "Q": inputArr[i] = "D"; break
            case "R": inputArr[i] = "E"; break
            case "S": inputArr[i] = "F"; break
            case "T": inputArr[i] = "G"; break
            case "U": inputArr[i] = "H"; break
            case "V": inputArr[i] = "I"; break
            case "W": inputArr[i] = "J"; break
            case "X": inputArr[i] = "K"; break
            case "Y": inputArr[i] = "L"; break
            case "Z": inputArr[i] = "M"; break
        }
    }
    return inputArr.join("")
}
console.log(rot13("AB"))