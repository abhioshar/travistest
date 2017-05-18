export class Player {
    score: number = 0;
    isComputer: boolean = true;

    updateScore(increment: number) {
        this.score += increment;
    }
}