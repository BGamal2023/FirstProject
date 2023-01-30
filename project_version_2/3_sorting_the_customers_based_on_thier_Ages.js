import { arr_of_JAVAscript_objects_from_db, m_read_customer_data_from_databas } from "./1_reading_data_from_database.js";
import { w_get_file_of_each_customer_with_the_full_details } from "./2_getting_file_for_each_customer_full_details.js";

export let arr_of_full_customers_detailes_sorted_by_age = [];

//#region invoked functions
await m_read_customer_data_from_databas();
// console.log(arr_of_JAVAscript_objects_from_db);
w_sort_the_full_customers_based_on_thire_age();
console.log(arr_of_full_customers_detailes_sorted_by_age);
//#endregion
export function w_sort_the_full_customers_based_on_thire_age() {
  for (let i = 0; i < arr_of_JAVAscript_objects_from_db.length; i++) {
    arr_of_full_customers_detailes_sorted_by_age[i] = arr_of_JAVAscript_objects_from_db[i];
  }

  arr_of_full_customers_detailes_sorted_by_age.sort((a, b) => {
    return a.age - b.age;
  });
  return arr_of_full_customers_detailes_sorted_by_age;
}
