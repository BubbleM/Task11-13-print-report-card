class Student {
  constructor(name,id,clazz,scores) {
    this.name = name;
    this.id = id;
    this.clazz = clazz;
    this.scores = scores;
  }

  getTotalScore(){
    let totalScore = 0;
    this.scores.forEach(item => {
      totalScore += item.score;
    });

    return totalScore;
  }

  getAverageScore(){
    return this.getTotalScore() / this.scores.length;
  }
}

module.exports = Student;