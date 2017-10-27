import cow from './js/cow'
import './css/main.css'

const message = 'is awesome'
document.querySelector('#cow').innerText = cow.say(`Webpack with Babel is ${message}!`)
