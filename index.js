const testVar = {};

function testFunc() {
  return "hi";
}

function superBowlWin(records) {
  return records.find(
    function(record) {
      if (record.result === "W") {
        return record.year;
      }  
    }
  );
}