// https://www.codewars.com/kata/codewars-style-ranking-system

class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(activityRank) {
    const rankRange = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
    const points = this.progressScoring(activityRank);
    if (!points) return 'Invalid activity rank!';

    return points;
  }

  progressScoring(activityRank) {
    const rankRange = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
    if (!rankRange.includes(activityRank)) return null;

    let points;
    const threshold = this.rank - 2;
    if (this.rank === activityRank) {
      points = 3;
    }
    if (this.rank - 1 === activityRank || this.rank + 1 === activityRank) {
      points = 1;
    }
    if (activityRank < threshold) {
      return null;
    }
    if (activityRank > this.rank) {
      points = rankRange.indexOf(activityRank) - rankRange.indexOf(this.rank);
    }
    return (10 * points * points);
  }
}

const danny = new User();

console.log(danny.rank);
console.log(danny.progress);
console.log(danny.incProgress(-7));
console.log(danny.progress);

console.log(danny.incProgress(-5));
console.log(danny.progress);
console.log(danny.rank);
