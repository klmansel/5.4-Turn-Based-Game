var $ = require('jquery');
var handlebars = require('handlebars');


function choosePlayer(){
 var goodGuys = $('.good-guys');
 var hero = (goodGuys.val());
 console.log(hero); //gets the value of the chosen good guy
  $('.hero-text').text('You have chosen ' + hero +'!');
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


function Hero(name,health, powers){
  Player.call(this, name,health, powers);
}

Hero.prototype = new Player();







//make powers options objects and make menu show list of all 3 choices of powers


module.exports = {
'choosePlayer' : choosePlayer,
'Enemy' : Enemy,
'Hero' : Hero,


};
