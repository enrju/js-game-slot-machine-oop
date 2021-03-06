class Result{
    constructor(factor){
        this.state;
        this.value;
        this.winFactor = factor;
    }

    check(cylinders){

    }

    calc(bid){
        if(this.state === "win"){
            this.value = bid * this.winFactor;
        }
        else{
            this.value = bid;
        }
    }
}