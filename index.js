const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(records) {
  let result = records.find(
    function(record) {
      if (record.result === "W") {
        return record.result;
      }  
    }
  );
  //print(result);
  return result;
}