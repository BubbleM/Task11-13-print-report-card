define(function () {

  function Student(name,id,clazz,scores) {
    this.name = name;
    this.id = id;
    this.clazz = clazz;
    this.scores = scores;
  }

  Student.prototype = {
    getTotalScore: function () {
      let totalScore = 0;
      this.scores.forEach(item => {
        totalScore += item.score;
      });

      return totalScore;
    },
    getAverageScore: function () {
      return this.getTotalScore() / this.scores.length;
    }
  }

  return {
    Student: Student
  };

});