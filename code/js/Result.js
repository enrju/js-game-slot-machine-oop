// What is does: store and manage result of last game
class Result{
    constructor(factor){
        this.state = "win";
        this.value = 0;
        this.winFactor = factor;
    }

    // What is does: check last result of game
    //        input: cylinders - positions of cylinders
    //               bid - user bid
    //       output: set property
    check(cylinders, bid){
        //for 3 cylinders
        if(cylinders[0].nowPosition === cylinders[1].nowPosition && cylinders[0].nowPosition === cylinders[2].nowPosition){
            this.state = "win";
        }
        else{
            this.state = "loss";
        }

        this.calc(bid);
    }

    // What is does: calc last result of game in points
    //        input: bid - user bid
    //       output: set property
    calc(bid){
        if(this.state === "win"){
            this.value = bid.value * this.winFactor;
        }
        else{
            this.value = bid.value;
        }
    }
}