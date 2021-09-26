const palindrome = str => {
    let forwards = str.replace(/[^0-9a-z]/gi, '').toLowerCase()
    let backwards = forwards.split("").reverse().join("")
    return forwards == backwards 
}
console.log(palindrome("test"))