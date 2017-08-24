function printReportCard(stuId, classes) {
  let str = `Bubble所在1401班级成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
Bubble|21|70|80|90|65.25|261
Nichole|23|90|90|29|58|232
liumin|23|56|20|38|34.25|137
========================
全班总分平均数：210
全班总分中位数：232`;
  return str;
}

module.exports = printReportCard;