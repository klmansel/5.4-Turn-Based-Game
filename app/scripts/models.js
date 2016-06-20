var $ = require('jquery');


function Player(config){
  config = config || {};
  $.extend(this, config);
}


function Hero(config){
  Player.call(this, config);
}
Hero.prototype = new Player();



function Enemy(config){
  Player.call(this, config);
}
Enemy.prototype = new Player();





//module.exports is a node that allows me to "require" my constructor function babies from models.js into my index.js
module.exports = {
'Hero' : Hero,
'Enemy' : Enemy
};
