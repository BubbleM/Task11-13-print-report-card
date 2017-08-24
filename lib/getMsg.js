'use strict';

function getMsg() {
  let msg = {
    'startMsg': `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`,
    'addStuInfo': '请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...），按回车提交：\n',
    'stuInfoError': '请按正确的格式输入（格式：姓名, 学号, 班级, 学科: 成绩, ...）：\n',
    'stuInfoSuccess': '学生xxx的成绩被添加',
    'addStuId': '请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n',
    'stuIdError': '请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n'
  }
  return msg;
}

module.exports = getMsg;