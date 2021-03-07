class Cylinder{
    constructor(heightTale, nTales){
        this.heightTale = heightTale;
        this.nTales = nTales;
        this.startPosition = this.calcPosition();
        this.nowPosition = this.startPosition;
    }

    calcPosition(){
        let tale = this.numberRandomFrom(0, this.nTales - 1);
        return tale * this.heightTale;
    }

    animate(){

    }

    numberRandomFrom(min, max) {
        const number = Math.random() * (max - min + 1);
        return Math.floor(number);
    }
}