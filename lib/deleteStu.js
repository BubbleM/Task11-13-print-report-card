define(function () {
  function alertMsg(msg) {
    let result = false;
    if (confirm(msg) === true) result = true;

    return result;
  }

  function deleteStu(id) {
    let stu = JSON.parse(localStorage.getItem(id));
    let result = alertMsg(`确定删除”学生：${stu.name}+学号${stu.id}“的成绩`);
    if (result) {
      localStorage.removeItem(stu.id);
    }

    return result;
  }

  return {
    deleteStu: deleteStu
  };
});