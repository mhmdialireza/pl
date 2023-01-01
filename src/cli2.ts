import { Game } from "./game";
import { MinMax } from "./min-max";


let game = new Game()

let minMax = new MinMax()
// game.play('bf','ai')
// game.play('cg','ai')
// game.play('ef','ai')
// game.play('fg','ai')
// game.play('gh','ai')
// game.play('fj','ai')
// game.play('gk','ai')
// game.play('ij','ai')
// game.play('jk','ai')
// game.play('kl','ai')
// game.play('jn','ai')
// game.play('ko','ai')
// console.log(game);
game.playerPrint()
// let bestMove = minMax.alphaBetaSearch(game)
// console.log(bestMove);

// let g :Game= structuredClone(game)
// g.aiPrint()