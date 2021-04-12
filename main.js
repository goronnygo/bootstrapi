const button = document.querySelector('#click-butt');
const pics = document.querySelector('#dogpics')

button.addEventListener('click', function(){
    const URL = 'https://dog.ceo/api/breeds/image/random';
    fetch(URL)

        .then(function (rawRes){
            return rawRes.json()
        })

        .then(function (json){
            pics.src = json.message
        })
});

const button2 = document.querySelector('#button');
const temps = document.getElementById("temps");
const winds = document.getElementById("winds");
const descps = document.getElementById("descps");

button2.addEventListener('click', function(){
    let city = document.getElementById("textbar").value;
    const URL = `https://goweather.herokuapp.com/weather/${city}`;
    console.log("button clicked")
    fetch(URL)

        .then(function (rawRes){
            return rawRes.json()
        })

        .then(function (json){
            console.log(json);
            // city = json
            temps.innerHTML = `The Temperature is: ${json.temperature}`
            winds.innerHTML = `The Wind Outside is: ${json.wind}`
            descps.innerHTML = `Outside is: ${json.description}`
        })
});


