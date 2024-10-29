let button = document.getElementById('btn')
let wrapper_weather = document.getElementById('wrapper-weather')



button.addEventListener('click', ()=>{
  wrapper_weather.style.height = '600px'

  fetch(`https:api.openweathermap.org/data/2.5/weather? q= $ {'toshkent'} & appid= ${'eaa5545307881ec088c9e8f0a377b6f5'}`)
  .then(response => response.json())
  .then(data => console.log(data))

})