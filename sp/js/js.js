'use strict';
let x = 0;
let y = 250;

$(document).ready(function() {
    var spielbrett = document.getElementById('leinwand');
    const spielfeld = spielbrett.getContext('2d');
    const held = new Image();
    held.src = 'img/held.png';
    

    held.onload = function(){
        spielfeld.drawImage(held, x, y);
    }

});
