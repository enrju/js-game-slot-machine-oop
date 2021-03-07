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

                //run animation
                this.page.cylinders[i].style.top = `-${this.cylinders[i].nowPosition}px`;
            }

            this.result.check(this.cylinders, this.bid);

            this.score.update(this.result);

            this.stats.addResult(this.result);

            //for future need in animation
            for(let i = 0; i < this.page.cylinders.length; i++){
                this.cylinders[i].startPosition = this.cylinders[i].nowPosition;
            }

            this.page.update(this.score.value, this.result.state, this.result.value,  this.stats.getStatSummary());
        }
    }
}