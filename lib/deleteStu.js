define(function () {
  function alertMsg(msg) {
    let result = false;
    if (confirm(msg) === true) result = true;

    return result;
  }

  function deleteStu(id) {
    let stu = JSON.parse(localStorage.getItem(id));
    return {
      msg: `确定删除”学生：${stu.name},学号${stu.id}“的成绩`,
      id: `${stu.id}`
    }
  }

  return {
    deleteStu: deleteStu
  };
});