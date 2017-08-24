class Clazz {
  constructor(id){
    this.id = id;
    this.students = [];
  }

  addClazzMember(student){
    this.students.push(student);
  }

  clazzTotalScore() {
    let totalScore = 0;
    this.students.forEach(stu => {
      totalScore += stu.getTotalScore();
    });

    return totalScore;
  }

  clazzAverageScore(){
    return parseInt(this.clazzTotalScore() / this.students.length);
  }

  clazzMedianScore() {
    let scores = [];
    this.students.forEach(member => {
      scores.push(member.getTotalScore());
    });
    scores.sort((a,b) => a - b);
    if (scores.length % 2 !== 0)
      return scores[parseInt(scores.length / 2)];
    return (scores[scores.length / 2] + scores[scores.length / 2 - 1]) / 2;
  }
}

module.exports = Clazz;