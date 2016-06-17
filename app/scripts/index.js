var $ = require('jquery');
var models = require('./models.js');

// $(function(){
//Attack Button Code
// $('.attack-button').on('click', function(event) {
//   event.preventDefault();
//   if()

// Shows a welcome message and gives instructions-set timeout not working
$(document).ready(function(){

  var legionOfDoom = [
    new models.Enemy( "Lex Luthor", 10, 'brains'),
    new models.Enemy("The Joker", 10, 'poisonous gas'),
    new models.Enemy("Cheetah", 10, 'claws'),
    new models.Enemy("Black Manta", 10, 'energy blast'),
    new models.Enemy( "Sinestro", 10, 'yellow power ring'),
    new models.Enemy( "Zoom",  10, 'phase attack'),
  ];

  console.log(legionOfDoom[2].name); //testing Enemy name

    $('.message').text('Welcome to Injustice! Please choose a player from the Justice League.');
});

var villian = "BadGuy"; //Create forEach loop to iterate over names in list and populate into jquery
$('.villian-text').text('Your opponent is ' + villian +'!'+ 'Prepare to face defeat!');
$('.good-guys').on('change', function(){
  models.choosePlayer(); //this is because we are exporting the choosePlayer function from the models.js file
});



//Display player's powers.  The player should manually select the "Fight" action to attack.

//Create on load event for random enemy choice

//show image when button is clicked.

//animate images once images show up on screen.
