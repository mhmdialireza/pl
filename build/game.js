export class Game {
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
        };
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
        };
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
        };
    }
    print() {
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                if (i == 0 || i == 6) {
                    if (j % 2 == 0) {
                        process.stdout.write('+');
                    }
                    else if (j % 2 != 0) {
                        process.stdout.write('---');
                    }
                }
                else if (i % 2 == 0) {
                    if (j % 2 == 0) {
                        process.stdout.write('+');
                    }
                    else if (j % 2 != 0) {
                        if (i == 2) {
                            if (j == 1) {
                                if (this.rows[0][0]) {
                                    process.stdout.write('---');
                                }
                                else {
                                    process.stdout.write('   ');
                                }
                            }
                            else if (j == 3) {
                                if (this.rows[0][1]) {
                                    process.stdout.write('---');
                                }
                                else {
                                    process.stdout.write('   ');
                                }
                            }
                            else if (j == 5) {
                                if (this.rows[0][2]) {
                                    process.stdout.write('---');
                                }
                                else {
                                    process.stdout.write('   ');
                                }
                            }
                        }
                        else if (i == 4) {
                            if (j == 1) {
                                if (this.rows[1][0]) {
                                    process.stdout.write('---');
                                }
                                else {
                                    process.stdout.write('   ');
                                }
                            }
                            else if (j == 3) {
                                if (this.rows[1][1]) {
                                    process.stdout.write('---');
                                }
                                else {
                                    process.stdout.write('   ');
                                }
                            }
                            else if (j == 5) {
                                if (this.rows[1][2]) {
                                    process.stdout.write('---');
                                }
                                else {
                                    process.stdout.write('   ');
                                }
                            }
                        }
                    }
                }
                else if (i % 2 == 1) {
                    if (j == 0) {
                        process.stdout.write('|');
                    }
                    else if (j == 1) {
                        if (this.cells[Math.floor(i / 2)][0]) {
                            process.stdout.write(` ${this.cells[Math.floor(i / 2)][0]} `);
                        }
                        else {
                            process.stdout.write('   ');
                        }
                    }
                    else if (j == 2) {
                        if (this.columns[Math.floor(i / 2)][0]) {
                            process.stdout.write('|');
                        }
                        else {
                            process.stdout.write(' ');
                        }
                    }
                    else if (j == 3) {
                        if (this.cells[Math.floor(i / 2)][1]) {
                            process.stdout.write(` ${this.cells[Math.floor(i / 2)][1]} `);
                        }
                        else {
                            process.stdout.write('   ');
                        }
                    }
                    else if (j == 4) {
                        if (this.columns[Math.floor(i / 2)][1]) {
                            process.stdout.write('|');
                        }
                        else {
                            process.stdout.write(' ');
                        }
                    }
                    else if (j == 5) {
                        if (this.cells[Math.floor(i / 2)][2]) {
                            process.stdout.write(` ${this.cells[Math.floor(i / 2)][2]} `);
                        }
                        else {
                            process.stdout.write('   ');
                        }
                    }
                    else if (j == 6) {
                        process.stdout.write('|');
                    }
                }
            }
            console.log();
        }
    }
}
