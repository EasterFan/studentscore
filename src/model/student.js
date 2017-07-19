

'use strict'

class Student
{
    constructor(name, sno, nation, klass, scores)
    {
        this.name = name;
        this.sno = sno;
        this.klass = klass;
        this.nation = nation;
        this.scores = scores;
        this.average = 0;
        this.sumScore = 0;
    }

    calculateSumScore()
    {
        var sum = 0;
        this.scores.forEach(function(item) {
            sum += item.score;
        });

        this.sumScore = sum;
    }

    calculateAverage()
    {
        this.average = this.sumScore/this.scores.length;
    }
}

module.exports.Student = Student;