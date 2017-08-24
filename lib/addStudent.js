let Student = require('./Student');

function formatScore(scores) { // [ 'English:80', 'Math:88' ]
  let result = [];

  scores.forEach(item => {
    let splits = item.split(':');
    let obj = {};
    obj[splits[0]] = splits[1]- 0;
    result.push(obj);
  });

  return result;
}

function formatStuInfo(str) {
  let infos = str.split(',');

  return {
    'name': infos[0],
    'id': infos[1],
    'clazz': infos[2],
    'scores': formatScore(infos.slice(3))
  }
}

function addStudent(str) {
  let stuInfo = formatStuInfo(str);
  let student = new Student(stuInfo.name, stuInfo.id, stuInfo.clazz, stuInfo.scores);

  return student;
}

module.exports = addStudent;