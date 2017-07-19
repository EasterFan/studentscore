/**
 * Created by easter on 17-7-19.
 */

var judgeInfoModule = require('../src/judgeInfo');
var ScoreSheet = require('../src/model/scoreSheet').ScoreSheet;


function showScoreSheet(studentInfo,studentNum)
{
    if(judgeInfoModule.judgeStuNum(studentNum)){
        var stuInfo = getStudentInfoByStuNo(studentInfo,studentNum);

        var scoreSheet = new ScoreSheet(stuInfo);
        scoreSheet.averageOfAllStudent();
        scoreSheet.medianOfAllStudent();

        var result = '成绩单\n姓名|数学|语文|英语|编程|平均分|总分\n========================\n';

        stuInfo.forEach(function(student){
            result += student.name + getSubject(student.scores, '数学')
                + getSubject(student.scores, '语文') + getSubject(student.scores, '英语')
                + getSubject(student.scores, '编程') + '|' + student.average + '|' + student.sumScore + '\n';
        });

        result += '========================\n全班总分平均数：'
            + scoreSheet.averageOfAll + '\n全班总分中位数：' + scoreSheet.medianOfAll;

        return result;
    }
    return '请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：';

}


function getSubject(scores, subject){
    var result = '|-';
    scores.forEach(function(e){
        if(e.subject === subject){
            result = '|' + e.score;
        }
    });
    return result;
}

function getStudentInfoByStuNo(studentInfo,studentsNum){
    var stuInfo = [];
    var stuNo = studentsNum.split(', ');

    studentInfo.forEach(function(e){
        if(stuNo.indexOf(e.sno.trim()) >= 0){
            stuInfo.push(e);
        }
    });

    return stuInfo;
}


module.exports.showScoreSheet = showScoreSheet;
module.exports.getSubject = getSubject;
module.exports.getStudentInfoByStuNo = getStudentInfoByStuNo;
