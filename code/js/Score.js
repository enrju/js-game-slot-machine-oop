class Score{
    constructor(value){
        this.value = value;
    }

    update(bid, result, resultPoints){
        if(result === "win"){   
            this.value += resultPoints;
        }
        else{
            this.value -= resultPoints;
        }
    }
}