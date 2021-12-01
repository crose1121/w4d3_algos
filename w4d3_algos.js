//Bubble Sort! This is the easiest - and the worst - sorting function in JS

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {            // if the left number is bigger than the right then we need to switch
                temp = arr[j];                  // store the left value for a second 
                arr[j] = arr[j + 1];              // reassign the left to the right
                arr[j + 1] = temp;                // reassign the right to the stored temp value which was left
            }
        }
    }
    return arr;
}

var test_a = [3, 7, 5, 4, 0, 2];
console.log(bubbleSort(test_a)); // should display [0, 1, 2, 3, 4, 5]

var test_b = [-3, 7, -2, 5, 0, 14, -8];
console.log(bubbleSort(test_b)); // should display [-8, -3, -2, 0, 5, 7, 14];