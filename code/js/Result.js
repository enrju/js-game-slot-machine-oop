class Result{
    constructor(factor){
        this.state = "win";
        this.value = 0;
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