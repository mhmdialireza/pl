"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinMax = void 0;
const utils_1 = require("./utils");
class MinMax {
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
    alphaBetaSearch(state) {
        state = (0, utils_1.copyGame)(state);
        let alphaBeta1 = {
            alpha: -999,
            beta: 999
        };
        let alphaBeta = {
            alpha: -999,
            beta: 999
        };
        // let l = this.maxValue(copyGame(state), alphaBeta1)
        let list = [];
        state.remainingChoice.forEach(choice => {
            list.push({
                index: choice,
                val: this.minValue(state.play(choice, 'ai'), alphaBeta),
            });
        });
        console.log(alphaBeta, list);
        let max = -999;
        let index = -1;
        list.forEach((l, i) => {
            if (l.val > max) {
                max = l.val;
                index = i;
            }
        });
        return list[index].index;
    }
    maxValue(state, alphaBeta) {
        state = (0, utils_1.copyGame)(state);
        if (state.isGameFinished()) {
            return state.getAiScore();
        }
        let v = -999;
        state.remainingChoice.forEach(rc => {
            v = Math.max(v, this.minValue(state.play(rc, 'player'), alphaBeta));
            if (v >= alphaBeta.beta) {
                return v;
            }
            alphaBeta.alpha = Math.max(alphaBeta.alpha, v);
        });
        return v;
    }
    minValue(state, alphaBeta) {
        state = (0, utils_1.copyGame)(state);
        if (state.isGameFinished()) {
            return state.getAiScore();
        }
        let v = 999;
        state.remainingChoice.forEach(rc => {
            v = Math.min(v, this.maxValue(state.play(rc, 'ai'), alphaBeta));
            if (v <= alphaBeta.alpha) {
                return v;
            }
            alphaBeta.beta = Math.min(alphaBeta.beta, v);
        });
        return v;
    }
}
exports.MinMax = MinMax;
//# sourceMappingURL=min-max.js.map