// What is does: store and manage points owned by player
class Score{
    constructor(value){
        this.value = value;
    }

    // What is does: update amount points owned by user
    //        input: result - object with result last game (state, value)
    //       output: set property
    update(result){
        if(result.state === "win"){   
            this.value += result.value;
        }
        else{
            this.value -= result.value;
        }
    }
}