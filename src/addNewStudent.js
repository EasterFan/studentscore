/**
 * Created by easter on 17-7-19.
 */

var judgeInfoModule = require('../src/judgeInfo');
var AllStudent = require('../src/model/allStudent').Allstudent;


function addNewStudent(studentInfo, input)
{
    if (judgeInfoModule.judgeStuInfo(input))
    {
        var newStudentInfo = AllStudent.init(input,studentInfo);
        //console.log(newStudentInfo);
        return newStudentInfo;
    }
    return '';

}


module.exports.addNewStudent = addNewStudent;