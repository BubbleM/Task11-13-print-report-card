define(function () {
  function totalScore(scores) {
    let totalScore = 0;
    scores.forEach(item => {
      totalScore += item;
    });

    return totalScore;
  };

  function averageScore(scores){
    return parseInt(totalScore(scores) / scores.length);
  };

  function medianScore(scores) {
    if (scores.length % 2 !== 0)
      return scores[parseInt(scores.length / 2)];
    return (scores[scores.length / 2] + scores[scores.length / 2 - 1]) / 2;
  };

  return {
    totalScore: totalScore,
    averageScore: averageScore,
    medianScore: medianScore
  };

});