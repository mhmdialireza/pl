"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figlet_1 = __importDefault(require("figlet"));
const inquirer_1 = __importDefault(require("inquirer"));
const nanospinner_1 = require("nanospinner");
const game_1 = require("./game");
const min_max_1 = require("./min-max");
console.clear();
figlet_1.default.text('Welcome to the Game!', {
    // font: 'Ghost',
    width: 140,
    whitespaceBreak: true
}, function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
setTimeout(() => {
    inquirer_1.default
        .prompt([{
            type: 'list',
            message: 'Who start game?!?',
            name: 'start',
            choices: ['you', 'AI']
        }])
        .then((answers) => {
        mySpinner('Loading...');
        setTimeout(() => {
            console.clear();
            makeGame(answers['start']);
        }, 3000);
    });
}, 1000);
const mySpinner = (text = '', time = 3000) => {
    const spinner = (0, nanospinner_1.createSpinner)().start();
    spinner.start();
    spinner.start({ text, color: 'red' });
    setTimeout(() => {
        spinner.stop();
        console.clear();
    }, time);
};
const makeGame = (str) => {
    const game = new game_1.Game();
    if (str == 'you')
        playerTurn(game);
    else
        aiTurn(game);
};
const playerTurn = (game) => {
    console.clear();
    game.playerPrint();
    setTimeout(() => {
        inquirer_1.default
            .prompt([{
                type: 'list',
                message: 'Make your choice?!?',
                name: 'choice',
                choices: game.remainingChoice
            }])
            .then((res) => {
            game.play(res.choice, 'player');
            if (game.isGameFinished()) {
                endGame(game);
                return;
            }
            aiTurn(game);
        });
    }, 1000);
};
const aiTurn = (game) => {
    console.clear();
    game.aiPrint();
    setTimeout(() => {
        mySpinner('AI will play...');
        let minMax = new min_max_1.MinMax();
        let bestMove = minMax.alphaBetaSearch(game);
        game.play(bestMove, 'ai');
        if (game.isGameFinished()) {
            endGame(game);
            return;
        }
        setTimeout(() => {
            playerTurn(game);
        }, 3000);
    }, 1000);
};
const endGame = (game) => {
    console.clear();
    game.aiPrint();
    console.log();
    if (game.isAiWins()) {
        figlet_1.default.text('AI Wins!', {
            width: 140,
            whitespaceBreak: true
        }, function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
        });
    }
    else {
        figlet_1.default.text('You Win!', {
            width: 140,
            whitespaceBreak: true
        }, function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
        });
    }
};
// let minMax = new MinMax()
// let game = new Game();
// console.log(minMax.alphaBetaSearch(game));
// let b = {
//     t: 10
// }
// let a = b => {
//     b.t = 100
// }
// console.log(b);
// a(b)
// console.log(b);
//# sourceMappingURL=cli.js.map