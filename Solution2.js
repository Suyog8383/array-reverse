let arr=[12,100,5,6,800];
function reverseArray(arr){
    let i=0;
    let j=arr.length-1;
    while(i<j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--
    }
    return arr;
}
console.log(reverseArray(arr));
