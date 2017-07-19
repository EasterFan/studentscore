'use strict'

class ScoreSheet
{
    constructor(studentInfo)
    {
        this.studentInfo = studentInfo;
        this.averageOfAll = 0;
        this.medianOfAll = 0;
    }

    averageOfAllStudent() {
        var sum = 0;
        this.studentInfo.forEach(function(e){
            sum += e.average;
        });
        this.averageOfAll = this.studentInfo.length === 0 ? 0 : sum/this.studentInfo.length;
    }

    medianOfAllStudent(){
        if(this.studentInfo.length === 0){
            this.medianOfAll = 0;
        }
        else if(this.studentInfo.length === 1){
            this.medianOfAll = this.studentInfo[0].sumScore;
        }
        else {
            var tmp = this.studentInfo.sort(function (a, b) {
                return a.sumScore - b.sumScore;
            });

            this.medianOfAll = tmp[Math.floor(tmp.length / 2)].sumScore;
        }
    }


}


module.exports.ScoreSheet = ScoreSheet;