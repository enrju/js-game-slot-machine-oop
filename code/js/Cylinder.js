class Cylinder{
    constructor(heightTale, nTales){
        this.heightTale = heightTale;
        this.nTales = nTales;
        this.startPosition = this.calcPosition();
        this.nowPosition = this.startPosition;
    }

    calcPosition(){
    }

    animate(){
        
    }

    numberRandomFrom(min, max) {
        const number = Math.random() * (max - min + 1);
        return Math.floor(number);
    }
}