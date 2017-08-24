class Clazz {
  constructor(id){
    this.id = id;
    this.students = [];
  }

  addClazzMember(student){
    this.students.push(student);
  }

  clazzTotalScore() {
    this.students.reduce((pre, cur, index, array) => {
      return pre.getTotalScore() + cur.getTotalScore();
    });
  }

  clazzAverageScore(){
    return this.clazzAverageScore() / this.students.length;
  }

  clazzMedianScore() {
    let scores = [];
    this.students.forEach(member => {
      scores.push(member.getTotalScore());
    });
    scores.sort(a,b => a - b);
    if (scores.length % 2 !== 0)
      return scores[scores.length / 2];
    return (scores[parseInt(scores.length / 2)] + scores[parseInt(scores.length / 2) + 1]) / 2;
  }
}

module.exports = Clazz;