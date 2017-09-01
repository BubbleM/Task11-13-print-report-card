define(function () {
  function findRecordIsInPage (stuId) {
    let result = false;
    let node = document.getElementById(stuId);
    if (node) {
      result = true;
    }

    return result;
  }

  function insertStuRecord(stuId) {
    let stu = JSON.parse(localStorage.getItem(stuId));
    if (stu === null) {
      Messenger().post({
        message: `抱歉，并没有学号为${stuId}的学生的相关信息，请检查您的输入`,
        type: 'error',
        showCloseButton: true
      });
    }
    if (findRecordIsInPage(stuId)) {
      Messenger().post({
        message: `抱歉，学号为${stuId}的学生的相关信息已经在页面中显示，请不要重复查询`,
        type: 'info',
        showCloseButton: true
      });
    } else {
      let html = `<tr id="${stu.id}">
                    <td>${stu.id}</td>
                    <td>${stu.name}</td>
                    <td>${stu.clazz}</td>
                    <td>${stu.scores[0].score}</td>
                    <td>${stu.scores[1].score}</td>
                    <td>${stu.scores[2].score}</td>
                    <td>${stu.scores[3].score}</td>
                    <td>${stu.averageScores}</td>
                    <td>${stu.totalScore}</td>
                    <td><span data-toggle="modal" data-target="#myModal" class="modify" style="color: #337ab7">修改</span></td>
                    <td><a data-toggle="modal" data-target="#myModal1" style="color: #337ab7" href="javascript:void(0)" class="remove">删除</a></td>
                 </tr>`;
      let tbodyNode = document.getElementsByTagName('tbody')[0];
      let trNode = document.createElement('tr');
      trNode.setAttribute('id', `${stu.id}`);
      trNode.innerHTML = html;
      tbodyNode.append(trNode);
    }
  }

  function findStu(str) {
    let strIds = str.split(',');
    for (let i = 0; i < strIds.length; i++) {
      insertStuRecord(strIds[i]);
    }
  }

  return {
    findStu: findStu
  };
});