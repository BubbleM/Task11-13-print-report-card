let {averageScore, medianScore} = require('./common');

function findCourseScore(scores, course) { // { course: 'English', score: 80 }
  let score = 0;
  scores.forEach(item => {
    if (item.course === course) {
      score = item.score;
    }
  });

  return score;
}

function getStuInfo(students, stuId) {
  let info = [];

  students.forEach(stu => {
    if (stu.id === stuId) {
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
    }
  });

  return info.join('\n');
}

function find(classes, clazzId) {
  return classes.find(clazz => clazz.id === clazzId);
}

function getScores(classes) {
  let scores = [];
  classes.forEach(clazz => {
    clazz.students.forEach(stu => {
      scores.push(stu.getTotalScore());
    });
  });
  scores.sort((a, b) => a - b)

  return {
    'averageScore': averageScore(scores),
    'medianScore': medianScore(scores)
  }
}

function printReportCard(stusId, classes) {
  let stuIdArr = stusId.split(',');
  let stuInfo = [];
  stuIdArr.forEach(item => {
    let clazzId = item.substr(0, 4);
    let clazz = find(classes, clazzId);
    stuInfo.push(getStuInfo(clazz.students, item));
  });
  let scores = getScores(classes);

  return `成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
${stuInfo.join('\n')}
========================
全校总分平均数：${scores.averageScore}
全校总分中位数：${scores.medianScore}`;
}

module.exports = printReportCard;