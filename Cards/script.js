let body = document.body

// let arr = [ 
//     { 
//         id: 1, 
//         tarif: "Гость", 
//         description: "Приходите в любое время", 
//         price: 1000, 
//         details: { 
//             "Место в общей зоне": true, 
//             "Доступ 24/7": false, 
//             "Skype-room": false, 
//             "Переговорная": false, 
//             "Мероприятия": false, 
//         } 
//     }, 
//     { 
//         id: 2, 
//         tarif: "Резидент", 
//         description: "Сатнь частью сообщества", 
//         price: 14900, 
//         details: { 
//             "Место в общей зоне": true, 
//             "Доступ 24/7": true, 
//             "Skype-room": true, 
//             "Переговорная": false, 
//             "Мероприятия": false, 
//         } 
//     }, 
//     { 
//         id: 1, 
//         tarif: "Резидент плюс", 
//         description: "Любим вас", 
//         price: 19900, 
//         details: { 
//             "Место в общей зоне": true, 
//             "Доступ 24/7": true, 
//             "Skype-room": true, 
//             "Переговорная": true, 
//             "Мероприятия": true, 
//         } 
//     }, 
// ] 



reload([1,2,3])
 function reload(arr) {
    for (let item of arr) {
        
   
let card = document.createElement('div')
let loct = document.createElement('h3')
let Come = document.createElement('p')
let price= document.createElement('p')
let hr = document.createElement('hr')
let place = document.createElement('p')
let acsess = document.createElement('p')
let skype = document.createElement('p')
let p = document.createElement('p')
let pperegovorna = document.createElement('p')
let button = document.createElement('button')


card.classList.add('card')
loct.classList.add('h3')
Come.classList.add('Come')
price.classList.add('price')
button.classList.add('tarif')
 
loct.innerHTML = 'Гость'
Come.innerHTML = 'Приходите в любое время'
price.innerHTML = '14900'
place.innerHTML = 'Место в общей зоне'
hr.innerHTML = ''
acsess.innerHTML = 'Доступ 24/7'
skype.innerHTML = 'Skype-room'
pperegovorna.innerHTML = 'Переговорная'
button.innerHTML = 'Выбрать тариф'

body.append(card)
card.append(loct, Come, price, hr, place, acsess, skype, pperegovorna, button)
    } 
}

 
 

