"use strict";

require(['Clazz', 'addStudent', 'printReportCard'], function (Clazz, addStudent,printReportCard){
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

  function getStuInfo(stuInfo) {
    let pattern = /[\w]+,[\d]{6,},[\d]{4},([\w]{2,18}:[\d]{2,3},)+/;
    if (pattern.test(stuInfo)) {
      let student = addStudent(stuInfo);
      addClasses(student.clazz, student);
      console.log(`学生${student.name}的成绩被添加`);
    } else {
      // let stuInfoAgain = question(msg.stuInfoError);
      // getStuInfo(stuInfoAgain);
      alert('格式不正确，请重新输入');
    }
  }

  function getStuId(stuId) {
    let pattern = /([\d]{6,})+/;
    if (pattern.test(stuId)) {
      console.log(printReportCard(stuId, classes));
    } else {
      // let stuIdAgain = question(msg.stuIdError);
      getStuId(stuIdAgain);
    }
  }

  function main() {
    const str1 = 'Bubble,140102,1401,Math:21,Chinese:70,English:80,Program:90';
    getStuInfo(str1);

    const stuId = '140102';
    getStuId(stuId);
  }
});