class App{
    constructor(){
        this.page = new Page();
        this.bid = new Bid();
        this.score = new Score(100);    //start score = 100 points
        this.result = new Result(3);    //winFactor = x 3
        this.cylinders = [];
        for(let i = 0; i < 3; i++){
            let cylinder = new Cylinder(60, 5);     //height of tale, n tales
            this.cylinders.push(cylinder);
        }
        this.stats = new Stats();
        this.warnings = new Warnings();

        //start view
        for(let i = 0; i < this.page.cylinders.length; i++){
            this.page.cylinders[i].style.top = `-${this.cylinders[i].startPosition}px`;
        }
        this.page.update(this.score.value, this.result.state, this.result.value,  this.stats.getStatSummary());

        this.page.inpBid.addEventListener("input", this.inputGetValue.bind(this));
        this.page.btnPlay.addEventListener("click", this.clickBtnPlay.bind(this));

        console.log(this);
    }

    inputGetValue(){
        // let val = this.page.inpBid.value;
        // console.log(val);

        // if(val === "") console.log('pusty');
        // if(val == 1) console.log('1');
        // if(val == 0) console.log('0');
    }

    clickBtnPlay(){

    }
}