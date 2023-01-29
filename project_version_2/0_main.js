//#region Node importing

//@ts-check
import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";
//#endregion

//#region internal imports
import { m_read_customer_data_from_databas, arr_of_JAVAscript_objects_from_db } from "./1_reading_data_from_database.js";
import { w_get_and_save_data_for_every_customer_job_family } from "./2_getting_and_saving_details_data_for_similar_job_customers.js";
import { m0_get_high_and_low_IQ_customer_and_save_the_result_to_the_sorted_datbase } from "./5_getting_the_smartes&the_least_smart customer.js";

const arr_List_OfThe_Question = [
  "file of how many mechanical engineer and their names, (sorted according their IQ)",
  "file of how many doctor and their names, (sorted according their IQ)",
  "file of how many accountant and their names, (sorted according their IQ)",
  "file of how many lawyer and their names, (sorted according their IQ)",
  "file of how many teacher and their names, (sorted according their IQ)",
  "file of how many mathematician and their names, (sorted according their IQ)",
  "file of how many programmer and their names, (sorted according their IQ)",
  "file of how many electrical engineer and their names, (sorted according their IQ)",
  "file of how many civil engineer and their names, (sorted according their IQ)",
  "file of how many chemical engineer and their names, (sorted according their IQ)",
  "file of how many dentist and their names, (sorted according their IQ)",
  //"file of how many male and their ages (sorted according to their IQ",
  //"file of  howmany female and their ages (sorted according to their IQ",
  "file of what is the most common name",
  "file of what is the most child name",
  "file of who is the smartest an least smart one (and their jobs and their other details",
  "file of each one with the full details (sorted according to their IQ)",
  "file of each one with the full details (sorted according to their Age)",
];
//#endregion
//#region invoked functions
await m1_sort_our_customer_accourding_to_thier_personal_attributes();
console.log("######i am here###########3");
//#endregion

//#region main function
async function m1_sort_our_customer_accourding_to_thier_personal_attributes() {
  await m_read_customer_data_from_databas();
  w_get_and_save_data_for_every_customer_job_family();
  //w_tell_me_what_is_the_most_common_name();
  //w_tell_me_what_is_the_most_child_name();
  await m0_get_high_and_low_IQ_customer_and_save_the_result_to_the_sorted_datbase();
  //w_get_file_of_each_customer_with_the_full_details();
  //w_sort_this_file_base_on_their_age();
  //w_save_it_to_the_sorted_database();
  //w_sort_the_file_again_by_customer_ages();
  //w_save_the_age_sorted_file_to_the_sorted_database();
}

//for test
// // async function m222_sort_our_customer_accourding_to_thier_personal_attributes(customer_job, sort_by) {
//   await m_read_customer_data_from_databas();
//   //   console.log(arr_of_JAVAscript_objects_from_db);
//   m1_tell_me_how_many_given_customers_inside_database(customer_job);
//   // console.log(arr_of_given_customers);
//   m2_sort_the_given_customers_based_on_given_personal_attribute(customer_job, sort_by);
//   // console.log("After sorting%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
//   // console.log(arr_of_given_customers);
//   await m3_save_the_array_of_given_customer_to_the_sorted_datbase(customer_job);
// }

//#endregion
