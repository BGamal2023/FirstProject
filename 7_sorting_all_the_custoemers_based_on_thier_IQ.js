import { get_and_print_full_details_for_every_customer } from "./6_getting_full_details_for_every_customer.js";
import { arr_of_JAVAscript_objects_from_db, m_read_customer_data_from_databas } from "./1_reading_data_from_database.js";

await m_read_customer_data_from_databas();
console.log(arr_of_JAVAscript_objects_from_db);

function sort_our_customer_based_on_thier_IQ() {
  arr_of_JAVAscript_objects_from_db.sort((a, b) => {
    return b.IQ - a.IQ;
  });

  console.log(arr_of_JAVAscript_objects_from_db);
}
