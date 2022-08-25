const historic = document.querySelector('.historic')
const display = document.querySelector('.display')

let newNum
let op
let oldNum = 0
let total = 0

const btnNumeric = document.querySelectorAll('.numeric')
btnNumeric.forEach(btn => {
    btn.addEventListener('click', () => {
        if(display.innerText == '0') {
            display.innerHTML = ''
        }
        if (display.textContent.length < 8){
            display.innerHTML += btn.textContent 
        } else {
            alert('Limite maximo atingido!!!')
        }
    })
})


function addToHistoric (operator) {
    oldNum = Number(display.textContent)
    op = "+"

    historic.innerText += operator + display.textContent
    display.innerText = "0"
}

function calc (operator){
    switch (operator) {
        case "+":
            return oldNum + newNum
        case "-":
            return oldNum - newNum
        case "*":
            return oldNum * newNum
        case "/":
            return oldNum / newNum

    }
}
const btnOperation = document.querySelectorAll('.operation')
btnOperation.forEach(btn => {
    btn.addEventListener('click', () => {
        let displayNum = Number(display.textContent)

        switch (btn.textContent) {
            case "C":
                historic.innerText = ""
                display.innerText = "0"
                break;
                
            case "CE":
                display.innerText = "0"
                break;
                    
            case "+":

                break;

            case "-":
                
                break;

            case "*":

                break;

            case "/":

                break;

            case "%":

                break;

            case "=":
                calc(op)
                display.innerText = total
                break;
        }
    })
})