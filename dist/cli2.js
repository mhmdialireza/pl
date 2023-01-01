"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./game");
const min_max_1 = require("./min-max");
let game = new game_1.Game();
let minMax = new min_max_1.MinMax();
// game.play('bf','ai')
// game.play('ef','ai')
// game.play('ij','ai')
// game.play('fj','ai')
// game.play('jn','ai')
// game.play('kl','ai')
// game.play('jk','ai')
// game.play('ko','ai')
let bestMove = minMax.alphaBetaSearch(game);
console.log(bestMove);
//# sourceMappingURL=cli2.js.map