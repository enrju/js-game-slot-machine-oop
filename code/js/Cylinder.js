// What is does: store and manage single cylinder
class Cylinder{
    constructor(heightTale, nTales){
        this.heightTale = heightTale;
        this.nTales = nTales;
        this.startPosition = this.calcPosition();
        this.nowPosition = this.startPosition;
    }

    // What is does: calc position of cylinder
    //        input: none
    //       output: position in [px]
    calcPosition(){
        let tale = this.numberRandomFrom(0, this.nTales - 1);
        return tale * this.heightTale;
    }

    // What is does: animation of cylinder
    //        input: none
    //       output: none
    animate(){
        //unused in this version
    }

    // What is does: get random number from range (includes max)
    //        input: min - min number of range
    //               max - max number of range
    //       output: random number from min-max
    numberRandomFrom(min, max) {
        const number = Math.random() * (max - min + 1);
        return Math.floor(number);
    }
}