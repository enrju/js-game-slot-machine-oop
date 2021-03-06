class Warnings{
    constructor(){
        this.index = {
            overbid: 0,
            emptybid: 1
        }
        this.texts = [
            "you haven't enough points",
            "you didn't put bid, put it please"
        ];
    }

    getWarning(which) {
        return this.texts[which];
    }
}