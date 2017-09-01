require(['../../lib/addStudent', '../../lib/findStu', '../../lib/deleteStu', '../../lib/modifyStu', '../../lib/calculateStu'], function (addStudent, findStu, deleteStu, modifyStu,calculateStu){
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
  let showAddForm = function () {
    let addStuForm1 = document.getElementById('addStuForm');
    let defaultTable1 = document.getElementById('defaultTable');
    defaultTable1.style.display = 'none';
    addStuForm1.style.display = 'block';
  }
  let addStu = document.getElementById('addStu');
  EventUtil.addHandler(addStu, 'click', showAddForm);

  /*添加学生信息 提交表单事件*/
  function checkAddStuInfo(stuInfo) {
    let pattern = /[\w]+,[\d]{6,},[\d]{4},([\w]{2,18}:[\d]{2,3},)+/;
    if (pattern.test(stuInfo)) {
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
  let submitAddStuForm = function () {
    let str = `${this.name.value},${this.ids.value},${this.clazzId.value},Math:${this.math.value},Chinese:${this.chinese.value},English:${this.english.value},Program:${this.progress.value}`;
    if (checkAddStuInfo(str)){
      addStudent.addStudent(str);
      Messenger().post({
        message: `成功添加学生${this.name.value}的信息!`,
        type: 'info',
        showCloseButton: true
      });
      addStuForm.style.display = 'none';
      document.getElementById('defaultTable').style.display = 'block';
    }
  }
  EventUtil.addHandler(addStuForm, 'submit', submitAddStuForm);

  /*查询事件*/
  function checkStuId(stuId) {
    let pattern = /([\d]{6,})+/;
    if (pattern.test(stuId)) {
      return true;
    } else {
      Messenger().post({
        message: '格式不正确，请重新输入',
        type: 'error',
        showCloseButton: true
      });
    }
  }

  let searchBtn = document.getElementById('searchBtn');
  let searchStuInfo = function () {
    let searchIds = document.getElementById('searchId');
    if(checkStuId(searchIds.value)) {
      findStu.findStu(searchIds.value);
      searchIds.value = '';
    };
  }
  EventUtil.addHandler(searchBtn, 'click', searchStuInfo);

  /*删除学生信息事件*/
  let tbodyNode = document.getElementsByTagName('tbody')[0];
  let confirmDeleteBtn = document.getElementById('confirmDelete');
  let deleteModalNode = document.getElementById('deleteModal');
  let deleteFun = function (node, id) {
    confirmDeleteBtn.setAttribute('data-dismiss', 'modal');
    localStorage.removeItem(id);
    Messenger().post({
      message: `学号为${id}的学生已经删除!`,
      type: 'info',
      showCloseButton: true
    });
    setTimeout(function () {
      tbodyNode.removeChild(node);
    }, 2000);
  }
  EventUtil.addHandler(confirmDeleteBtn, 'click', deleteFun);

  let handleFun = function (e) {
    e = window.event ? window.event : e;
    let ele = e.target ? e.target : e.srcElement;
    if (ele.className === 'remove') {
      let result = deleteStu.deleteStu(ele.parentNode.parentNode.id);
      deleteModalNode.innerText = result.msg;
      deleteFun(ele.parentNode.parentNode, result.id);
    }
    if (ele.className === 'modify') {
      modifyStu.modifyStu(ele.parentNode.parentNode.id);
    }
  };
  EventUtil.addHandler(tbodyNode, 'click', handleFun);

  /*修改学生信息*/
  let confirmModifyBtn = document.getElementById('confirmModify');
  let modifyStuForm = function () {
    let formNode = this.parentNode.parentNode.children[1].children[0];
    let str = `${formNode.names.value},${formNode.ides.value},${formNode.clazzIds.value},Math:${formNode.maths.value},Chinese:${formNode.chinese1.value},English:${formNode.english1.value},Program:${formNode.progress1.value}`;
    if(checkAddStuInfo(str)){
      addStudent.addStudent(str);
      confirmModifyBtn.setAttribute('data-dismiss', 'modal');
      Messenger().post({
        message: `成功学生${formNode.names.value}修改信息!`,
        type: 'info',
        showCloseButton: true
      });
    }
  }
  EventUtil.addHandler(confirmModifyBtn, 'click', modifyStuForm);

  /*总评成绩*/
  let averageScoreNode = document.getElementById('averageScore');
  let mediaScoreNode = document.getElementById('mediaScore');
  let scores = calculateStu.calculateStu();
  averageScoreNode.innerText = scores.averageScore + '分';
  mediaScoreNode.innerText = scores.mediaScore + '分';
});