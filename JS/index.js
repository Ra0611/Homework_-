// console.log(document.body.style)
// document.body.style.background = 'red'

// Получить у пользователя цвет и в зависимости от полученного цвета
// Мы перекрашиваем body в этот цвет

// const color = prompt('Введите цвет!')

// document.body.style.background = color
// const colors = ['red', 'yellow', 'blue']
// const colorsRus = ['красный', 'желтый', "синий"]

// const color = prompt('Введите цвет!').toLowerCase()

// if (color === colors[0] || color === colorsRus[0]) {
// 	document.body.style.background = colors[0]
// } else if (color === colors[1] || color === colorsRus[1]){
// 	document.body.style.background = colors[1]
// } else if (color === colors[2] || color === colorsRus[2]){
// 	document.body.style.background = colors[2]
// }
// Внедрить массивы в задачу с цветами
// Убрать color1, color2 ... заменить их на массивы
//* Два массива color - colorRus Object. 


// const human1 = {
// 	name: 'Vasya',
// 	age: 23,
// 	hairColor: 'black'
// }
// const human2 = {
// 	name: 'Katya',
// 	age: 40,
// 	hairColor: 'blond'
// }
// const humans = [
// 	human1, 
// 	human2
// ]

// if (human1.hairColor === 'blond') {
// 	console.log(`Ты не парься! ${human1.name}`)
// } else if (human1.hairColor === 'black') {
// 	console.log(`Hello ${human1.name}`)
// }

// if (human2.hairColor === 'blond') {
// 	console.log(`Good luck ${human1.name}`)
// } else if (human2.hairColor === 'black') {
// 	console.log(`Hello ${human2.name}`)
// }
// const name = prompt('Whats your name?')

// if (name === 'Liza') {
// 	console.log('Hello girl')
// } else if (name === 'Vasya') {
// 	console.log('Hello boy')
// } else {
// 	console.log('Hello')
// }

// const a = 3
// a > 3 ? 
// 		console.log('More 3') :
// a === 3 ? 
// 		console.log('Ravno 3') :
// console.log('Less 3')

// getElementById(elementId: DOMString)
// querySelector(selectors: DOMString)

// const data = {
// 	icons: 'svg',
// 	apartaments: ['3-rooms', ['with cat', [1,2,3]], ['no-smoking', 'icos friendly', 'smoking']]
// }

// 1 - без окончания
// 2,3,4 - а
// 5 - 20 - ов
// 21, без окончания
// 22, 23, 24 - а
// 25 - 30 - ов
// 31 - без окончания
// 32-34 - а
// 35-40 - ов 
// 101 - номер
//111-119 - дает ов
//211-219 - дает ов
//101


const data = {
	icons: [
		{
			svg: 'sdsd',
			title: ['facebook', 'instagram', 'twitter']
		},
		{
			svg: 'sdsd',
			title: 'dsds'
		},
	],
	apartaments: [
		{
			title: 'vip',
			pay: 10000,
			count: 11
		},
		{
			title: 'premium',
			pay: 5000,
			count: 3
		},
		{
			title: 'standard',
			pay: 1000,
			count: 90
		}
	]
}
function summa (value1, value2, operator) {
	let result = 0
	if (operator === '+') {
		result = value1 + value2
	} else if (operator === 'minus') {
		result = value1 - value2
	}
	return result
}

const number = summa(20, 40, '+')
// получаем из промптов два значения и оператор +, - 
// Написать функцию выводящую в div сумму двух чисел (innerHTML)


console.log(number)


let numberVip =  data.apartaments[0].count
let numberTransformVip = null
let lastNumberVip = numberVip % 10

if (numberVip > 5 && numberVip < 20) {
	numberTransformVip = 'ov'
} else if ((numberVip % 100) >= 11 && (numberVip % 100) <= 19) {
	numberTransformVip = 'ov'
} else if (lastNumberVip === 1) {
	numberTransformVip = ''
} else if (lastNumberVip >=2 && lastNumberVip <=4) {
	numberTransformVip = 'a'
} else {
	numberTransformVip = 'ov'
}
const textVip = `номер${numberTransformVip}`

let numberSt =  data.apartaments[2].count
let numberTransformSt = null
let lastnumberSt = numberSt % 10

if (numberSt > 5 && numberSt < 20) {
	numberTransformSt = 'ov'
} else if ((numberSt % 100) >= 11 && (numberSt % 100) <= 19) {
	numberTransformSt = 'ov'
} else if (lastnumberSt === 1) {
	numberTransformSt = ''
} else if (lastnumberSt >=2 && lastnumberSt <=4) {
	numberTransformSt = 'a'
} else {
	numberTransformSt = 'ov'
}
const textSt = `номер${numberTransformSt}`
console.log(`В нашем отеле есть ${data.apartaments[0].count} ${textVip} класса ${data.apartaments[0].title} и ${data.apartaments[2].count} ${textSt} класса ${data.apartaments[2].title}`)
// //В нашем отеле есть * номеров класса "vip" и * номеров класса "standard"

// const news = [
// 	{
// 		name: 'News 1',
// 		description: 'Text1'
// 	},
// 	{
// 		name: 'News 2',
// 		description: 'Text2'
// 	},
// 	{
// 		name: 'News 3',
// 		description: 'Text3'
// 	},
// ]
// const step1 = document.getElementById('step1')
// const step2 = document.getElementById('step2')
// const step3 = document.getElementById('step3')
// const step4 = document.getElementById('step4')
// const step5 = document.getElementById('step5')

// const loading = prompt('Are you loading data? (Y/N)')

// if (loading === 'Y') {
// 	step1.innerHTML = borsh[0]
// 	step1.style.color = 'red'
// 	step2.innerHTML = borsh[1]
// 	step2.style.padding = '20px'
// 	step3.innerHTML = borsh[2]
// 	step3.style.color = 'yellow'
// 	step4.innerHTML = borsh[3]
// 	step4.style.color = 'green'
// 	step5.innerHTML = borsh[4]
// 	step5.style.color = 'lightblue'
// } else {
// 	console.log('False')
// }
