class Warnings{
    constructor(){
        this.texts = {
            overbid: "you haven't enough points",
            emptybid: "you didn't put bid, put it please"
        };
    }

    getWarning(which) {
        return this.texts.which;
    }
}