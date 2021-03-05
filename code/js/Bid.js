class Bid{
    constructor(){
        this.value;
    }

    set(input){
        this.value = input.value;
    }

    checkOverbid(score){
        if(this.value > score) return true;
        else return false;
    }

}