const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(records) {
  let result = records.find(
    function(record) {
      return record.result === "W";
    }
  );
  console.log(result.year);
  return result.year;
}