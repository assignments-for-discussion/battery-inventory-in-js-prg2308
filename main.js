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

function testBucketingByNumberOfCycles() {
  console.log('Counting batteries by usage cycles...')
  counts = countBatteriesByUsage([100, 300, 500, 600, 900, 1000]);
  assert(counts["lowCount"] == 2);
  assert(counts["mediumCount"] == 3);
  assert(counts["highCount"] == 1);
  console.log("Done counting :)");
}

testBucketingByNumberOfCycles();
