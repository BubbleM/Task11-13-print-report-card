"use strict";

let question = require('cli-interact').question;
let getNumber = require('cli-interact').getNumber;
let Clazz = require('./Clazz');
let getMsg = require('./getMsg');
let addStudent = require('./addStudent');
let printReportCard = require('./printClazzReportCard');

let msg = getMsg();
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
    let stuInfoAgain = question(msg.stuInfoError);
    getStuInfo(stuInfoAgain);
  }
}

function getStuId(stuId) {
  let pattern = /([\d]{6,})+/;
  if (pattern.test(stuId)) {
    console.log(printReportCard(stuId, classes));
  } else {
    let stuIdAgain = question(msg.stuIdError);
    getStuId(stuIdAgain);
  }
}

function main() {
  while (true) {
    let answer = getNumber(msg.startMsg);
    switch (answer) {
      case 1:
        let stuInfo = question(msg.addStuInfo);
        getStuInfo(stuInfo);
        break;
      case 2:
        let stuId = question(msg.addStuId);
        getStuId(stuId);
        break;
      case 3:
        return;
      default:
        break;
    }
  }
}

module.exports = main;