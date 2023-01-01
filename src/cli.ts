import * as readline from 'readline';
import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from "inquirer";
import { createSpinner } from 'nanospinner'
import { LINES } from './enums/lines.enums';
import { TURN } from './enums/turn.enum';
import { Game } from './game';
import { MinMax } from './min-max';

console.clear()

figlet.text('Welcome to the Game!', {
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
    inquirer
        .prompt([{
            type: 'list',
            message: 'Who start game?!?',
            name: 'start',
            choices: ['you', 'AI']
        }])
        .then((answers) => {
            mySpinner('Loading...')
            setTimeout(() => {
                console.clear()
                makeGame(answers['start'])
            }, 3000);
        })
}, 1000);


const mySpinner = (text: string = '', time: number = 3000) => {
    const spinner = createSpinner().start()
    spinner.start()
    spinner.start({ text, color: 'red' })

    setTimeout(() => {
        spinner.stop()
        console.clear()
    }, time);
}

const makeGame = (str: 'you' | 'ai') => {
    const game = new Game()
    // game.play('fg','ai')
    if (str == 'you')
        playerTurn(game)
    else
        aiTurn(game)
}

const playerTurn = (game: Game) => {
    console.clear()
    game.playerPrint()

    setTimeout(() => {
        inquirer
            .prompt([{
                type: 'list',
                message: 'Make your choice?!?',
                name: 'choice',
                choices: game.remainingChoice
            }])
            .then((res) => {
                game.play(res.choice, 'player')
                if (game.isGameFinished()) {
                    endGame(game)
                    return
                }
                aiTurn(game)
            })
    }, 1000);
}

const aiTurn = (game: Game) => {
    console.clear()
    game.aiPrint()

    setTimeout(() => {
        mySpinner('AI will play...')
        let minMax = new MinMax()
        let bestMove = minMax.alphaBetaSearch(game)
        game.play(bestMove, 'ai')

        if (game.isGameFinished()) {
            endGame(game)
            return
        }

        setTimeout(() => {
            playerTurn(game)
        }, 3000);
    }, 1000);
}


const endGame = (game: Game) => {
    console.clear()
    game.aiPrint()
    console.log();
    if (game.isAiWins()) {
        figlet.text('AI Wins!', {
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
    } else {
        figlet.text('You Win!', {
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
}

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
