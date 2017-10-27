import cow from './js/cow'
import './styl/main.styl'

const message = 'is awesome'
document.querySelector('#cow').innerText = cow.say(`Webpack with Babel is ${message}!`)
