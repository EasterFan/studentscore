/**
 * Created by easter on 17-7-19.
 */

function judgeStuInfo(stuInfo)
{
    // '\p{ming}*, [0-9]{5}, \p{ming}*, \d*, \p{ming}*:[1]?\d{1,2}(, \p{ming}*:[1]?\d{1,2})*$';
    var regex = /[\u4e00-\u9fff]*, [0-9]{3}, [\u4e00-\u9fa5]*, \d*, [\u4e00-\u9fa5]*:[1]?\d{1,2}(, [\u4e00-\u9fa5]*:[1]?\d{1,2})*$/g;

    var result = regex.test(stuInfo);

    return result;

}

function judgeStuNum(stuNum)
{
    var regex = /^[0-9]{3}(, [0-9]{3})*$/g;

    var result = regex.test(stuNum);

    return result;
}


module.exports.judgeStuInfo = judgeStuInfo;
module.exports.judgeStuNum = judgeStuNum;


//小明, 001, 汉族, 2, 语文:66, 数学:66, 英语:66