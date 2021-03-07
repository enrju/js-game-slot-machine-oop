class Stats{
    constructor(){
        this.results = [];
    }

    addResult(result){
        this.results.push(result.state);
    }

    getStatSummary(){
        let nGames = 0;
        let nWins = 0;
        let nLosses = 0;
        let tmp;

        nGames = this.results.length;

        tmp = this.results.filter((item)=>{
            if(item === "win") return true;
            else return false;
        });
        nWins = tmp.length;

        tmp = this.results.filter((item)=>{
            if(item === "loss") return true;
            else return false;
        });
        nLosses = tmp.length;

        return {
            nGames,
            nWins,
            nLosses
        }
    }
}