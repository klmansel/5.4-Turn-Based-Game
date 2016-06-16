var $ = require('jquery');

function Player(config){
  config = config || {};
  this.name= config.name;
  this.health=config.health;
  this.powers=config.powers;
}

function Enemy(config){
  Player.call(config);
}

var legionOfDoom = [
  new Enemy({'name': "Lex Luthor", 'health': 10, 'powers':'brains'}),
  new Enemy({'name': "The Joker", 'health': 10, 'powers':'poisonous gas'}),
  new Enemy({'name': "Cheetah", 'health': 10, 'powers':'claws'}),
  new Enemy({'name': "Black Manta", 'health': 10, 'powers':'energy blast'}),
  new Enemy({'name': "Sinestro", 'health': 10, 'powers':'yellow power ring'}),
  new Enemy({'name': "Zoom", 'health': 10, 'powers':'phase attack'}),
];


console.log(legionOfDoom);
module.exports = {
  // 'Player' : Player

};
