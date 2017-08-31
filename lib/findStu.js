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
      alert(`抱歉，并没有学号为${stuId}的学生的相关信息，请检查您的输入`);
    }
    if (findRecordIsInPage(stuId)) {
      alert(`抱歉，学号为${stuId}的学生的相关信息已经在页面中显示，请不要重复查询`);
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
                    <td><a href="javascript:void(0)" class="modify">修改</a></td>
                    <td><a href="javascript:void(0)" class="remove">删除</a></td>
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