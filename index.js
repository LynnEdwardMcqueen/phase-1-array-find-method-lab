// code your solution here
const record = [
    { year: "2015", result: "L"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function superBowlWinCheck( yearInfo)  {
    return (yearInfo.result === "W");
  }

  function superbowlWin ( record) {
    let winningInfo;
    winningInfo = record.find(superBowlWinCheck);
    if (winningInfo != undefined) {
        return winningInfo.year;
    } else {
        return undefined;
    }
  }

  console.log(superbowlWin(record));