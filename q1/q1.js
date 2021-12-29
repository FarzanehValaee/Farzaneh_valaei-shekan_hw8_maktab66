//Arrow function
let splitBill = (amount,numPeople) => `Each person needs to pay ${amount/numPeople}`
console.log(splitBill(10,2))
console.log(splitBill(10,4))

let countDown = (startingNumber,step) => {
          let countFromNum= startingNumber+step
          return  () => countFromNum-=step
}

const countingDown = countDown(20,2)

console.log(countingDown())
console.log(countingDown())