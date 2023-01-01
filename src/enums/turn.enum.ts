export enum TURN {
    AI = 'ai',
    PLAYER = 'player',


}

export function toggle(turn: 'player' | 'ai'): 'player' | 'ai' {
    if (turn == 'ai') {
        return 'player'
    } else {
        return 'ai'
    }
}