const historic = document.querySelector('.historic')
const display = document.querySelector('.display')

const btns = document.querySelectorAll('button')
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        switch (btn.innerText) {
            case 'C':
                display.innerText = ""
                historic.innerHTML = ""
                break;
            case 'CE':
                if(display.innerText)
                    display.innerText = display.innerText.slice(0, -1)
                break;
            case '=':
                try {
                    let total = eval(display.innerText)
                    historic.innerText += `${display.innerText} = ${total} | `
                    display.innerText = total                   
                } catch {
                    display.innerText = 'ERROR!'
                }
                break;
            default:
                display.innerText += btn.innerText
                break;
    }})
})