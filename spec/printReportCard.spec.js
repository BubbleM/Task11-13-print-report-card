let expect = require('chai').expect;
let Clazz = require('../lib/Clazz');
let printReportCard = require('../lib/printReportCard');
let addStudent = require('../lib/addStudent');

let classes = [];

function find(classes, clazzId) {
  return classes.find(item => item.id === clazzId);
}

function addClasses(clazzId, student) {
  let obj = find(classes, clazzId);
  if (obj) {
    obj.addClazzMember(student);
  } else {
    let clazz = new Clazz(clazzId);
    clazz.addClazzMember(student);
    classes.push(clazz);
  }
}

describe('测试描述', function () {
  const str1 = 'Bubble,140102,1401,Math:21,Chinese:70,English:80,Program:90';
  const str2 = 'Nichole,140203,1402,English:90,Math:23,Chinese:90,Program:29';
  const str3 = 'liumin,140104,1401,English:20,Math:39,Chinese:56,Program:38';
  let student1 = addStudent(str1);
  let student2 = addStudent(str2);
  let student3 = addStudent(str3);

  before(() => {
    addClasses(student1.clazz, student1);
    addClasses(student2.clazz, student2);
    addClasses(student3.clazz, student3);
  });

  it('print reportCard while student is not in the same class', function () {
    let result = printReportCard('140102,140203', classes);
    expect(result).to.be.equal(`成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
Bubble|21|70|80|90|65.25|261
Nichole|23|90|90|29|58|232
========================
全校总分平均数：215
全校总分中位数：232`);
  });

});
