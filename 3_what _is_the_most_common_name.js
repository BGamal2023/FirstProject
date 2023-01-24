import { arr_of_JAVAscript_objects_from_db, m_read_customer_data_from_databas } from "./1_read_data_from_database.js";

let arr_of_names_of_our_customers = [];
let obj;
let counter = 0;
let new_array = [];

let count = 0;
let mostfreq;
let mostfreq_name;

await m_read_customer_data_from_databas();
s0_get_arr_of_all_customer_names();
console.log(arr_of_names_of_our_customers);
// m_get_the_most_common_name();

function s0_get_arr_of_all_customer_names() {
  for (let i = 0; i < arr_of_JAVAscript_objects_from_db.length; i++) {
    arr_of_names_of_our_customers.push(arr_of_JAVAscript_objects_from_db[i].name);
  }
  return arr_of_names_of_our_customers;
}

function m1_get_the_most_common_name() {
  for (let i = 0; i < arr_of_names_of_our_customers.length; i++) {
    for (let j = 0; j < arr_of_names_of_our_customers.length; j++) {
      if (
        arr_of_names_of_our_customers[i].substring(0, arr_of_names_of_our_customers[i].indexOf("_")) ==
        arr_of_names_of_our_customers[j].substring(0, arr_of_names_of_our_customers[j].indexOf("_"))
      ) {
        count++;

        if (mostfreq < count) {
          mostfreq = count;
          mostfreq_name = arr_of_names_of_our_customers[i].substring(0, arr_of_names_of_our_customers[i].indexOf("_"));
        }
      }
    }
    count = 0;
  }
  console.log(`the most common name is ${mostfreq_name} , no. of repetiton is = ${mostfreq}`);
}

export async function m_get_the_most_common_name_in_our_database() {
  await m_read_customer_data_from_databas();
  s0_get_arr_of_all_customer_names();
  m1_get_the_most_common_name();
}
