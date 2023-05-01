const timer = document.querySelector('.timer')
const btnStart = document.querySelector('.btnStart')
const btnPomodoro = document.querySelector('.btn-pomodoro')
const btnBreak = document.querySelector('.btn-break')
const btnLong = document.querySelector('.btn-long')
const body = document.querySelector('body')


let startingMinutesFocus;
let focusTime = startingMinutesFocus * 60;


btnStart.addEventListener('click', () => {
    setInterval(countdown, 1000);
})

btnPomodoro.addEventListener('click', () => {
    btnPomodoro.classList.add('active')
    btnBreak.classList.remove('active')
    btnLong.classList.remove('active')

    body.style.backgroundColor = " rgb(186, 73, 73)"
    btnStart.style.color = "rgb(186, 73, 73)"

    startingMinutesFocus = 25;
    focusTime = startingMinutesFocus * 60

    const minutes = Math.floor(focusTime / 60)
    let seconds = focusTime % 60

    seconds = seconds < 10 ? "0" + seconds : seconds

    timer.innerHTML = `${minutes} : ${seconds}`

})

btnBreak.addEventListener('click', () => {
    btnBreak.classList.add('active')
    btnLong.classList.remove('active')
    btnPomodoro.classList.remove('active')

    body.style.backgroundColor = "rgb(56,133,138)"
    btnStart.style.color = 'rgb(56,133,138)'

    startingMinutesFocus = 5
    focusTime = startingMinutesFocus * 60

    const minutes = Math.floor(focusTime / 60)
    let seconds = focusTime % 60

    seconds = seconds < 10 ? "0" + seconds : seconds

    timer.innerHTML = `${minutes} : ${seconds}`
})

btnLong.addEventListener('click', () => {
    btnLong.classList.add('active')
    btnBreak.classList.remove('active')
    btnPomodoro.classList.remove('active')

    body.style.backgroundColor = "rgb(57,112,151)"
    btnStart.style.color = 'rgb(57,112,151)'

    startingMinutesFocus = 15
    focusTime = startingMinutesFocus * 60

    const minutes = Math.floor(focusTime / 60)
    let seconds = focusTime % 60

    seconds = seconds < 10 ? "0" + seconds : seconds

    timer.innerHTML = `${minutes} : ${seconds}`
})

function countdown() {
    if (focusTime >= 0) {
        const minutes = Math.floor(focusTime / 60)
        let seconds = focusTime % 60

        seconds = seconds < 10 ? "0" + seconds : seconds

        timer.innerHTML = `${minutes} : ${seconds}`

        focusTime--;
    }
}

