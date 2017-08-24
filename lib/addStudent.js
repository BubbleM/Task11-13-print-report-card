let Student = require('./Student');
let Clazz = require('./Clazz');

function formatScore(scores) { // [ 'English:80', 'Math:88' ]
  let result = [];

  scores.forEach(item => {
    let splits = item.split(':');
    result.push({
      'course': splits[0],
      'score': splits[1]- 0
    })
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
  let classes = [];
  let stuInfo = formatStuInfo(str);

  let clazz = new Clazz(stuInfo.clazz);
  let student = new Student(stuInfo.name, stuInfo.id, stuInfo.clazz, stuInfo.scores);
  clazz.addClazzMember(student);
  classes.push(clazz);
}

module.exports = addStudent;

let str = 'Bubble,140102,1401,English:80,Math:88';
addStudent(str);