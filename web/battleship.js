
var view = {

    // метод получает строковое сообщение и выводит его
    // в области сообщений
    displayMessage: (msg) => {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;

    },

    // метод будет получать tru пре промахи пользоватиля и выводить картинку на облосьть промаха

    displayHit: (location) => {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: (location) => {
        var cell = document.getElementById(location);
        cell.setAttribute('class', 'miss');
    }

};
view.displayHit("31");

var ships =
            [{ locations: ["31", "41", "51"], hits: ["", "", ""] },
            { locations: ["14", "24", "34"], hits: ["", "hit", ""] },
            { locations: ["00", "01", "02"], hits: ["hit", "", ""] }];

// var model = {
//     boardSize: [],
//     numShip: [],
//     ships: [],
//     shipsSunk: [],
//     shipLength: [],
//     fire: () => {

//     }
// };
