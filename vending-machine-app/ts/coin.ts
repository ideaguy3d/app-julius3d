/**
 * Created by julius alvarado on 11/14/2016.
 */

class Quarter {
    private value: number = .25;
    private valGetTrack: number = 0;

    get Value() {
        this.valGetTrack++;  
        return this.value;
    }

    set Value(newNum: number) {
        this.value = newNum; 
    }

    public static getImageUrl(): string {
        return "img/Quarter.png";
    }
}

let coin = new Quarter();
let zamount = coin.Value;
