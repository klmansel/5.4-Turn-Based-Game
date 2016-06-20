var $ = require('jquery');
var _ = require('underscore');
var models = require('./models.js');

//the IIFE make the program load once the DOM is ready.
$(function(){

  var justiceLeague = [
    new models.Hero({'name': "Superman", 'health': 10, 'powers':['super strength', 'heat vision', 'invulnerability']}),
    new models.Hero({'name': "Batman", 'health': 10, 'powers':['ninja fighting skills', 'batarangs', 'sidekick assist']}),
    new models.Hero({'name': "Wonder Woman", 'health': 10, 'powers':['super strength', 'lasso of truth', 'deflect with indestructible bracelets']}),
    new models.Hero({'name': "Aquaman", 'health': 10, 'powers':['super strength', 'trident of neptune energy blast', 'telepathic marine life attack']}),
    new models.Hero({'name': "Green Lantern", 'health': 10, 'powers':['energy blast', 'green power ring constructs', 'force field']}),
    new models.Hero({'name': "Flash", 'health': 10, 'powers':['super speed', 'vortex attack', 'speed force punch']}),
  ];

  var randomHero = justiceLeague[Math.floor(justiceLeague.length * Math.random())];
  var randomHeroArray = randomHero.powers;
  var randomHeroPower =randomHeroArray[Math.floor(randomHeroArray.length * Math.random())];
  console.log(randomHeroPower);

  var legionOfDoom = [
    new models.Enemy({name: 'Lex Luthor', health: 20, power: 'outsmarts you with his superior intelligence'}),
    new models.Enemy({name: 'The Joker', health: 20, power: 'sprays you with poisonous gas'}),
    new models.Enemy({name: 'Cheetah', health: 20, power: 'gouges you with her claws'}),
    new models.Enemy({name: 'Black Manta', health: 20, power: 'sends his minions to attack you'}),
    new models.Enemy({name: 'Sinestro', health: 20, power: 'attacks you with yellow power ring constructs'}),
    new models.Enemy({name: 'Captain Cold', health: 20, power: 'freezes you with cold gun'}),
  ];



  /*
   * this function is an event handler that runs the function "choosePlayer" and
   * hides the drop down list once a hero is selected.
   */

  $('.justice-league').on('change', function(){
    choosePlayer();
    window.setTimeout(function(){
      $('.dropdown-list').hide('change', function(){
        choosePlayer();
      });
    }, 1000);

  });



  /*
   * this function updates the DOM with text once the user selects a value (hero)
   * it has been programmed with a delay.
   */
  function choosePlayer(){
    var justiceLeaguer = $('.justice-league');
    var hero = (justiceLeaguer.val());

    window.setTimeout(function(){
      $('.message-to-player').text(hero +'!');
    }, 2000);
    window.setTimeout(function(){
      $('.message-to-player').text('We need your help!');
    }, 4000);
    window.setTimeout(function(){
      $('.message-to-player').text('A villian has attacked a heavily populated area!');
    }, 6000);
    window.setTimeout(function(){
      $('.message-to-player').text('Your opponent is ' + villian + '.' + ' Select a superpower and...');
    }, 8000);
    window.setTimeout(function(){
      $('.message-to-player').text('ATTACK!');
    }, 10000);
    window.setTimeout(function(){
    $('.hero-health-status').text('Your Health: ' + selectedHeroHealth);
    $('.villian-health-status').text('Villian Health: ' + currentVillianHealth);
  }, 11000);

  }

  /*
   * Do not place this var inside the choosePlayer function.  It won't work right there.
   * This var generates a random villian.
   */
  var randomlyChooseVillian = legionOfDoom[Math.floor(legionOfDoom.length * Math.random())];

  var villian = randomlyChooseVillian.name;

  //this function reloads the game when the user clicks the "restart" button.
  $('.new-game').click(function() {
      location.reload();
  });


  var selectedHeroHealth = 20;
  var currentVillianHealth = randomlyChooseVillian.health;

  function attackGenerator(){
    var attackValue = _.random(10);
    return attackValue;
  }

//Need health NOT to go below 0-code below not working:
// randomlyChooseVillian.health(Math.max(randomlyChooseVillian.health, 0));
// selectedHeroHealth(Math.max(selectedHeroHealth, 0));

    // Decrease health value when attack-button is clicked
  $('.attack-button').on('click', function(){
    event.preventDefault();
    selectedHeroHealth = selectedHeroHealth - attackGenerator();
    $('.hero-health-status').text('Your Health: ' + selectedHeroHealth);
    console.log(selectedHeroHealth);

    var currentVillianHealth = randomlyChooseVillian.health = randomlyChooseVillian.health - attackGenerator();
    $('.villian-health-status').text('Villian Health: ' + currentVillianHealth);
    console.log(currentVillianHealth);

    if(selectedHeroHealth <= 0){
      alert('The Villian Wins!  Try Again.');
    } else if (currentVillianHealth <= 0){
      alert('Congratulations! You won!');
    }

    window.setTimeout(function(){
      $('.message-to-player').text('The villian '+ randomlyChooseVillian.power + '.');
    }, 2000);

    window.setTimeout(function(){
      $('.message-to-player').text('You used '+ randomHeroPower + ' !');
    }, 4000);
  });

});
