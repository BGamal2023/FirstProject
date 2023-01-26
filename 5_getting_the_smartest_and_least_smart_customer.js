//#region Node imports
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
import { arr_of_JAVAscript_objects_from_db, m_read_customer_data_from_databas } from "./1_reading_data_from_database.js";
//#endregion
//#region variables
let arr_of_customers_IQ = [];

//#endregion
//#region invoked function

get_the_smartest_customer_and_its_detailes();

//#endregion

//#region functions
async function get_the_smartest_customer_and_its_detailes() {
  await m_read_customer_data_from_databas();
  s_getting_arr_of_customers_IQ();
  //   console.log(arr_of_customers_IQ);
  let max_IQ = Math.max(...arr_of_customers_IQ);
  console.log(max_IQ);
}

function s_getting_arr_of_customers_IQ() {
  for (let i = 0; i < arr_of_JAVAscript_objects_from_db.length; i++) {
    arr_of_customers_IQ.push(arr_of_JAVAscript_objects_from_db[i].IQ);
  }
  return arr_of_customers_IQ;
}
//#endregion
