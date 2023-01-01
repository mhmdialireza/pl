"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggle = exports.TURN = void 0;
var TURN;
(function (TURN) {
    TURN["AI"] = "ai";
    TURN["PLAYER"] = "player";
})(TURN = exports.TURN || (exports.TURN = {}));
function toggle(turn) {
    if (turn == 'ai') {
        return 'player';
    }
    else {
        return 'ai';
    }
}
exports.toggle = toggle;
//# sourceMappingURL=turn.enum.js.map