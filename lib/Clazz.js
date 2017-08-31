define(function () {
  
  function Clazz(id) {
    this.id = id;
    this.students = [];
  }
  
  Clazz.prototype = {
    addClazzMember: function(student){
      this.students.push(student);
    },

    clazzTotalScore: function() {
      let totalScore = 0;
      this.students.forEach(stu => {
        totalScore += stu.getTotalScore();
      });

      return totalScore;
    },

    clazzAverageScore: function(){
      return parseInt(this.clazzTotalScore() / this.students.length);
    },

    clazzMedianScore: function() {
      let scores = [];
      this.students.forEach(member => {
        scores.push(member.getTotalScore());
      });
      scores.sort((a,b) => a - b);
      if (scores.length % 2 !== 0)
        return scores[parseInt(scores.length / 2)];
      return (scores[scores.length / 2] + scores[scores.length / 2 - 1]) / 2;
    }
  };

  return {
    Clazz: Clazz
  };

});