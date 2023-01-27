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
import {
  m1_tell_me_how_many_customers_in_every_job,
  arr_of_given_customers,
  m2_sort_the_given_customer_based_on_given_personal_attribute,
  m3_save_the_data_of_given_customer_to_the_sorted_database,
} from "./2_sorting&saving_data_to_sorted_database.js";
import { m_get_the_most_common_name_in_our_database } from "./3_getting_the_most_common_name.js";
//#endregion
//#region required tasks
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
// m1_sort_our_customer_accourding_to_thier_personal_attributes("dentist", "IQ");
//#endregion

//#region main function
async function m1_sort_our_customer_accourding_to_thier_personal_attributes(customer_job, sort_by) {
  await m_read_customer_data_from_databas();
  m1_tell_me_how_many_customers_in_every_job(customer_job);
  m2_sort_the_given_customer_based_on_given_personal_attribute(customer_job, sort_by);
  await m3_save_the_data_of_given_customer_to_the_sorted_database(customer_job);
  // m_get_the_most_common_name_in_our_database();
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
