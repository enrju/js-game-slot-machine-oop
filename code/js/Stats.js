// What is does: store and manage statistics of game
class Stats{
    constructor(){
        this.results = [];
    }

    // What is does: add last result into table with all results
    //        input: result - object with result last game (state, value)
    //       output: set property
    addResult(result){
        this.results.push(result.state);
    }

    // What is does: add last result into table with all results
    //        input: none
    //       output: statSummary - summary from all results
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