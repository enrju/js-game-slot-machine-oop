class App{
    constructor(){
        this.page = new Page();

        this.page.inpBid.addEventListener("input", this.inputGetValue.bind(this));
        this.page.btnPlay.addEventListener("click", this.clickBtnPlay.bind(this));
    }

    inputGetValue(){

    }

    clickBtnPlay(){
        
    }
}