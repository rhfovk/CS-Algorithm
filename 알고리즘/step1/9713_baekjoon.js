/*
문제 : Given an odd integer N, calculate the sum of all the odd integers between 1 and N inclusive.

입력 : First line of the input contains T, the number of test cases. Each test case contains a single integer N. N is between 1 and 100.

출력 : For each test case output the value 1+3+….+N.
*/

// 답안

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(x => +x);
let inputs = "10\n1\n3\n5\n7\n9";
let input = inputs.trim().split("\n").map(x => +x);

for(let i = 1; i <= input.length-1; i++){
    let num = input[i]
    let result = 0;

    for(let j = 1; j <= num; j++){
        if(j%2 !== 0){

        result += j

        }
    }
    console.log(result);
}
