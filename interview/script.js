let arr = [2,4,5,1,7,87,6];

const smallElemt = (arr) => {
    let min = arr[0];
    for(let i =1; i<arr.length; i++){
        if(arr[i]< min){
            min = arr[i];
        }
    }
    console.log(min);
}

smallElemt(arr);