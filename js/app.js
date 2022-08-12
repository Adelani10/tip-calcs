let billInput = document.querySelector(".bill-input")
let numberInput = document.querySelector(".number-input")
let customInput = document.querySelector(".custom-input")
let totalAmount = document.querySelector(".total-amount")
let tipAmount = document.querySelector(".tip-amount")
let btns = document.querySelectorAll(".btn")
let resetBtn = document.querySelector(".reset-btn")
const mainForm = document.querySelector(".main-form")

let counter = 0
let currValue = 0




customInput.addEventListener("input", function(){
    counter = customInput.value
})

btns.forEach(function (btn, index){
    btn.addEventListener("click", function(){
        btns.forEach((item)=>{
            if(item !== btn){
                item.classList.remove("show")
            }
            console.log(item)
        })
        console.log(btn)
        if (index <= 2){
            counter = 5 * index + 5
        }
        else if (index === 3){
            counter = 5 * index + 10
        }
        else{
            counter = 10 * index + 10
        }

        btn.classList.add("show")
        
        })
})
numberInput.addEventListener ("input", function(){
        let numberValue = parseFloat(numberInput.value)
    let billValue = parseFloat(billInput.value)
    currValue = (counter * billValue * numberValue)/100
    tipAmount .innerHTML = `<h1>$${currValue}</h1>`
    let grandTotal = currValue + billValue
    totalAmount.innerHTML = `<h1>$${grandTotal}</h1>`
})

resetBtn.addEventListener("click", function(){
    billInput.value = ''
    counter = 0
    numberInput.value = ''
    customInput.value = ''
    tipAmount.textContent = "$"
    totalAmount.textContent = "$"
    btn.classList.remove("show")
})

    
















