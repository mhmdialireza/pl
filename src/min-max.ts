import { AlphaBetaClass } from "./alpha-beta";
import { Game } from "./game";
import { AlphaBeta, copyGame, copyGame2 } from "./utils";

export class MinMax {
    public static i: number = 1
    // public alphaBetaSearch(state: Game) {
    //     state = copyGame(state)

    //     let alphaBeta: AlphaBeta = {
    //         alpha: -999,
    //         beta: 999,
    //         c: ''
    //     }

    //     let l = this.maxValue(copyGame(state), alphaBeta)

    //     console.log(l,alphaBeta);

    //     return alphaBeta.c
    //     // return list[index].index
    // }

    // public maxValue(state: Game, alphaBeta: AlphaBeta): number {
    //     state = copyGame(state)

    //     if (state.isGameFinished()) {
    //         return state.getAiScore()
    //     }
    //     let d = alphaBeta.c

    //     let v = -999
    //     state.remainingChoice.forEach(rc => {
    //         v = Math.max(v, this.minValue(state.play(rc, 'ai'), alphaBeta))
    //         if (v >= alphaBeta.beta) {
    //             return v
    //         }

    //         alphaBeta.alpha = Math.max(alphaBeta.alpha, v)
    //     });

    //     return v
    // }

    // public minValue(state: Game, alphaBeta: AlphaBeta): number {
    //     state = copyGame(state)

    //     if (state.isGameFinished()) {
    //         return state.getAiScore()
    //     }
    //     let d = alphaBeta.c
    //     let v = 999
    //     state.remainingChoice.forEach(rc => {
    //         v = Math.min(v, this.maxValue(state.play(rc, 'player'), alphaBeta))
    //         if (v <= alphaBeta.alpha) {
    //             return v
    //         }

    //         // if (alphaBeta.beta <= v) {
    //         //     alphaBeta.c = rc
    //         // }
    //         alphaBeta.beta = Math.min(alphaBeta.beta, v)
    //     });

    //     // if (state.remainingChoice.length >= 1) {
    //     //     alphaBeta.c = state.remainingChoice[state.remainingChoice.length - 1]
    //     // }
    //     // alphaBeta.c = d

    //     return v
    // }






















    public alphaBetaSearch(state: Game) {
        let alphaBeta1: AlphaBeta = {
            alpha: -999,
            beta: 999
        }
        let alphaBeta: AlphaBeta = {
            alpha: -999,
            beta: 999
        }

        let l = this.maxValue(copyGame(state), alphaBeta1)

        let list = []
        state.remainingChoice.forEach(choice => {
            list.push({
                index: choice,
                val: this.minValue(copyGame(state).play(choice, 'ai'), alphaBeta),
            })
            // console.log(`end ${choice} \n----------------------------------------------------------`);
        });

        // console.log({ alphaBeta, list });

        let max = -999
        let index = -1
        list.forEach((l, i) => {
            if (l.val > max) {
                max = l.val
                index = i
            }
        });
        // console.log({ l });
        return list[index].index
    }

    public maxValue(state: Game, alphaBeta: AlphaBeta): number {
        // console.log(`\n-------------------------------\n`);
        // state.playerPrint()
        // console.log(state.getAiScore(), state,);

        if (state.isGameFinished()) {
            // console.log(`\n-------------------------------\n`);
            // state.playerPrint()
            // console.log(state.getAiScore(), state,);
            return state.getAiScore()
        }

        let v = -999
        state.remainingChoice.forEach(rc => {
            v = Math.max(v, this.minValue(copyGame(state).play(rc, 'ai'), alphaBeta))
            if (v >= alphaBeta.beta) {
                return v
            }
            alphaBeta.alpha = Math.max(alphaBeta.alpha, v)
        });
        return v
    }

    public minValue(state: Game, alphaBeta: AlphaBeta): number {
        // console.log(`\n-------------------------------\n`);
        // state.playerPrint()
        // console.log(state.getAiScore(), state,);

        if (state.isGameFinished()) {
            // console.log(`\n-------------------------------\n`);
            // state.playerPrint()
            // console.log(state.getAiScore(), state,);
            return state.getAiScore()
        }

        let v = 999
        state.remainingChoice.forEach(rc => {
            v = Math.min(v, this.maxValue(copyGame(state).play(rc, 'player'), alphaBeta))
            if (v <= alphaBeta.alpha) {
                return v
            }
            alphaBeta.beta = Math.min(alphaBeta.beta, v)
        });
        return v
    }



































    // public alphaBetaSearch(state: Game) {
    //     state = copyGame(state)

    //     let alpha: number = -999
    //     let beta: number = 999
    //     let v: number = -999

    //     let list = []
    //     state.remainingChoice.forEach(choice => {
    //         list.push({
    //             index: choice,
    //             val: this.minValue(state.play(choice, 'ai'), -999, 999),
    //         })
    //     });

    //     console.log(list);
    //     let max = -999
    //     let index = -1
    //     list.forEach((l, i) => {
    //         if (l.val > max) {
    //             max = l.val
    //             index = i
    //         }
    //     });

    //     return list[index].index
    // }

    // public maxValue(state: Game, alpha, beta): number {
    //     state = copyGame(state)

    //     if (state.isGameFinished()) {
    //         return state.getAiScore()
    //     }

    //     let v = -999
    //     state.remainingChoice.forEach(rc => {
    //         v = Math.max(v, this.minValue(state.play(rc, 'ai'), alpha, beta))
    //         if (v >= beta) {
    //             return v
    //         }
    //         alpha = Math.max(alpha, v)
    //     });
    //     return v
    // }

    // public minValue(state: Game, alpha, beta): number {
    //     state = copyGame(state)

    //     if (state.isGameFinished()) {
    //         return state.getAiScore()
    //     }

    //     let v = 999
    //     state.remainingChoice.forEach(rc => {
    //         v = Math.min(v, this.maxValue(state.play(rc, 'player'), alpha, beta))
    //         if (v <= alpha) {
    //             return v
    //         }
    //         beta = Math.min(beta, v)
    //     });
    //     return v
    // }
}