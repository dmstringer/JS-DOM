// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"
var button = document.getElementById("myButton");

button.addEventListener('click', function(){

    let allTheBoxes = document.querySelectorAll('.box')

    allTheBoxes.forEach(function (el) {
    el.style.background = 'blue'
    })

})