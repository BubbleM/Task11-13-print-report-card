function findCourseScore(scores, course) { // { course: 'English', score: 80 }
  let score = 0;
  scores.forEach(item => {
    if (item.course === course) {
      score = item.score;
    }
  });

  return score;
}

function getStuInfo(students) {
  let info = [];

  students.forEach(stu => {
    let stuInfo = '' + stu.name + '|';
    let scores = [];
    scores.push(findCourseScore(stu.scores, 'Math'));
    scores.push(findCourseScore(stu.scores, 'Chinese'));
    scores.push(findCourseScore(stu.scores, 'English'));
    scores.push(findCourseScore(stu.scores, 'Program'));
    scores.push(stu.getAverageScore());
    scores.push(stu.getTotalScore());

    stuInfo += scores.join('|');
    info.push(stuInfo);
  });

  return info.join('\n');
}

function printReportCard(stuId, classes) {
  let clazzId = stuId.substr(0, 4);
  let clazz = classes.find(clazz => clazz.id === clazzId);
  let stuInfo = getStuInfo(clazz.students);
  return `学号为${stuId}学生所在${clazzId}班级成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
${stuInfo}
========================
全班总分平均数：${clazz.clazzAverageScore()}
全班总分中位数：${clazz.clazzMedianScore()}`;
}

module.exports = printReportCard;