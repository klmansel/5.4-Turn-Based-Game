var $ = require('jquery');
var models = require('./models.js');

// $(function(){
//Attack Button Code
// $('.attack-button').on('click', function(event) {
//   event.preventDefault();
//   if()


$(document).ready(function(){
  //Start New Game Button
  $('.new-game').click(function() {
      location.reload();
  });

  //Enemy array
  var legionOfDoom = [
    new models.Enemy( "Lex Luthor", 10,  'brains'),
    new models.Enemy("The Joker", 10, 'poisonous gas'),
    new models.Enemy("Cheetah", 10, 'claws'),
    new models.Enemy("Black Manta", 10, 'energy blast'),
    new models.Enemy( "Sinestro", 10, 'yellow power ring'),
    new models.Enemy( "Zoom", 10, 'phase attack'),
  ];
//Random enemy generated
  var generateEnemy = legionOfDoom[Math.floor(legionOfDoom.length * Math.random())];


  var villian = generateEnemy.name;
  $('.villian-text').text('Your opponent is ' + villian +'!'+ ' Prepare to face defeat!');

  //Below text should generate after Attack button click and setTimeout 1 sec
  $('.villian-text').append("You have been hit by " + generateEnemy.powers + " --fight back!");

  //Working on way to log enemy health --can't access health property
  var attackValue = Math.floor(Math.random() * 5 + 1);
  var heathStart = generateEnemy.health;
  console.log(generateEnemy.health);
  var enemyHealthStatus = generateEnemy.health - attackValue;
  console.log(enemyHealthStatus);

//Justice League and their properties
  var justiceLeague = [
    new models.Hero( "Superman", 10, ['heat vision', 'super strength', 'invulnerability']),
    new models.Hero( "Batman", 10, ['super awesome ninja skills', 'batarangs', 'sidekick assist']),
    new models.Hero( "Wonder Woman",  10, ['super strength', 'lasso of truth', 'deflect with indestructible bracelets']),
    new models.Hero( "Aquaman", 10, ['trident of neptune', 'super strength', 'telepathic shark attack']),
    new models.Hero( "Green Lantern",  10, ['energy blast', 'mental construct attack', 'force field']),
    new models.Hero("The Flash", 10, ['super speed', 'vortex attack', 'speed force punch']),
  ];
  //Logging Tests
  // console.log('testing enemy:', legionOfDoom[2].name); //testing Enemy name
  // console.log('testing hero:', justiceLeague[3].name);//testing Hero name
  // console.log('testing powers:',justiceLeague[3].powers[1]); //testing powers array
  // console.log(justiceLeague[1].health); //testing accessing health property

//Need to rewrite justiceLeague and insert using jquery so we can use the value of Hero in



    $('.message').text('Welcome to Injustice! Please choose a player from the Justice League.');
    $('.villian-health-status').text("Your opponent's power level is " + enemyHealthStatus +".");
    $('powers-text').text('Choose your attack:');
});

//Need to temporarily disable to build template:
$('.good-guys').on('change', function(){
  models.choosePlayer(); //this is because we are exporting the choosePlayer function from the models.js file
});


//Decrease health value when attack-button is clicked
// $('.attack-button').on('click', function(){
//   models.healthStatus();
// });

//show image when button is clicked.

//animate images once images show up on screen.
