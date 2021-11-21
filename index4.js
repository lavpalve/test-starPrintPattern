let n = 5;

let leftEmptySpace = n-1;
let resultString = "";

for(let i=1;i<=n;i++){
    let spaceString = ""
    for(let j=0;j<leftEmptySpace;j++){
        spaceString += " ";
    }
    let starString = "";
    let startPrintCount = (2*i)-1;
    for(let j=0;j<startPrintCount;j++){
        starString += "*";
    }
    resultString = spaceString + starString;
    console.log(resultString);
    leftEmptySpace--;
}

leftEmptySpace = n+1;
resultString = "";
leftEmptySpace = 1;
let startPrintCount = (2*(n-1))-1;
for(let i=1;i<=n;i++){
    let spaceString = "";
    for(let j=0;j<leftEmptySpace;j++){
        spaceString += " ";
    }
    let starString = "";
    for(let j=0;j<startPrintCount;j++){
        starString += "*";
    }
    resultString = spaceString + starString;
    console.log(resultString);
    leftEmptySpace++;
    startPrintCount -= 2;
}

