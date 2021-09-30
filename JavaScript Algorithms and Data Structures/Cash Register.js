const checkCashRegister = (price, cash, cid) => {
    const cidBackup = JSON.parse(JSON.stringify(cid)); 
    let tempCounter = 0
    let returnArr = []
    let change = cash - price
    let i = 0
    let totalChangeRemaining = 0
    
    const counterChange = num => {
        change -= num
        tempCounter += num
        tempCounter = +tempCounter.toFixed(2)
        cid[i][1] -= num
    }
        
    for(i=cid.length-1;i>-1;i--){
            while (parseFloat(change).toFixed(2)>=100 && cid[i][0] == "ONE HUNDRED" && cid[i][1]) {
                counterChange(100)
            }
            if(tempCounter) returnArr.push(["ONE HUNDRED", tempCounter])
            tempCounter = 0
            while (parseFloat(change).toFixed(2)>=20 && cid[i][0] == "TWENTY" && cid[i][1]) {
                counterChange(20)
            }
            if(tempCounter) returnArr.push(["TWENTY", tempCounter])
            tempCounter = 0
            while (parseFloat(change).toFixed(2)>=10 && cid[i][0] == "TEN" && cid[i][1]) {
                counterChange(10)
            }
            if(tempCounter) returnArr.push(["TEN", tempCounter])
            tempCounter = 0
            while (parseFloat(change).toFixed(2)>=5 && cid[i][0] == "FIVE" && cid[i][1]) {
                counterChange(5)
            }
            if(tempCounter) returnArr.push(["FIVE", tempCounter])
            tempCounter = 0
            while (parseFloat(change).toFixed(2)>=1 && cid[i][0] == "ONE" && cid[i][1]) {
                counterChange(1)
            }
            if(tempCounter) returnArr.push(["ONE", tempCounter])
            tempCounter = 0
            while (parseFloat(change).toFixed(2)>=0.25 && cid[i][0] == "QUARTER" && cid[i][1]) {
                counterChange(0.25)
            }
            if(tempCounter) returnArr.push(["QUARTER", tempCounter])
            tempCounter = 0
            while (parseFloat(change).toFixed(2)>=0.1 && cid[i][0] == "DIME" && cid[i][1]) {
                counterChange(0.1)
            }
            if(tempCounter) returnArr.push(["DIME", tempCounter])
            tempCounter = 0
            while (parseFloat(change).toFixed(2)>=0.05 && cid[i][0] == "NICKEL" && cid[i][1]) {
                counterChange(0.05)
            }
            if(tempCounter) returnArr.push(["NICKEL", tempCounter])
            tempCounter = 0
            while (parseFloat(change).toFixed(2)>=0.01 && cid[i][0] == "PENNY" && cid[i][1]) {
                counterChange(0.01)
            }
            if(tempCounter) returnArr.push(["PENNY", tempCounter]) 
            tempCounter = 0
            totalChangeRemaining += cid[i][1]
            console.log(change)
        }
        if (change>0) return {status: "INSUFFICIENT_FUNDS", change: []}
        if (totalChangeRemaining <= 0) return {status: "CLOSED", change: cidBackup}
        else return {status: "OPEN", change: returnArr}
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))