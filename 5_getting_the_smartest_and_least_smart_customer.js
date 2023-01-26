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
let the_smartest_customer = {};
let the_least_smartest_customer = {};

//#endregion
//#region invoked function

await get_the_smartest_customer_and_its_detailes();
console.log(the_smartest_customer);
//#endregion

//#region functions
async function get_the_smartest_customer_and_its_detailes() {
  await m_read_customer_data_from_databas();
  s_getting_arr_of_customers_IQ();
  //   console.log(arr_of_customers_IQ);
  let max_IQ = Math.max(...arr_of_customers_IQ);
  //   console.log(max_IQ);
  for (let i = 0; i < arr_of_JAVAscript_objects_from_db.length; i++) {
    if (arr_of_JAVAscript_objects_from_db[i].IQ == max_IQ) {
      the_smartest_customer = {
        the_smartest_customer_IQ: arr_of_JAVAscript_objects_from_db[i].IQ,
        the_smartest_customer_Name: arr_of_JAVAscript_objects_from_db[i].name,
        the_smartest_customer_Job: arr_of_JAVAscript_objects_from_db[i].job,
        the_smartest_customer__age: arr_of_JAVAscript_objects_from_db[i].age,
      };
    }
  }
  return the_smartest_customer;
}

function s_getting_arr_of_customers_IQ() {
  for (let i = 0; i < arr_of_JAVAscript_objects_from_db.length; i++) {
    arr_of_customers_IQ.push(arr_of_JAVAscript_objects_from_db[i].IQ);
  }
  return arr_of_customers_IQ;
}
//#endregion
