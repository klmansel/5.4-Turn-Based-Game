var $ = require('jquery');


function choosePlayer(){
 var goodGuys = $('.good-guys');
 var hero = (goodGuys.val());
 console.log(hero); //gets the value of the chosen good guy
  $('.hero-text').text('You have chosen ' + hero +'!' + ' Now ATTACK!');
}

function Player(name, health, powers){
  this.name= name;
  this.health= health;
  this.powers= powers;
}


function Enemy(name, health, powers){
  //this => new enemy object
  Player.call(this, name, health, powers);
}

Enemy.prototype = new Player();



//Clean Up code below to match Enemy code
//
// function Hero(name,health, powers){
//   Player.call(justiceLeague);
//
//   var justiceLeague = [
//     new Hero({'name': "Superman", 'health': 10, 'powers':'heat vision, super strength, invulnerability'}),
//     new Hero({'name': "Batman", 'health': 10, 'powers':'super awesome ninja skills, batarangs, sidekick assist'}),
//     new Hero({'name': "Wonder Woman", 'health': 10, 'powers':'super strength, lasso of truth, deflect with indestructible bracelets'}),
//     new Hero({'name': "Aquaman", 'health': 10, 'powers':'trident of neptune, super strength, telepathic shark attack'}),
//     new Hero({'name': "Green Lantern", 'health': 10, 'powers':'energy blast, mental construct attact, force field'}),
//     new Hero({'name': "The Flash", 'health': 10, 'powers':'super speed, vortex attack, speed force punch'}),
//   ];
//

//make powers options objects and make menu show list of all 3 choices of powers


module.exports = {
'choosePlayer' : choosePlayer,
'Enemy' : Enemy

};
