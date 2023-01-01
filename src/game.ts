import chalk from "chalk"
import { LINES } from "./enums/lines.enums"
import { TURN } from "./enums/turn.enum"

export class Game {
    public cells
    public rows
    public columns
    public remainingChoice: string[]

    constructor() {
        this.columns = {
            0: {
                0: false,
                1: false,
            },
            1: {
                0: false,
                1: false,
            },
            2: {
                0: false,
                1: false
            }
        }

        this.rows = {
            0: {
                0: false,
                1: false,
                2: false
            },
            1: {
                0: false,
                1: false,
                2: false
            },
        }

        this.cells = {
            0: {
                0: false,
                1: false,
                2: false,
            },
            1: {
                0: false,
                1: false,
                2: false,
            },
            2: {
                0: false,
                1: false,
                2: false,
            }
        }

        this.remainingChoice = ['bf', 'cg', 'ef', 'fg', 'gh', 'fj', 'gk', 'ij', 'jk', 'kl', 'jn', 'ko',]
    }

    public getRemainChoice(): string[] {
        return this.remainingChoice
    }

    public isGameFinished() {
        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++)
                if (this.cells[i][j] == false)
                    return false;

        return true;
    }

    public getAiScore() {
        let score = 0
        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++)
                if (this.cells[i][j] == 'ai')
                    score++;

        return score;
    }

    public getPlayerScore() {
        let score = 0
        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++)
                if (this.cells[i][j] == 'player')
                    score++;

        return score;
    }

    public isAiWins() {
        if (this.getAiScore() >= 5)
            return true
        return false
    }

    public isPlayerWins() {
        if (this.getPlayerScore() >= 5)
            return true
        return false
    }

    public fillEmptyCells(turn: string) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.cells[i][j] == false) {
                    if (i == 0) {
                        if (j == 0) {
                            if (
                                this.columns[0][0] &&
                                this.rows[0][0] &&
                                this.cells[0][0] == false
                            ) {
                                this.cells[0][0] = turn
                            }
                        } else if (j == 1) {
                            if (
                                this.columns[0][0] &&
                                this.columns[0][1] &&
                                this.rows[0][1] &&
                                this.cells[0][1] == false
                            ) {
                                this.cells[0][1] = turn
                            }
                        } else if (j == 2) {
                            if (
                                this.columns[0][1] &&
                                this.rows[0][2] &&
                                this.cells[0][2] == false
                            ) {
                                this.cells[0][2] = turn
                            }
                        }
                    } else if (i == 1) {
                        if (j == 0) {
                            if (
                                this.columns[1][0] &&
                                this.rows[0][0] &&
                                this.rows[1][0] &&
                                this.cells[1][0] == false
                            ) {
                                this.cells[1][0] = turn
                            }
                        } else if (j == 1) {
                            if (
                                this.columns[1][0] &&
                                this.columns[1][1] &&
                                this.rows[0][1] &&
                                this.rows[1][1] &&
                                this.cells[1][1] == false
                            ) {
                                this.cells[1][1] = turn
                            }
                        } else if (j == 2) {
                            if (
                                this.columns[1][1] &&
                                this.rows[0][2] &&
                                this.rows[1][2] &&
                                this.cells[1][2] == false
                            ) {
                                this.cells[1][2] = turn
                            }
                        }
                    } else if (i == 2) {
                        if (j == 0) {
                            if (
                                this.columns[2][0] &&
                                this.rows[1][0] &&
                                this.cells[2][0] == false
                            ) {
                                this.cells[2][0] = turn
                            }
                        } else if (j == 1) {
                            if (
                                this.columns[2][0] &&
                                this.columns[2][1] &&
                                this.rows[1][1] &&
                                this.cells[2][1] == false
                            ) {
                                this.cells[2][1] = turn
                            }
                        } else if (j == 2) {
                            if (
                                this.columns[2][1] &&
                                this.rows[1][2] &&
                                this.cells[2][2] == false
                            ) {
                                this.cells[2][2] = turn
                            }
                        }
                    }
                }
            }
        }
    }

    public play(choice: string, turn: 'player' | 'ai') {
        // this.remainingChoice = this.remainingChoice.filter(item => item != choice)
        // console.log(this.remainingChoice);
        let cs = this.getRemainChoice()
        this.remainingChoice = []
        // console.log(cs);
        for (let i = 0; i < cs.length; i++) {
            if (cs[i] != choice)
                this.remainingChoice.push(cs[i])
        }
        // console.log(this.remainingChoice);
        if (choice.valueOf() == LINES.BF) {
            this.columns[0][0] = turn.valueOf()
        } else if (choice.valueOf() == LINES.CG) {
            this.columns[0][1] = turn.valueOf()
        } else if (choice.valueOf() == LINES.EF) {
            this.rows[0][0] = turn.valueOf()
        } else if (choice.valueOf() == LINES.FG) {
            this.rows[0][1] = turn.valueOf()
        } else if (choice.valueOf() == LINES.GH) {
            this.rows[0][2] = turn.valueOf()
        } else if (choice.valueOf() == LINES.FJ) {
            this.columns[1][0] = turn.valueOf()
        } else if (choice.valueOf() == LINES.GK) {
            this.columns[1][1] = turn.valueOf()
        } else if (choice.valueOf() == LINES.IJ) {
            this.rows[1][0] = turn.valueOf()
        } else if (choice.valueOf() == LINES.JK) {
            this.rows[1][1] = turn.valueOf()
        } else if (choice.valueOf() == LINES.KL) {
            this.rows[1][2] = turn.valueOf()
        } else if (choice.valueOf() == LINES.JN) {
            this.columns[2][0] = turn.valueOf()
        } else if (choice.valueOf() == LINES.KO) {
            this.columns[2][1] = turn.valueOf()
        }

        this.fillEmptyCells(turn)

        return this
    }

    public aiPrint() {
        // console.log(this.cells);

        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                if (i == 0 || i == 6) {
                    if (j % 2 == 0) {
                        process.stdout.write('+');
                    } else if (j % 2 != 0) {
                        process.stdout.write('---');
                    }
                } else if (i % 2 == 0) {
                    if (j % 2 == 0) {
                        process.stdout.write('+');
                    } else if (j % 2 != 0) {
                        if (i == 2) {
                            if (j == 1) {
                                if (this.rows[0][0]) {
                                    process.stdout.write('---');
                                } else {
                                    process.stdout.write('   ');
                                }
                            } else if (j == 3) {
                                if (this.rows[0][1]) {
                                    process.stdout.write('---');
                                } else {
                                    process.stdout.write('   ');
                                }
                            } else if (j == 5) {
                                if (this.rows[0][2]) {
                                    process.stdout.write('---');
                                } else {
                                    process.stdout.write('   ');
                                }
                            }
                        } else if (i == 4) {
                            if (j == 1) {
                                if (this.rows[1][0]) {
                                    process.stdout.write('---');
                                } else {
                                    process.stdout.write('   ');
                                }
                            } else if (j == 3) {
                                if (this.rows[1][1]) {
                                    process.stdout.write('---');
                                } else {
                                    process.stdout.write('   ');
                                }
                            } else if (j == 5) {
                                if (this.rows[1][2]) {
                                    process.stdout.write('---');
                                } else {
                                    process.stdout.write('   ');
                                }
                            }
                        }
                    }
                } else if (i % 2 == 1) {
                    if (j == 0) {
                        process.stdout.write('|');
                    } else if (j == 1) {
                        if (this.cells[Math.floor(i / 2)][0]) {
                            // process.stdout.write(` ${this.cells[Math.floor(i / 2)][0]} `);
                            if (this.cells[Math.floor(i / 2)][0] == TURN.AI.valueOf()) {
                                process.stdout.write(chalk.bgRed('   '));
                            } else {
                                process.stdout.write(chalk.bgGreen('   '));
                            }
                        } else {
                            process.stdout.write('   ');
                        }
                    } else if (j == 2) {
                        if (this.columns[Math.floor(i / 2)][0]) {
                            process.stdout.write('|');
                        } else {
                            process.stdout.write(' ');
                        }
                    } else if (j == 3) {
                        if (this.cells[Math.floor(i / 2)][1]) {
                            // process.stdout.write(` ${this.cells[Math.floor(i / 2)][0]} `);
                            if (this.cells[Math.floor(i / 2)][1] == TURN.AI.valueOf()) {
                                process.stdout.write(chalk.bgRed('   '));
                            } else {
                                process.stdout.write(chalk.bgGreen('   '));
                            }
                        } else {
                            process.stdout.write('   ');
                        }
                    } else if (j == 4) {
                        if (this.columns[Math.floor(i / 2)][1]) {
                            process.stdout.write('|');
                        } else {
                            process.stdout.write(' ');
                        }
                    } else if (j == 5) {
                        if (this.cells[Math.floor(i / 2)][2]) {
                            // process.stdout.write(` ${this.cells[Math.floor(i / 2)][0]} `);
                            if (this.cells[Math.floor(i / 2)][2] == TURN.AI.valueOf()) {
                                process.stdout.write(chalk.bgRed('   '));
                            } else {
                                process.stdout.write(chalk.bgGreen('   '));
                            }
                        } else {
                            process.stdout.write('   ');
                        }
                    } else if (j == 6) {
                        process.stdout.write('|');
                    }
                }
            }
            console.log();
        }
    }

    public playerPrint() {
        // console.log(this.cells);

        let asciiCounter = 65; // A
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                if (i == 0 || i == 6) {
                    if (j % 2 == 0) {
                        process.stdout.write(String.fromCharCode(asciiCounter++));
                    } else if (j % 2 != 0) {
                        process.stdout.write('---');
                    }
                } else if (i % 2 == 0) {
                    if (j % 2 == 0) {
                        process.stdout.write(String.fromCharCode(asciiCounter++));
                    } else if (j % 2 != 0) {
                        if (i == 2) {
                            if (j == 1) {
                                if (this.rows[0][0]) {
                                    process.stdout.write('---');
                                } else {
                                    process.stdout.write('   ');
                                }
                            } else if (j == 3) {
                                if (this.rows[0][1]) {
                                    process.stdout.write('---');
                                } else {
                                    process.stdout.write('   ');
                                }
                            } else if (j == 5) {
                                if (this.rows[0][2]) {
                                    process.stdout.write('---');
                                } else {
                                    process.stdout.write('   ');
                                }
                            }
                        } else if (i == 4) {
                            if (j == 1) {
                                if (this.rows[1][0]) {
                                    process.stdout.write('---');
                                } else {
                                    process.stdout.write('   ');
                                }
                            } else if (j == 3) {
                                if (this.rows[1][1]) {
                                    process.stdout.write('---');
                                } else {
                                    process.stdout.write('   ');
                                }
                            } else if (j == 5) {
                                if (this.rows[1][2]) {
                                    process.stdout.write('---');
                                } else {
                                    process.stdout.write('   ');
                                }
                            }
                        }
                    }
                } else if (i % 2 == 1) {
                    if (j == 0) {
                        process.stdout.write('|');
                    } else if (j == 1) {
                        if (this.cells[Math.floor(i / 2)][0]) {
                            // process.stdout.write(` ${this.cells[Math.floor(i / 2)][0]} `);
                            if (this.cells[Math.floor(i / 2)][0] == TURN.AI.valueOf()) {
                                process.stdout.write(chalk.bgRed('   '));
                            } else if (this.cells[Math.floor(i / 2)][0] == TURN.PLAYER.valueOf()) {
                                process.stdout.write(chalk.bgGreen('   '));
                            }
                        } else {
                            process.stdout.write('   ');
                        }
                    } else if (j == 2) {
                        if (this.columns[Math.floor(i / 2)][0]) {
                            process.stdout.write('|');
                        } else {
                            process.stdout.write(' ');
                        }
                    } else if (j == 3) {
                        if (this.cells[Math.floor(i / 2)][1]) {
                            // process.stdout.write(` ${this.cells[Math.floor(i / 2)][0]} `);
                            if (this.cells[Math.floor(i / 2)][1] == TURN.AI.valueOf()) {
                                process.stdout.write(chalk.bgRed('   '));
                            } else {
                                process.stdout.write(chalk.bgGreen('   '));
                            }
                        } else {
                            process.stdout.write('   ');
                        }
                    } else if (j == 4) {
                        if (this.columns[Math.floor(i / 2)][1]) {
                            process.stdout.write('|');
                        } else {
                            process.stdout.write(' ');
                        }
                    } else if (j == 5) {
                        if (this.cells[Math.floor(i / 2)][2]) {
                            // process.stdout.write(` ${this.cells[Math.floor(i / 2)][0]} `);
                            if (this.cells[Math.floor(i / 2)][2] == TURN.AI.valueOf()) {
                                process.stdout.write(chalk.bgRed('   '));
                            } else {
                                process.stdout.write(chalk.bgGreen('   '));
                            }
                        } else {
                            process.stdout.write('   ');
                        }
                    } else if (j == 6) {
                        process.stdout.write('|');
                    }
                }
            }
            console.log();
        }
    }
}