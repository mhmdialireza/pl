import { Game } from "./game";

export function copyGame(game: Game) {
    let newGame = new Game()

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            newGame.cells[i][j] = game.cells[i][j]
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            newGame.columns[i][j] = game.columns[i][j]
        }
    }

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            newGame.rows[i][j] = game.rows[i][j]
        }
    }

    newGame.remainingChoice = []
    for (let i = 0; i < game.remainingChoice.length; i++) {
        newGame.remainingChoice[i] = game.remainingChoice[i]
    }
    return newGame
}

export function copyGame2(game: Game) {
    let newGame = new Game()

    newGame.cells = JSON.parse(JSON.stringify(game.cells))
    newGame.columns = JSON.parse(JSON.stringify(game.columns))
    newGame.rows = JSON.parse(JSON.stringify(game.rows))
    newGame.remainingChoice = JSON.parse(JSON.stringify(game.remainingChoice))

    return newGame
}

export interface AlphaBeta {
    alpha: number,
    beta: number,
    c?: string
}