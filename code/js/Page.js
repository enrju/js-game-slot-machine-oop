class Page{
    constructor(){
        this.cylinders;
        this.inpBid;
        this.btnPlay;
        this.pWarning;
        this.pScore;
        this.h2Result;
        this.pNGames;
        this.pNWins;
        this.pNLosses;

        this.set();
    }

    set(){
        this.cylinders = document.querySelectorAll("img.cylinder");
        this.inpBid = document.querySelector("input.bid");
        this.btnPlay = document.querySelector("button.play");
        this.pWarning = document.querySelector("p.warning");
        this.pScore = document.querySelector("p.score");
        this.h2Result = document.querySelector("h2.result");
        this.pNGames = document.querySelector("p.nGames");
        this.pNWins = document.querySelector("p.nWins");
        this.pNLosses = document.querySelector("p.nLosses");
    }

    update(scorePoints, result, resultPoints, statSummary){
        this.pScore.innerHTML = `Your score: <span>${scorePoints}</span> points`;
        if(result === "win"){
            this.h2Result.textContent = `you ${result}: ${resultPoints} points`;
        }else{
            this.h2Result.textContent = `you ${result}: ${resultPoints} points`;
        }
        this.pNGames.innerHTML = `<span>${statSummary.nGames}</span> games`;
        this.pNWins.innerHTML = `<span>${statSummary.nWins}</span> wins`;
        this.pNLosses.innerHTML = `<span>${statSummary.nLosses}</span> losses`;
    }
}