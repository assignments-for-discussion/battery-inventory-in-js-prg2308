const assert = require('assert');

function countBatteriesByUsage(cycles) {

  let lowCount = 0, mediumCount = 0, highCount = 0;

  //Conditionals to classify and count battery cycles

  cycles.forEach((cycle) => {
    if (cycle >= 0 && cycle < 310) {
      lowCount++;
    } else if (cycle >= 310 && cycle < 930) {
      mediumCount++;
    } else if (cycle >= 930) {
      highCount++;
    }
  })

  //return count
  return {
    lowCount,
    mediumCount,
    highCount
  };
}

function testBucketingByNumberOfCycles_test_1() {
  console.log('Counting batteries by usage cycles...')
  counts = countBatteriesByUsage([100, 300, 500, 600, 900, 1000]);
  assert(counts["lowCount"] == 2);
  assert(counts["mediumCount"] == 3);
  assert(counts["highCount"] == 1);
  console.log("Finished 1");
}

function testBucketingByNumberOfCycles_test_2() {
  console.log('Counting batteries by usage cycles...')
  counts = countBatteriesByUsage([0, -300, 310, 930, 900, 1000]);
  assert(counts["lowCount"] == 1);
  assert(counts["mediumCount"] == 2);
  assert(counts["highCount"] == 2);
  console.log("Finished 2");
}

testBucketingByNumberOfCycles_test_1();
testBucketingByNumberOfCycles_test_2();
console.log("Executed all test cases")


