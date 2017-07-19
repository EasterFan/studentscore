class ScoreSheet
{
    constructor(studentInfo)
    {
        this.studentInfo = studentInfo;
        this.allAverage = 0;
        this.allMedian = 0;
    }

    averageOfAllStudent() {
        var sum = 0;
        this.studentsInfo.forEach(function(e){
            sum += e.average;
        });
        this.averageOfAll = this.studentsInfo.length === 0 ? 0 : sum/this.studentsInfo.length;
    }

    medianOfAllStudent(){
        if(this.studentsInfo.length === 0){
            this.medianOfAll = 0;
        }
        else if(this.studentsInfo.length === 1){
            this.medianOfAll = this.studentsInfo[0].sumScore;
        }
        else {
            var tmp = this.studentsInfo.sort(function (a, b) {
                return a.sumScore - b.sumScore;
            });

            this.medianOfAll = tmp[Math.floor(tmp.length / 2)].sumScore;
        }
    }


}


module.exports.ScoreSheet = ScoreSheet;