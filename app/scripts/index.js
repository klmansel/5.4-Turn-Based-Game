var $ = require('jquery');
var models = require('./models.js');

// $(function(){
//Attack Button Code
// $('.attack-button').on('click', function(event) {
//   event.preventDefault();
//   if()


$(document).ready(function(){
//Random enemy generated
  var legionOfDoom = [
    new models.Enemy( "Lex Luthor", 10, 'brains'),
    new models.Enemy("The Joker", 10, 'poisonous gas'),
    new models.Enemy("Cheetah", 10, 'claws'),
    new models.Enemy("Black Manta", 10, 'energy blast'),
    new models.Enemy( "Sinestro", 10, 'yellow power ring'),
    new models.Enemy( "Zoom",  10, 'phase attack'),
  ];

  var generateEnemy = legionOfDoom[Math.floor(legionOfDoom.length * Math.random())];
  console.log('Test Enemy',generateEnemy.name);

  var villian = generateEnemy.name; //Create forEach loop to iterate over names in list and populate into jquery
  $('.villian-text').text('Your opponent is ' + villian +'!'+ ' Prepare to face defeat!');
//Justice League and their properties
  var justiceLeague = [
    new models.Hero( "Superman", 10, ['heat vision', 'super strength', 'invulnerability']),
    new models.Hero( "Batman", 10, ['super awesome ninja skills', 'batarangs', 'sidekick assist']),
    new models.Hero( "Wonder Woman",  10, ['super strength', 'lasso of truth', 'deflect with indestructible bracelets']),
    new models.Hero( "Aquaman", 10, ['trident of neptune', 'super strength', 'telepathic shark attack']),
    new models.Hero( "Green Lantern",  10, ['energy blast', 'mental construct attack', 'force field']),
    new models.Hero("The Flash", 10, ['super speed', 'vortex attack', 'speed force punch']),
  ];

  console.log(legionOfDoom[2].name); //testing Enemy name
  console.log(justiceLeague[3].name);//testing Hero name
  console.log(justiceLeague[3].powers[1]); //testing powers array


    $('.message').text('Welcome to Injustice! Please choose a player from the Justice League.');
});

$('.good-guys').on('change', function(){
  models.choosePlayer(); //this is because we are exporting the choosePlayer function from the models.js file
});



//Display player's powers.  The player should manually select the "Fight" action to attack.

//Create on load event for random enemy choice

//show image when button is clicked.

//animate images once images show up on screen.
