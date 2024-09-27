const input = document.querySelector('#input')
const result = document.querySelector('#result')
const btn = document.querySelector('#btn')


let randomNumber = Math.floor(Math.random()*100) + 1


btn.addEventListener('click', () => {
    const userGuess = input.value

    if (!userGuess ||userGuess < 1 || userGuess > 100) {
        result.innerText = 'Введите число от 1 до 100'
        input.value = ''
    }
    else if (userGuess == randomNumber) {
        result.innerText = 'Вы угадали число , ваш приз айфон 16 про макс⭐😃😃😃⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️🤩🤩🤩🤩🤩🤩🤩🤩🤩⭐⭐⭐⭐⭐🤩🤩🤩🤩🤩🤩⬆️⬆️⬆️⬆️⬆️🤩👇⬆️🤯🤩⬆️🤯🤩🤩🤯🤯🤩🤩🤯🤯😎😎😎😎⬆️⬆️⭐⭐'
        setTimeout(() => {
            randomNumber = Math.floor(Math.random()*100) + 1
            result.innerText = `Мы обновили загадонное число ! Попробуйте испытать свою удачу еще раз!`
        }, 3000);
        input.value = ''

    }
    else if (userGuess < randomNumber) {
        result.innerText = `Вы не угадали число ,  число ${userGuess} является намного меньше чем загадонное`
        input.value = ''

    }
    else {
        result.innerText = `Вы не угадали число ,  число ${userGuess} является намного больше чем загадонное`
        input.value = ''

    }
})
console.log(randomNumber);
