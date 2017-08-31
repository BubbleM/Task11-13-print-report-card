require(['../../lib/addStudent', '../../lib/findStu', '../../lib/deleteStu', '../../lib/modifyStu'], function (addStudent, findStu, deleteStu, modifyStu){
  Messenger.options = {
    extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
    theme: 'future'
  }

  let EventUtil = {
    addHandler: function (element, type, handler) {
      if (element.addEventListener) {
        element.addEventListener(type, handler, false);
      } else if (element.attachEvent) {
        element.attachEvent('on' + type, handler);
      } else {
        element['on' + type] = handler;
      }
    },
    removeHandler: function (element, type, handler) {
      if (element.removeEventListener) {
        element.removeEventListener(type, handler, false);
      } else if (element.detachEvent) {
        element.detachEvent('on' + type, handler);
      } else {
        element['on' + type] = null;
      }
    }
  };

  /*点击添加按钮事件*/
  let addStuFun = function () {
    let addStuForm1 = document.getElementById('addStuForm');
    let defaultTable1 = document.getElementById('defaultTable');
    defaultTable1.style.display = 'none';
    addStuForm1.style.display = 'block';
  }
  let addStu = document.getElementById('addStu');
  EventUtil.addHandler(addStu, 'click', addStuFun);

  /*添加学生信息 提交表单事件*/
  function getStuInfo(stuInfo) {
    let pattern = /[\w]+,[\d]{6,},[\d]{4},([\w]{2,18}:[\d]{2,3},)+/;
    if (pattern.test(stuInfo)) {
      addStudent.addStudent(stuInfo);
      return true;
    } else {
      Messenger().post({
        message: '格式不正确，请重新输入',
        type: 'error',
        showCloseButton: true
      });
    }
  }
  let addStuForm = document.getElementsByName('addStuForm')[0];
  let addStuSubmit = function () {
    let str = `${this.name.value},${this.ids.value},${this.clazzId.value},Math:${this.math.value},Chinese:${this.chinese.value},English:${this.english.value},Program:${this.progress.value}`;
    if (getStuInfo(str)){
      Messenger().post({
        message: `成功添加学生${this.name.value}的信息!`,
        type: 'info',
        showCloseButton: true
      });
      addStuForm.style.display = 'none';
      document.getElementById('defaultTable').style.display = 'block';
    }
  }
  EventUtil.addHandler(addStuForm, 'submit', addStuSubmit);

  /*查询事件*/
  let searchBtn = document.getElementById('searchBtn');
  let searchFun = function () {
    let searchIds = document.getElementById('searchId');
    findStu.findStu(searchIds.value);
    searchIds.value = '';
  }
  EventUtil.addHandler(searchBtn, 'click', searchFun);

  /*删除学生信息事件*/
  let tbodyNode = document.getElementsByTagName('tbody')[0];
  let handleFun = function (e) {
    e = window.event ? window.event : e;
    let ele = e.target ? e.target : e.srcElement;
    if (ele.className === 'remove') {
      let result = deleteStu.deleteStu(ele.parentNode.parentNode.id);
      if (result) tbodyNode.removeChild(ele.parentNode.parentNode);
    }
    if (ele.className === 'modify') {
      modifyStu.modifyStu(ele.parentNode.parentNode.id);
    }
  };
  EventUtil.addHandler(tbodyNode, 'click', handleFun);

  /*修改学生信息*/
  let confirmModifyBtn = document.getElementById('confirmModify');
  let submitFun = function () {
    let formNode = this.parentNode.parentNode.children[1].children[0];
    let str = `${formNode.names.value},${formNode.ides.value},${formNode.clazzIds.value},Math:${formNode.maths.value},Chinese:${formNode.chinese1.value},English:${formNode.english1.value},Program:${formNode.progress1.value}`;
    if(getStuInfo(str)){
      confirmModifyBtn.setAttribute('data-dismiss', 'modal');
      Messenger().post({
        message: `成功学生${formNode.names.value}修改信息!`,
        type: 'info',
        showCloseButton: true
      });
    }
  }
  EventUtil.addHandler(confirmModifyBtn, 'click', submitFun);
});