var $ = require('jquery');
var models = require('./models.js');

// $(function(){
//Attack Button Code
// $('.attack-button').on('click', function(event) {
//   event.preventDefault();
//   if()

//Shows a welcome message and gives instructions-set timeout not working
$(document).ready(function(){

    $('.message').text('Welcome to Injustice! Please choose a player from the Justice League.');

});

$('.good-guys').on('change', function(){
  models.choosePlayer();
});







// });
