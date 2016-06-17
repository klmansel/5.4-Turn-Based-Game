var $ = require('jquery');

function choosePlayer(){
 var goodGuys = $('.good-guys');
 var hero = (goodGuys.val());
 console.log(hero); //gets the value of the chosen good guy
  $('.hero-text').text('You have chosen ' + hero +'!' + ' Now ATTACK!');
}
//
// function Player(config){
//   config = config || {};
//   $.extend(this,config);
//   this.name= config.name;
//   this.health=config.health;
//   this.powers=config.powers;
// }
//
// // function Enemy(name,health, powers){
// //   Player.call(legionOfDoom);
// //
// //   var legionOfDoom = [
// //     new Enemy({'name': "Lex Luthor", 'health': 10, 'powers':'brains'}),
// //     new Enemy({'name': "The Joker", 'health': 10, 'powers':'poisonous gas'}),
// //     new Enemy({'name': "Cheetah", 'health': 10, 'powers':'claws'}),
// //     new Enemy({'name': "Black Manta", 'health': 10, 'powers':'energy blast'}),
// //     new Enemy({'name': "Sinestro", 'health': 10, 'powers':'yellow power ring'}),
// //     new Enemy({'name': "Zoom", 'health': 10, 'powers':'phase attack'}),
// //   ];
// //   console.log(legionOfDoom);
// // }
// //
//
//
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
//   console.log(legionOfDoom);
// }
//
// function Enemy(name,health, powers){
//   Player.call(legionOfDoom);
//
//   var legionOfDoom = [
//     new Enemy({'name': "Lex Luthor", 'health': 10, 'powers':'outsmart enemy'}),
//     new Enemy({'name': "The Joker", 'health': 10, 'powers':'poisonous gas'}),
//     new Enemy({'name': "Cheetah", 'health': 10, 'powers':'claws'}),
//     new Enemy({'name': "Black Manta", 'health': 10, 'powers':'atlantean attack'}),
//     new Enemy({'name': "Sinestro", 'health': 10, 'powers':'yellow power ring'}),
//     new Enemy({'name': "Zoom", 'health': 10, 'powers':'phase attack'}),
//   ];
//   console.log(legionOfDoom);
// }
//
//
//
//
// console.log(Enemy());

//

module.exports = {
'choosePlayer' : choosePlayer

};





// console.log(Enemy());
// module.exports = {
//   // 'Player' : Player
//   'Hero': Hero,
//   'Enemy': Enemy
//
// };
