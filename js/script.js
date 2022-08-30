const historic = document.querySelector('.historic')
const display = document.querySelector('.display')

let expression = ''

const btns = document.querySelectorAll('button')
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        switch (btn.innerText) {
            case 'AC':
                display.innerText = ""
                historic.innerHTML = ""
                expression = ''
                break
            case 'C':
                if(display.innerText)
                    display.innerText = display.innerText.slice(0, -1)
                break
            case '+/-':
                let displayCotentArray = display.innerText.split('')
                if (displayCotentArray[0] != '-') {
                    displayCotentArray.unshift('-')
                    display.innerText = displayCotentArray.join('')
                } else if (displayCotentArray[0] == '-') {  
                    displayCotentArray.splice(0, 1)
                    display.innerText = displayCotentArray.join('')
                }
                break
            case '=':
                try {
                    expression += display.innerText
                    let total = eval(expression)
                    if (String(total).length < 8) {
                        historic.innerText += display.innerText + '=' + total + ' | '
                        display.innerText = total
                        expression = ''                  
                    } else {
                        display.innerText = 'ERR'
                    }
                } catch {
                    display.innerText = 'ERROR!'
                }
                break;
        }
        if (btn.classList[0] == 'numeric')
            if (display.textContent.length < 8) {
                display.innerText += btn.innerText
            } else {
                alert('Max 8 digits...')
            }        
        if (btn.classList[0] == 'operation') {
            let op = btn.innerText
            historic.innerText += display.innerText + op
            expression += display.innerText + op
            display.innerText = ''
        }  
    })
})