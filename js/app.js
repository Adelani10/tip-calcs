let billInput = document.querySelector(".bill-input")
let numberInput = document.querySelector(".number-input")
let customInput = document.querySelector(".custom-input")
let totalAmount = document.querySelector(".total-amount")
let tipAmount = document.querySelector(".tip-amount")
let five = document.querySelector(".five")
let ten = document.querySelector(".ten")
let fifteen = document.querySelector(".fifteen")
let twentyFive = document.querySelector(".twenty-five")
let fifty = document.querySelector(".fifty")
let resetBtn = document.querySelector(".reset-btn")


window.addEventListener("DOMContentLoaded", function(){

    customInput.addEventListener("change", function () {
    let customInputValue = parseFloat(customInput.value)
    if (customInputValue <= 100){
        totalAmount.textContent += generateNumber + billContent
    tipAmount.textContent += generateNumber
    }
    })


    five.addEventListener("click", function(){
    let numberValue = parseFloat(numberInput.value)
    let billContent = parseFloat(billInput.value)
    let generateNumber = (5 * billContent * numberValue) / 100;
    
    totalAmount.textContent += generateNumber + billContent
    tipAmount.textContent += generateNumber
    
})
ten.addEventListener("click", function(){
    let numberValue = parseFloat(numberInput.value)
    let billContent = parseFloat(billInput.value)
    let generateNumber = (10 * billContent * numberValue) / 100;
    totalAmount.textContent += generateNumber + parseFloat(billContent)
    tipAmount.textContent += generateNumber
    
})
fifteen.addEventListener("click", function(){
    let numberValue = parseFloat(numberInput.value)
    let billContent = parseFloat(billInput.value)
    let generateNumber = (15 * billContent * numberValue) / 100;
    totalAmount.textContent += generateNumber + parseFloat(billContent)
    tipAmount.textContent += generateNumber
    
})
twentyFive.addEventListener("click", function(){
    let numberValue = parseFloat(numberInput.value)
    let billContent = parseFloat(billInput.value)
    let generateNumber = (25 * billContent * numberValue) / 100;
    totalAmount.textContent += generateNumber + parseFloat(billContent)
    tipAmount.textContent += generateNumber
    
})
fifty.addEventListener("click", function(){
    let numberValue = parseFloat(numberInput.value)
    let billContent = parseFloat(billInput.value)
    let generateNumber = (50 * billContent * numberValue) / 100;
    totalAmount.textContent += generateNumber + parseFloat(billContent)
    tipAmount.textContent += generateNumber
    
})

resetBtn.addEventListener("click", function(){
    billContent = ''
    numberValue = ''
    generateNumber = ''
    console.log("yesss")
})
})
    
















