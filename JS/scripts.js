const start = confirm('ПОИГРАЕМ?')

if (start) {

    const value1 = alert('Умножте на 2 число дня своего рождения')
    const value2 = alert('Cложитe получившееся произведение и число 5')
    const value3 = alert('Умножте на 50 полученную сумму')
    const value4 = alert('К этому результату прибавте номер месяца рождения (июль — 7, январь — 1 и т.д.)')
    const value5 = prompt('Введите получившееся число')

    function counting() {
        let result = 0
        result = value5 - 250
        return result
    }

    const number = counting()
    const monthNumber = Number.parseInt(number.toString().slice(-2, 5))

    const monthList = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря',
    ]

    const container = document.querySelector('.container')

    function border() {
        const container = document.querySelector('.container')
        container.style.border = 'solid 2px rgb(248, 229, 166)'
        container.style.boxShadow = 'inset 0 0 10px 15px rgba(247, 222, 139, 0.654)'
        return container
    }
    border()

    let monthBg = [
        'url(images/jan.jpg) 100% 100%/cover no-repeat',
        'url(images/feb.jpg) 100% 100%/cover no-repeat',
        'url(images/mar.jpg) 100% 100%/cover no-repeat',
        'url(images/apr.jpg) 100% 100%/cover no-repeat',
        'url(images/may.jpeg) 100% 100%/cover no-repeat',
        'url(images/jun.jpg) 100% 100%/cover no-repeat',
        'url(images/jul.jpg) 100% 100%/cover no-repeat',
        'url(images/aug.jpg) 100% 100%/cover no-repeat',
        'url(images/sep.jpg) 100% 100%/cover no-repeat',
        'url(images/oct.jpg) 100% 100%/cover no-repeat',
        'url(images/nov.jpg) 100% 100%/cover no-repeat',
        'url(images/dec.jpeg) 100% 100%/cover no-repeat',
    ]

    let month = monthNumber
    const day = number - monthNumber
    const dayNumber = Math.round(day * 0.01)
    const hint = '))) Давайте-ка ещё раз и повнимательней'

    if (monthNumber === 01) {
        month = monthList[0]
        container.style.background = monthBg[0]
    } else if (monthNumber === 02) {
        month = monthList[1]
        container.style.background = monthBg[1]
    } else if (monthNumber === 03) {
        month = monthList[2]
        container.style.background = monthBg[2]
    } else if (monthNumber === 04) {
        month = monthList[3]
        container.style.background = monthBg[3]
    } else if (monthNumber === 05) {
        month = monthList[4]
        container.style.background = monthBg[4]
    } else if (monthNumber === 06) {
        month = monthList[5]
        container.style.background = monthBg[5]
    } else if (monthNumber === 07) {
        month = monthList[6]
        container.style.background = monthBg[6]
    } else if (monthNumber === 08) {
        month = monthList[7]
        container.style.background = monthBg[7]
    } else if (monthNumber === 09) {
        month = monthList[8]
        container.style.background = monthBg[8]
    } else if (monthNumber === 10) {
        month = monthList[9]
        container.style.background = monthBg[9]
    } else if (monthNumber === 11) {
        month = monthList[10]
        container.style.background = monthBg[10]
    } else if (monthNumber === 12) {
        month = monthList[11]
        container.style.background = monthBg[11]
    } else if (monthNumber < 1 || monthNumber > 12) {
        alert(`Либо в расчеты закралась ошибка, либо месяцев не 12 ${hint}`)
        window.location.reload();
    }
    if (dayNumber < 1 || dayNumber > 31) {
        alert(`Однако, математик из вас ещё тот ${hint}`)
        window.location.reload();
    }

    const deduction = document.querySelector('.calc')
    const contents = deduction.innerHTML
    deduction.innerHTML = `<h2>Самый лучший день в году - твой день Рождения </h2><h1>${dayNumber} ${month}!!!</h1> `
} else {
    alert('В таком случае позвольте вам задать вопрос')
    window.location.reload();
}



    // ...................................................................

// ! Не могу понять как правильно прописать следующий код:
// ! Если работает один из них, остальные подтягиваются автоматом
    // if (month = monthList[1] && dayNumber > 29) {
    //     alert(`Прошу прощения, но в моём календаре максимальное количество дней в феврале 29 ${hint}`)
    //     window.location.reload();
    // }
    // if (month = monthList[3] && dayNumber > 30) {
    //     alert(`Не уверен, что наши календари совпадают ${hint}`)
    //     window.location.reload();
    // }

    // if (month = monthList[5] && dayNumber > 30) {
    //     alert(`Не уверен, что наши календари совпадают ${hint}`)
    //     window.location.reload();
    // }
    // if (month = monthList[8] && dayNumber > 30) {
    //     alert(`Не уверен, что наши календари совпадают ${hint}`)
    //     window.location.reload();
    // }
    // if (month = monthList[10] && dayNumber > 30) {
    //     alert(`Не уверен, что наши календари совпадают ${hint}`)
    //     window.location.reload();
    // }
// ............................................................................
