//#region node import
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

//#region internal import
import { m_read_customer_data_from_databas, arr_of_JAVAscript_objects_from_db } from "./1_reading_data_from_database.js";
//#endregion

//#region variables
let arr_of_sorted_customers_based_on_thier_IQ = [];
let arr_of_sorted_customers_based_on_thier_Ages = [];
//#endregion

//#region invoked functions
// await w_get_and_print_full_details_for_every_customer();
// w_sort_our_customers_based_on_thier_IQ();
// // console.log("%%%%%%%%%%%%after sorting_1%%%%%%%%%%%%%%%%%%");
// // console.log(arr_of_sorted_customers_based_on_thier_IQ);
// console.log("%%%%%%%%%%%%after sorting_2%%%%%%%%%%%%%%%%%%");
// // console.log(arr_of_sorted_customers_based_on_thier_Ages);
// await save_our_IQ_sorted_customers_to_the_sorted_database();
// await w_save_our_AGE_sorted_customers_to_the_sorted_database();

//#endregion

//#region functions
export async function w_get_and_print_full_details_for_every_customer() {
  await m_read_customer_data_from_databas();
  console.log(arr_of_JAVAscript_objects_from_db);
}

function w_sort_our_customers_based_on_thier_IQ() {
  arr_of_sorted_customers_based_on_thier_IQ = arr_of_JAVAscript_objects_from_db.sort((a, b) => {
    return a.IQ - b.IQ;
  });
}
function w_sort_our_customers_based_on_thier_Ages() {
  arr_of_sorted_customers_based_on_thier_Ages = arr_of_JAVAscript_objects_from_db.sort((a, b) => {
    return b.age - a.age;
  });
}

async function save_our_IQ_sorted_customers_to_the_sorted_database() {
  w_sort_our_customers_based_on_thier_IQ();
  let path_of_sorted_IQ_customers = path.join(
    the_Absolute_Path_Of_This_Folder,
    "./the_sorted_database/All_customers_sorted_by_IQ.json"
  );
  let arr_of_Json_sorted_IQ_customers = JSON.stringify(arr_of_sorted_customers_based_on_thier_IQ);
  console.log(arr_of_Json_sorted_IQ_customers);
  await fsPromises.writeFile(path_of_sorted_IQ_customers, arr_of_Json_sorted_IQ_customers, "utf-8");
}
async function w_save_our_AGE_sorted_customers_to_the_sorted_database() {
  w_sort_our_customers_based_on_thier_Ages();
  let path_of_Age_sorted_customers = path.join(
    the_Absolute_Path_Of_This_Folder,
    "./the_sorted_database/All_customers_sorted_by_Age.json"
  );

  let arr_of_JSON_the_Age_sorted_customers = JSON.stringify(arr_of_sorted_customers_based_on_thier_Ages);
  await fsPromises.writeFile(path_of_Age_sorted_customers, arr_of_JSON_the_Age_sorted_customers, "utf-8");
}
