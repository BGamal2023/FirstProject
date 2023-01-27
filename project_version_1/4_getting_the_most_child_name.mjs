//#r

import { arr_of_JAVAscript_objects_from_db, m_read_customer_data_from_databas } from "./1_reading_data_from_database.js";

let arr_of_the_child_names_of_our_customers = [];

await m_read_customer_data_from_databas();
s0_get_arr_of_all_customer_child_names();
console.log(arr_of_JAVAscript_objects_from_db);
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
console.log(arr_of_the_child_names_of_our_customers);

function s0_get_arr_of_all_customer_child_names() {
  for (let i = 0; i < arr_of_JAVAscript_objects_from_db.length; i++) {
    arr_of_the_child_names_of_our_customers.push(arr_of_JAVAscript_objects_from_db[i].children);
  }
  return arr_of_the_child_names_of_our_customers;
}

function m1_get_the_most_child_common_name() {
  let count = 0;
  let mostfreq;
  let mostfreq_child_name;
  for (let i = 0; i < arr_of_the_child_names_of_our_customers.length; i++) {
    for (let j = 0; j < arr_of_the_child_names_of_our_customers.length; j++) {}
  }
}
