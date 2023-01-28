//#region Node Importes
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
import { json } from "stream/consumers";

//#endregion

//#region variables
let arr_of_jobs_list_of_the_customers = [];

//#endregion

//#region Invoked functions
await m_read_customer_data_from_databas();
// // console.log(arr_of_JAVAscript_objects_from_db);
// s_get_arr_contains_the_names_of_jobs_of_our_customers();
// console.log(arr_of_jobs_list_of_the_customers);
await w_get_and_save_data_for_every_customer_job_family();

console.log("######i am here###########3");
//#endregion

//#region functions

export async function w_get_and_save_data_for_every_customer_job_family() {
  s_get_arr_contains_the_names_of_jobs_of_our_customers();
  let temp_obj = {};
  let job_name;
  let temp_arr = [];
  for (let i = 0; i < arr_of_jobs_list_of_the_customers.length; i++) {
    temp_arr.length = 0;
    for (let j = 0; j < arr_of_JAVAscript_objects_from_db.length; j++) {
      if (arr_of_JAVAscript_objects_from_db[j].job == arr_of_jobs_list_of_the_customers[i]) {
        temp_obj = {
          Name: arr_of_JAVAscript_objects_from_db[j].name,
          Job: arr_of_JAVAscript_objects_from_db[j].job,
          IQ: arr_of_JAVAscript_objects_from_db[j].IQ,
        };
        temp_arr.push(temp_obj);
      }
    }
    job_name = arr_of_jobs_list_of_the_customers[i];
    //here send the temp_arr to the sorted database
    await s_send_the_data_of_the_customers_to_the_sorted_database(job_name, temp_arr);
  }
}

function s_get_arr_contains_the_names_of_jobs_of_our_customers() {
  for (let i = 0; i < arr_of_JAVAscript_objects_from_db.length; i++) {
    let job_name = arr_of_JAVAscript_objects_from_db[i].job;
    if (!arr_of_jobs_list_of_the_customers.includes(job_name)) {
      arr_of_jobs_list_of_the_customers.push(job_name);
    }
  }

  return arr_of_jobs_list_of_the_customers;
}

async function s_send_the_data_of_the_customers_to_the_sorted_database(job_name, temp_arr) {
  let path_of_the_current_file = path.join(the_Absolute_Path_Of_This_Folder, `./the_sorted_database/ ${job_name} customers.json`);

  let Json_obj_for_current_js_file = JSON.stringify(temp_arr);
  await fsPromises.writeFile(path_of_the_current_file, Json_obj_for_current_js_file, "utf-8");
}

//#endregion
