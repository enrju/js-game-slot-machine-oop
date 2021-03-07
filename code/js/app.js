// What is does: application - store and manage objects and control application
class App{
    constructor(){
        this.page = new Page();
        this.bid = new Bid();
        this.score = new Score(100);                //start score = 100 points
        this.result = new Result(20);               //winFactor = x 20
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
    }

    // What is does: callback for event "input" for <input>
    //               check that is <input> empty or overbid
    //        input: none
    //       output: none
    inputGetValue(){
        this.bid.set(this.page.inpBid);
        let isEmpty = this.bid.checkEmpty();
        let isOverbid = this.bid.checkOverbid(this.score.value);
        
        if(isEmpty){
            this.page.pWarning.textContent = this.warnings.getWarning(this.warnings.index.emptybid);
        }
        else if(isOverbid){
            this.page.pWarning.textContent = this.warnings.getWarning(this.warnings.index.overbid);
            if(this.score.value == 0){
                alert("GAME OVER");
                document.location.reload();
            }
        }
        else{
            this.page.pWarning.textContent = "";
        }
    }

    // What is does: callback for event "click" for <button>
    //               activities after run game (click "Play")
    //        input: none
    //       output: none
    clickBtnPlay(){
        this.bid.set(this.page.inpBid);
        let isEmpty = this.bid.checkEmpty();
        let isOverbid = this.bid.checkOverbid(this.score.value);

        if(isEmpty){
            this.page.pWarning.textContent = this.warnings.getWarning(this.warnings.index.emptybid);
        }
        else if(isOverbid){
            this.page.pWarning.textContent = this.warnings.getWarning(this.warnings.index.overbid);
            if(this.score.value == 0){
                alert("GAME OVER");
                document.location.reload();
            }
        }
        else{
            this.page.pWarning.textContent = "";

            for(let i = 0; i < this.page.cylinders.length; i++){
                this.cylinders[i].nowPosition = this.cylinders[i].calcPosition();

                //here should be animation, but is obnly set end positions of cylinders
                this.page.cylinders[i].style.top = `-${this.cylinders[i].nowPosition}px`;
            }

            this.result.check(this.cylinders, this.bid);

            this.score.update(this.result);

            this.stats.addResult(this.result);

            //need for animation - leave it
            for(let i = 0; i < this.page.cylinders.length; i++){
                this.cylinders[i].startPosition = this.cylinders[i].nowPosition;
            }

            this.page.update(this.score.value, this.result.state, this.result.value,  this.stats.getStatSummary());
        }
    }
}