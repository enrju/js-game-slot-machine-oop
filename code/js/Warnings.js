// What is does: store and manage warnings (texts)
class Warnings{
    constructor(){
        //index of warning
        this.index = {
            overbid: 0,
            emptybid: 1
        }

        //warnings
        this.warnings = [
            "you haven't enough points",
            "you didn't put bid, put it please"
        ];
    }

    // What is does: get one warning from table
    //        input: index - index warning in table
    //       output: warning
    getWarning(index) {
        return this.warnings[index];
    }
}