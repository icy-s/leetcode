var climbStairs = function(n) {
    let array = [1,2];
    for(let i =2; i <= n; i++){
        array[i] = array[i - 1] + array[i - 2]
    }
    return array[n-1]
};
