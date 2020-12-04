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
  
  result ? return result.year : return result;
}