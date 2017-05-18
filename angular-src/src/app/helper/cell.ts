export class Cell {
    empty: boolean = true;

    // cross or tick
    value: string = "";
    symbol: string = "";

    setValue(value) {
        this.value = value;
        if(this.value == "tick") {
            this.symbol = "donut_large";
        } else {
            this.symbol = "close ";
        }
    }
}