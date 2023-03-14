/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  const res = [];
  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });
  for (let i = 0; i < people.length; i++) {
    res.splice(people[i][1], 0, people[i]);
  }
  return res;
};

const arr = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]

console.log(reconstructQueue(arr)); // [[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]
