class App{
    constructor(){
        this.page = new Page();
        this.bid = new Bid();

        this.page.inpBid.addEventListener("input", this.inputGetValue.bind(this));
        this.page.btnPlay.addEventListener("click", this.clickBtnPlay.bind(this));
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