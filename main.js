//Script By: Roberto Ochoa Cuevas :).

//Get text to change, list and buttons
var inputText = document.getElementById("content-text");
var brekfastButton = document.getElementById("breakfastButton");
var lunchButton = document.getElementById("lunchButton");
var list = document.getElementById('list')

//Content text
var breakfastText = 'breakfast content...'
var lunchText = 'lunch content...'

//Button listeners
brekfastButton.addEventListener('click',function(){
    inputText.textContent = breakfastText;
    displayBreakfastItems();
})

lunchButton.addEventListener('click',function(){
    inputText.textContent = lunchText;
    //displayLunchItems()
})

// Función para mostrar elementos de desayuno
function displayBreakfastItems() {
    // Clean the List
    list.innerHTML = '';

    // Add Elements to the list
    var breakfastItems = ['Hotcakes', 'Waffles', 'Combo#1'];

    //Create Items
    breakfastItems.forEach(function (item) {
        var listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });
}

// Función para mostrar elementos de Lunch
/*function displayLunchItems() {
    // Clean the List
    list.innerHTML = '';

    // Add Elements to the list
    var breakfastItems = ['Hotcakes', 'Waffles', 'Combo#1'];

    //Create Items
    breakfastItems.forEach(function (item) {
        var listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });
}*/

