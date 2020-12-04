const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(records) {
  result = records.find(
    function(record) {
      if (record.result === "W") {
        return record;
      }  
    }
  );
  console.log(result);
  return result;
}