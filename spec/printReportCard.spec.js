let expect = require('chai').expect;
let sinon = require('sinon');
let printReportCard = require('./printReportCard');

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
  const str1 = 'Bubble,140102,1401,English:80,Math:88';
  const str2 = 'Bubble,140102,1401,English:80,Math:88';
  const str1 = 'Bubble,140102,1401,English:80,Math:88';
  const str2 = 'Bubble,140102,1401,English:80,Math:88';
  let student1 = addStudent(str1);
  let student2 = addStudent(str2);
  let student3 = addStudent(str3);
  let student4 = addStudent(str4);

  before(() => {
    addClasses(student1.clazz, student1);
    addClasses(student2.clazz, student2);
    addClasses(student3.clazz, student3);
    addClasses(student4.clazz, student4);
  });

  it('return addStuInfo while user input the number 1', function () {

    expect(main(1, 2)).to.be.equal('');
  });
});
