function writeCards(arr, eve) {
    let narr = [];
    for (let i=0; i<arr.length; i++) {
        narr.push("Thank you, "+ arr[i] +", for the wonderful "+ eve +" gift!")
    }    
    return narr ;
}

console.log(writeCards(['gg', 'ff', 'ee'], "birthday"))



function countDown(num){
    let i = num; 
    while(i >= 0) {
        console.log(i);
        i--;
    }
}
countDown(10)