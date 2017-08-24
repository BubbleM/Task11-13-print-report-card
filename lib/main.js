"use strict";

let question = require('cli-interact').question;
let getNumber = require('cli-interact').getNumber;
let getMsg = require('./getMsg');

let msg = getMsg();

function checkStuInfo(stuInfo) {
  if (stuInfo === 'haha') {
    return true;
  }
  return false;
}

function getStuInfo(stuInfo) {
  if (checkStuInfo(stuInfo)) {
    console.log(msg.stuInfoSuccess);
  } else {
    let stuInfoAgain = question(msg.stuInfoError);
    getStuInfo(stuInfoAgain);
  }
}

function checkStuId(stuId) {
  if (stuId === 'haha') {
    return true;
  }
  return false;
}

function getStuId(stuId) {
  if (checkStuId(stuId)) {
    console.log(msg.result);
  } else {
    let stuIdAgain = question(msg.stuIdError);
    getStuId(stuIdAgain);
  }
}

function main(){
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
main();