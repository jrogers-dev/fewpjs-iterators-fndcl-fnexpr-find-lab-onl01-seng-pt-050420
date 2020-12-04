const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(records) {
  return records.find(
    function(record) {
      if (record.result === "W") {
        return record;
      }  
    }
  );
}