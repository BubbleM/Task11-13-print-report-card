define(function () {
  function getAllStuInfo() {
    let scores = [];
    for (i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let student = JSON.parse(localStorage.getItem(key));
      scores.push(student.totalScore);
    }
    scores.sort((a, b) => a - b);

    return scores;
  }

  function totalScore(scores) {
    return scores.reduce((pre, cur, index, array) => {
      return pre + cur
    });
  }

  function averageScore(scores) {
    return parseInt(totalScore(scores) / localStorage.length);
  }

  function mediaScore(scores) {
    if (scores.length % 2 !== 0)
      return scores[parseInt(scores.length / 2)];
    return (scores[scores.length / 2] + scores[scores.length / 2 - 1]) / 2;
  }

  function calculateStu() {
    let scores = getAllStuInfo();
    let totalscore = totalScore(scores);
    return {
      averageScore: averageScore(scores),
      mediaScore: mediaScore(scores)
    }
  }

  return {
    calculateStu: calculateStu
  };
});