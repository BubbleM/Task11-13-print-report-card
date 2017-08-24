class Student {
  constructor(name,id,clazz,scores) {
    this.name = name;
    this.id = id;
    this.clazz = clazz;
    this.scores = scores; /*[{course:math,
                              score: 12
                             },{course:english,
                              score: 12
                             }];*/
  }

  getTotalScore(){
    let totalScore;
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