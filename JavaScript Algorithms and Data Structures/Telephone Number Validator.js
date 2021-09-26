const telephoneCheck = str => {
    if (/^\d{3}-\d{3}-\d{4}$/.test(str)) return true // 1.
    if (/^\(\d{3}\)\d{3}-\d{4}$/.test(str)) return true //2.
    if (/^\(\d{3}\)\s\d{3}-\d{4}$/.test(str)) return true //3.
    if (/^\d{3}\s\d{3}\s\d{4}$/.test(str)) return true //4.
    if (/^\d{10}$/.test(str)) return true //5.

    if (/^[1]\d{3}-\d{3}-\d{4}$/.test(str)) return true // 1-1.
    if (/^[1]\(\d{3}\)\d{3}-\d{4}$/.test(str)) return true //2-1.
    if (/^[1]\(\d{3}\)\s\d{3}-\d{4}$/.test(str)) return true //3-1.
    if (/^[1]\d{3}\s\d{3}\s\d{4}$/.test(str)) return true //4-1.
    if (/^[1]\d{10}$/.test(str)) return true //5-1.
    
    if (/^[1]\s\d{3}-\d{3}-\d{4}$/.test(str)) return true // 1-1s.
    if (/^[1]\s\(\d{3}\)\d{3}-\d{4}$/.test(str)) return true //2-1s.
    if (/^[1]\s\(\d{3}\)\s\d{3}-\d{4}$/.test(str)) return true //3-1s.
    if (/^[1]\s\d{3}\s\d{3}\s\d{4}$/.test(str)) return true //4-1s.
    if (/^[1]\s\d{10}$/.test(str)) return true //5-1s.
    return false
}

console.log(telephoneCheck("(555) 555-5555"))