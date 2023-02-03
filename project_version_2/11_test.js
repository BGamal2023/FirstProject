let arr = [1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 3, 3, 3, 3];
let no_of_repeated_item;
let maxfreq = 1;
let the_repeated_item = 0;
let counter = 0;
let arr_of_equal_repeated_items = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == arr[i]) {
      counter++;
      if (maxfreq < counter) {
        maxfreq = counter;
        the_repeated_item = arr[i];
        no_of_repeated_item = counter;
      }
    }
  }
  counter = 0;
}

console.log("the repeated items is = " + the_repeated_item + "   no of repetetion is = " + no_of_repeated_item);
console.log("i am in test file");
