"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyGame = void 0;
const game_1 = require("./game");
function copyGame(game) {
    let newGame = new game_1.Game();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            newGame.cells[i][j] = game.cells[i][j];
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            newGame.columns[i][j] = game.columns[i][j];
        }
    }
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            newGame.rows[i][j] = game.rows[i][j];
        }
    }
    newGame.remainingChoice = [];
    for (let i = 0; i < game.remainingChoice.length; i++) {
        newGame.remainingChoice[i] = game.remainingChoice[i];
    }
    return newGame;
}
exports.copyGame = copyGame;
//# sourceMappingURL=utils.js.map