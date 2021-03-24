const clickButton = document.querySelector('button')

clickButton.onclick = () => {
    const valueDolarText = document.querySelector('input').value

    const valueDolarNumber = parseFloat(valueDolarText)

    if (valueDolarNumber < 1) {
        document.querySelector('#converted-value').innerHTML = "Valor inválido!"
    } else {
        document.querySelector('#converted-value').innerHTML = 'R$ ' + (valueDolarNumber * 5.50).toFixed(2) + ' Reais'
    }  
}