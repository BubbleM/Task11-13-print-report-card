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
}

let addStuFun = function () {
  let addStuForm1 = document.getElementById('addStuForm');
  let defaultTable1 = document.getElementById('defaultTable');
  defaultTable1.style.display = 'none';
  addStuForm1.style.display = 'block';
}

let addStu = document.getElementById('addStu');
EventUtil.addHandler(addStu, 'click', addStuFun);