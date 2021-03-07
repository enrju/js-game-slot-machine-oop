class Result{
    constructor(factor){
        this.state = "win";
        this.value = 0;
        this.winFactor = factor;
    }

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

    calc(bid){
        if(this.state === "win"){
            this.value = bid.value * this.winFactor;
        }
        else{
            this.value = bid.value;
        }
    }
}