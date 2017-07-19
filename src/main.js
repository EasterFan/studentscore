/**
 * Created by easter on 17-7-18.
 */

'use strict'
var addNewStudentModule = require('../src/addNewStudent');
var showScoreSheetModule = require('../src/showScoreSheet');

var status = 0;
var studentInfo = [];

function myEval(cmd, context, filename, callback) {  // context 和 filename 用不到，不能删，否则callback不完整process.exit()方法报错
    callback(null, cmd);
}

function inputInfo(input)
{
    input = input.trim();

    switch (status)
    {
        // 1.用户第一次进入主菜单，对用户第一次选择作出回应
        case 0:
            switch(input)
            {
                case '1':
                    status = 1;
                    return '请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：';
                    break;
                case '2':
                    status = 3; //change status??
                    return '请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：';
                    break;
                case '3':
                    process.exit();
                    break;
                default:
                    return '1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
            }
            break;
        // 2.用户选择输入学生信息，但是输入信息错误作出回应，及输入正确作出回应
        case 1:
            status = 0;
            var result = addNewStudentModule.addNewStudent(studentInfo,input);
            if (result === ''){
                status = 1;
                return '请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：';
            }else {
                studentInfo = result;
                return '学生' + input.split(',')[0] + '的成绩被添加\n\n1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
            }
            break;

        // 3.用户已得到打印成绩单，系统自动返回主菜单回应
        case 2:
            status = 0;
            console.log(showScoreSheetModule.showScoreSheet(studentInfo,input));
            return '1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
            break;
        default:
            return '1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
    }

}

function main()
{
    console.log("1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：");

    const repl = require('repl');
    const r = repl.start(
        {
            eval: myEval,
            writer: inputInfo
        }
    );
}

main();