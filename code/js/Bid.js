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

    checkEmpty(){
        if(this.value == 0) return true;
        else return false;
    }

    clearInput(input){
        input.textContent = "";
    }
}