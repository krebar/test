const view = {
    displayMessage: (msg) => {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;

    },

    displayHit: (location) => {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: (location) => {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'miss');
    }
};

const model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [{
            locations: ["06", "16", "26"],
            hits: ["", "", ""]
        },
        {
            locations: ["24", "34", "44"],
            hits: ["", "", ""]
        },
        {
            locations: ["10", "11", "12"],
            hits: ["", "", ""]
        }
    ],

    fire: function (guess) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },

    isSunk: (ship) => {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }

        return true;
    }

};

const cotroller = {
    guess: 0,
    processGuess: function (guess){

    },
    parseGuess: function(){

    }

};




function parseGuess(guess){
    let alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length !== 2){
       alert("Oops, please enter a letter and a number on the board.");
    } else {
        let firstChar = guess.charAt(0);
        let row = alphabet.indexOf(firstChar);
        console.log(row);
    }
}
parseGuess("X0");