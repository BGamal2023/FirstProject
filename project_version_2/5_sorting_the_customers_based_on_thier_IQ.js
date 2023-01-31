//#region Node impotrs

//@ts-check
import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";
import { arr_of_JAVAscript_objects_from_db, m_read_customer_data_from_databas } from "./1_reading_data_from_database.js";
import { unwatchFile } from "fs";
//#endregion

//#region variables
export let arr_of_full_customers_detailes_sorted_by_IQ = [];
//#endregion

//#region  invoked function
// await m_read_customer_data_from_databas();
// w_sort_the_full_customers_based_on_thire_IQ();
// console.log(arr_of_full_customers_detailes_sorted_by_IQ);
// console.log("###########End######################");
//#endregion

//#region functions

export function w_sort_the_full_customers_based_on_thire_IQ() {
  arr_of_full_customers_detailes_sorted_by_IQ = [...arr_of_JAVAscript_objects_from_db];

  arr_of_full_customers_detailes_sorted_by_IQ.sort((a, b) => {
    return a.IQ - b.IQ;
  });
  return arr_of_full_customers_detailes_sorted_by_IQ;
}

//#endregion
