import cow from './js/cow'
import icon from './img/icon.png'
import './styl/main.styl'

const message = 'is awesome'
document.querySelector('.cow').innerText = cow.say(`Webpack with Babel is ${message}!`)
document.querySelector('.icon').innerHTML = `<img src="${icon}" width="72" >`
