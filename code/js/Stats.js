class Stats{
    constructor(){
        this.results = [];
    }

    addResult(result){
        this.results.push(result);
    }

    getStatSummary(){
        let NGames = 0;
        let NWins = 0;
        let NLosses = 0;
        let tmp;

        NGames = this.results.length;

        tmp = this.results.filter((item)=>{
            if(item === "win") return true;
            else return false;
        });
        NWins = tmp.length;

        tmp = this.results.filter((item)=>{
            if(item === "loss") return true;
            else return false;
        });
        NLosses = tmp.length;

        return {
            NGames,
            NWins,
            NLosses
        }
    }
}