'use strict'

var Student = require('../model/student').Student;

class Allstudent
{
    static init(stuInfo, studentsInfo){ // 由student触发，只执行一次
        var info = stuInfo.split(',');
        var scores = [];
        var j = 0;
        for(var i = 4;i < info.length;i++){
            var score = new Object();

            score.subject = info[i].split(':')[0].trim();
            score.score = Number(info[i].split(':')[1]);

            scores.push(score);
        }
        var student = new Student(info[0], info[1], info[2], info[3], scores);

        student.calculateSumScore();
        student.calculateAverage();

        studentsInfo.push(student);
        return studentsInfo;
    }
}

module.exports.Allstudent = Allstudent;