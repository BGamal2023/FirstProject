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
import { w_get_and_save_data_for_every_customer_job_family } from "./7_getting_and_saving_details_data_for_similar_job_customers.js";
import { m0_get_high_and_low_IQ_customer_and_save_the_result_to_the_sorted_datbase } from "./10_getting_the_smartes&the_least_smart customer.js";
import {
  arr_of_full_customers_detailes,
  w_get_file_of_each_customer_with_the_full_details,
  w_save_the_file_of_each_customer_with_full_details_to_the_sorted_database,
} from "./2_getting_and_saving_file_for_each_customer_full_details.js";
import { w_sort_the_full_customers_based_on_thire_age } from "./3_sorting_the_customers_based_on_thier_Ages.js";
import { w_save_the_age_sorted_full_customer_file_to_the_sorted_database } from "./4_saving_the_Age_sorted_file_to_the_sorted_database.js";
import { w_sort_the_full_customers_based_on_thire_IQ } from "./5_sorting_the_customers_based_on_thier_IQ.js";
import { w_save_the_sorted_customer_by_IQ_to_the_database } from "./6_saving_the_IQ_sorted_file_to_the_sorted_databas.js";
import { w_get_the_most_common_name, w_sort_the_customer_based_on_thier_jobs } from "./8_getting_the_most_common_name.js";
import {
  arr_of_childs_objects,
  arr_of_extracted_childs_names,
  w0_get_arr_of_childs_names,
  w1_extract_childs_names_from_arr_of_childs_objecsts,
  m_get_the_most_child_name,
} from "./9_getting_the_most_child_name.js";

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

// console.log(arr_of_JAVAscript_objects_from_db);
// console.log(arr_of_childs_objects);

console.log("######i am here###########3");
console.log("main file");

//#region main function
async function m1_sort_our_customer_accourding_to_thier_personal_attributes() {
  await m_read_customer_data_from_databas();
  w_get_file_of_each_customer_with_the_full_details();
  w_save_the_file_of_each_customer_with_full_details_to_the_sorted_database();
  w_sort_the_full_customers_based_on_thire_age();
  w_save_the_age_sorted_full_customer_file_to_the_sorted_database();
  w_sort_the_full_customers_based_on_thire_IQ();
  w_save_the_sorted_customer_by_IQ_to_the_database();
  w_sort_the_customer_based_on_thier_jobs();
  w_get_and_save_data_for_every_customer_job_family();
  // w_get_the_most_common_name();
  // m_get_the_most_child_name();
  //####################################################

  //w_tell_me_what_is_the_most_common_name();
  //w_tell_me_what_is_the_most_child_name();
  // m0_get_high_and_low_IQ_customer_and_save_the_result_to_the_sorted_datbase();
}

//#endregion
