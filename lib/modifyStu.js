define(function () {
  function modifyStu(id) {
    let stu = JSON.parse(localStorage.getItem(id));
    let html = `<form class="form-inline" name="modifyStuForm">
          <div class="form-group">
            <label for="names">姓名</label>
            <input type="text" class="form-control" id="names" value=${stu.name}>
          </div>
          <div class="form-group">
            <label for="ides">学号</label>
            <input type="text" class="form-control" id="ides" value=${stu.id}>
          </div>
          <div class="form-group">
            <label for="clazzIds">班级</label>
            <input type="text" class="form-control" id="clazzIds" value=${stu.clazz}>
          </div>
          <div class="form-group">
            <label for="maths">数学</label>
            <input type="text" class="form-control" id="maths" value=${stu.scores[0].score}>
          </div>
          <div class="form-group">
            <label for="chinese1">语文</label>
            <input type="text" class="form-control" id="chinese1" value=${stu.scores[1].score}>
          </div>
          <div class="form-group">
            <label for="english1">英语</label>
            <input type="text" class="form-control" id="english1" value=${stu.scores[2].score}>
          </div>
          <div class="form-group">
            <label for="progress1">编程</label>
            <input type="text" class="form-control" id="progress1" value=${stu.scores[3].score}>
          </div>
          <button type="submit" class="btn btn-default" style="display: none;">Send invitation</button>
        </form>`;
    let nodes = document.getElementsByClassName('modal-body')[0];
    nodes.innerHTML = html;
  }
  
  return {
    modifyStu: modifyStu
  };
});