const buttons = document.querySelectorAll('.buttonText')
const inputText = document.querySelector('#txtText')
const result = document.querySelector('.result')

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    if(inputText.value === ''){
      return window.alert('Por favor, digite um contéudo de texto no formulário!')
    }
    if(button.className === 'upper buttonText'){
      const textValue = inputText.value.toUpperCase()

      result.innerHTML = textValue
    }
    if(button.className === 'lower buttonText'){
      const textValue = inputText.value.toLowerCase()

      result.innerHTML = textValue
    }

    event.preventDefault()
  })
})