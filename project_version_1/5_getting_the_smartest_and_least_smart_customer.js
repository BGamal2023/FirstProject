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

// await m1_get_and_print_the_most_and_least_smart_customer_in_our_database();
// m2_save_the_data_of_most_and_least_smart_cuatomer_to_the_sorted_database();
//#endregion

//#region functions

async function m1_get_and_print_the_most_and_least_smart_customer_in_our_database() {
  await m_read_customer_data_from_databas();
  s_getting_arr_of_customers_IQ();
  //   console.log(arr_of_customers_IQ);
  w_get_the_smartest_customer_and_his_detailes();
  w_get_the_least_smart_customer_and_his_detailes();
}
async function m2_save_the_data_of_most_and_least_smart_cuatomer_to_the_sorted_database() {
  //#region save the high smart customer

  const path_to_the_file_1 = path.join(the_Absolute_Path_Of_This_Folder, "./the_sorted_database/high IQ customers.json");
  let Json_high_IQ_customer = JSON.stringify(the_smartest_customer);
  await fsPromises.writeFile(path_to_the_file_1, Json_high_IQ_customer, "utf-8");
  //#endregion

  //#region save the low smart customer
  const path_to_the_file_2 = path.join(the_Absolute_Path_Of_This_Folder, "./the_sorted_database/low IQ customer.json");
  let Json_low_IQ_customer = JSON.stringify(the_least_smartest_customer);
  await fsPromises.writeFile(path_to_the_file_2, Json_low_IQ_customer, "utf-8");
  //#endregion
}

function w_get_the_smartest_customer_and_his_detailes() {
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
async function w_get_the_least_smart_customer_and_his_detailes() {
  let the_Min_IQ = Math.min(...arr_of_customers_IQ);
  for (let i = 0; i < arr_of_JAVAscript_objects_from_db.length; i++) {
    if (arr_of_JAVAscript_objects_from_db[i].IQ == the_Min_IQ) {
      the_least_smartest_customer = {
        the_least_smart_customer_IQ: arr_of_JAVAscript_objects_from_db[i].IQ,
        the_least_smart_customer_Name: arr_of_JAVAscript_objects_from_db[i].name,
        the_least_smart_customer_Job: arr_of_JAVAscript_objects_from_db[i].job,
        the_least_smart_cusstomer_Age: arr_of_JAVAscript_objects_from_db[i].age,
      };
    }
  }
  return the_least_smartest_customer;
}

function s_getting_arr_of_customers_IQ() {
  for (let i = 0; i < arr_of_JAVAscript_objects_from_db.length; i++) {
    arr_of_customers_IQ.push(arr_of_JAVAscript_objects_from_db[i].IQ);
  }
  return arr_of_customers_IQ;
}

//#endregion
