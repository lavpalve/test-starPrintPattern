let n =11;
let m = n;
for(let i=1;i<=n;i++){
    let resultString = "";
    if(i%2 == 1){
        if(n != i){
            let leftEmptySpace = (m-1)/2;
            for(let j=0;j<leftEmptySpace;j++){
                resultString += " ";
            }
            resultString += "*";
            for(let l=0;l<i-2;l++){
                resultString += " ";
            }
            if(i != 1){
                resultString += "*";
            }
            console.log(resultString);
        }else{
            for(let a=0;a<n;a++){
                resultString += "*";
            }
            console.log(resultString);
        }
    }
    m--;
}