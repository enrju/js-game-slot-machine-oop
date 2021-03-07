class Score{
    constructor(value){
        this.value = value;
    }

    update(result){
        if(result.state === "win"){   
            this.value += result.value;
        }
        else{
            this.value -= result.value;
        }
    }
}