// import _ from 'chalk'
// const cliSelect = require('cli-select');
import { Game } from "./game";
// // let rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });
// // rl.question('Is this example useful? [y/n] ', (answer) => {
// //     switch (answer.toLowerCase()) {
// //         case 'y':
// //             console.log('Super!');
// //             break;
// //         case 'n':
// //             console.log('Sorry! :(');
// //             break;
// //         default:
// //             console.log('Invalid answer!');
// //     }
// //     rl.close();
// // });
let game = new Game();
game.print();
// console.log(Chalk.blue(111));
