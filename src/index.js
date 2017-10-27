import cow from './js/cow'

const message = 'is awesome'
document.querySelector('#cow').innerText = cow.say(`Webpack with Babel is ${message}!`)
