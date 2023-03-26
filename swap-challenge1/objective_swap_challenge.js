const swap = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

let myArray = [24, 0, 12, 90, 10];
swap(myArray, 1, 4);
console.log("swap array:",myArray); 