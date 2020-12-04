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
  
  return (result ? result.year : result);
}