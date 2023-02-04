import { arr_of_JAVAscript_objects_from_db, m_read_customer_data_from_databas } from "./1_reading_data_from_database.js";

let arr_of_names_of_our_customers = [];

let new_array = [];
let most_repeated_name;
let obj;
let counter = 0;
let count = 0;
let mostfreq = 1;

// await m_read_customer_data_from_databas();
// s0_get_arr_of_all_customer_names();
// console.log("the array of names of our customers");
// console.log(arr_of_names_of_our_customers);
// w_get_the_most_common_name();
// // m_get_the_most_common_name();
// console.log(arr_of_repeated_most_common_used_name);

function s0_get_arr_of_all_customer_names() {
  for (let i = 0; i < arr_of_JAVAscript_objects_from_db.length; i++) {
    arr_of_names_of_our_customers.push(arr_of_JAVAscript_objects_from_db[i].name);
  }
  return arr_of_names_of_our_customers;
}

export function w_get_the_most_common_name() {
  for (let i = 0; i < arr_of_names_of_our_customers.length; i++) {
    for (let j = 0; j < arr_of_names_of_our_customers.length; j++) {
      if (
        arr_of_names_of_our_customers[i].substring(0, arr_of_names_of_our_customers[i].indexOf("_")) ==
        arr_of_names_of_our_customers[j].substring(0, arr_of_names_of_our_customers[j].indexOf("_"))
      ) {
        counter++;

        if (mostfreq < counter) {
          mostfreq = counter;
          most_repeated_name = arr_of_names_of_our_customers[i];
        }
      }
    }
    counter = 0;
  }

  console.log(`the most common name is ${most_repeated_name} , no. of repetiton is = ${mostfreq}`);
}

export async function m_get_the_most_common_name_in_our_database() {
  await m_read_customer_data_from_databas();
  s0_get_arr_of_all_customer_names();
}
