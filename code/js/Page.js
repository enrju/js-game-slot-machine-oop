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

        this.update(0, "win", 0, {nGames: 0, nWins: 0, nLosses: 0});
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
        this.pScore.textContent = `Your score: ${scorePoints} points`;
        if(result === "win"){
            this.h2Result.textContent = `you ${result}: ${resultPoints} points`;
        }else{
            this.h2Result.textContent = `you ${result}: ${resultPoints} points`;
        }
        this.pNGames.textContent = `${statSummary.nGames} games`;
        this.pNWins.textContent = `${statSummary.nWins} wins`;
        this.pNLosses.textContent = `${statSummary.nLosses} losses`;
    }
}