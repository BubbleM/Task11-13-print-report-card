"use strict";

let question = require('cli-interact').question;
let getNumber = require('cli-interact').getNumber;
let getMsg = require('./getMsg');

let msg = getMsg();

function getStuInfo(stuInfo) {
  let pattern = /[\w]+,[\d]{3},[\w]+,([\w]{2,8}:[\d]{2,3},)+/;
  if (pattern.test(stuInfo)) {
    console.log(msg.stuInfoSuccess);
  } else {
    let stuInfoAgain = question(msg.stuInfoError);
    getStuInfo(stuInfoAgain);
  }
}

function getStuId(stuId) {
  let pattern = /([\d]{3},)+/;
  if (pattern.test(stuId)) {
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