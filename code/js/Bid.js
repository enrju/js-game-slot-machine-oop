// What is does: store and manage bid putted by user
class Bid{
    constructor(){
        this.value;
    }

    // What is does: get value from <input> and set into value
    //        input: <input>
    //       output: set property
    set(input){
        this.value = input.value;
    }

    // What is does: check that the bid is bigger than owned points 
    //        input: owned points
    //       output: [true|false]
    checkOverbid(score){
        if(this.value > score) return true;
        else return false;
    }

    // What is does: check that the <input> is empty 
    //        input: none
    //       output: [true|false]
    checkEmpty(){
        if(this.value == 0) return true;
        else return false;
    }

    // What is does: clear <input>
    //        input: <input>
    //       output: none
    clearInput(input){
        input.textContent = "";
    }
}