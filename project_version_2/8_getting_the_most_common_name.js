import { arr_of_JAVAscript_objects_from_db, m_read_customer_data_from_databas } from "./1_reading_data_from_database.js";

let arr_of_names_of_our_customers = [];

let new_array = [];
let arr_of_repeated_most_common_used_name = [];

await m_read_customer_data_from_databas();
s0_get_arr_of_all_customer_names();
console.log("the array of names of our customers");
console.log(arr_of_names_of_our_customers);
w_get_the_most_common_name();
// m_get_the_most_common_name();
console.log(arr_of_repeated_most_common_used_name);

function s0_get_arr_of_all_customer_names() {
  for (let i = 0; i < arr_of_JAVAscript_objects_from_db.length; i++) {
    arr_of_names_of_our_customers.push(arr_of_JAVAscript_objects_from_db[i].name);
  }
  return arr_of_names_of_our_customers;
}

export function w_get_the_most_common_name() {
  let obj;
  let counter = 0;
  for (let i = 0; i < arr_of_names_of_our_customers.length; i++) {
    count_i++;
    for (let j = 0; j < arr_of_names_of_our_customers.length; j++) {
      count_j++;
      if (
        arr_of_names_of_our_customers[i].substring(0, arr_of_names_of_our_customers[i].indexOf("_")) ==
        arr_of_names_of_our_customers[j].substring(0, arr_of_names_of_our_customers[j].indexOf("_"))
      ) {
        count++;
        console.log("the count = " + count);

        if (mostfreq < count) {
          console.log("the mostfreq = " + mostfreq);
          mostfreq = count;
          mostfreq_name = {
            Name: arr_of_names_of_our_customers[i],
            frequency: mostfreq,
          };
          arr_of_repeated_most_common_used_name.push(mostfreq_name);
        }
      }
    }
    count = 0;
  }
  console.log("conut_i = " + count_i);
  console.log("count_j = " + count_j);

  console.log(`the most common name is ${mostfreq_name.Name} , no. of repetiton is = ${mostfreq}`);
  return arr_of_repeated_most_common_used_name;
}

export async function m_get_the_most_common_name_in_our_database() {
  await m_read_customer_data_from_databas();
  s0_get_arr_of_all_customer_names();
}
