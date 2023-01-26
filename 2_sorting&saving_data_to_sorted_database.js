//#region Node import

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
//#region

//#region variables
let s_customer_obj;
export let arr_of_given_customers = [];

//#endregion

//#region invoked function
// await m1_tell_me_how_many_given_customers_inside_database("mechanical engineer");
// m2_sort_the_given_customers_based_on_given_personal_attribute("mechanical engineer");
// console.log(arr_of_given_customers);
// await m2_save_the_array_of_given_customer_to_the_sorted_datbase();
// console.log(arr_of_given_customers);

//#endregion
//#region functions
export function m1_tell_me_how_many_of_given_customer_inside_database(customer_job) {
  for (let i = 0; i < arr_of_JAVAscript_objects_from_db.length; i++) {
    if (arr_of_JAVAscript_objects_from_db[i].job == customer_job) {
      s_customer_obj = {
        Name: arr_of_JAVAscript_objects_from_db[i].name,
        Job: arr_of_JAVAscript_objects_from_db[i].job,
        IQ: arr_of_JAVAscript_objects_from_db[i].IQ,
      };

      arr_of_given_customers.push(s_customer_obj);
    }
  }
  arr_of_given_customers.push({
    the_total_numbers: arr_of_given_customers.length,
  });
  console.log(`the number of our ${customer_job} is = ` + (arr_of_given_customers.length - 1));
  return arr_of_given_customers;
}

export function m2_sort_the_given_customer_based_on_given_personal_attribute(customer_job, sort_by) {
  console.log("the sort_by value is= " + sort_by);

  if (sort_by == "IQ") {
    arr_of_given_customers.sort(function (a, b) {
      return b.IQ - a.IQ;
    });
  } else {
    console.log("pls , enter avalid value");
  }
}
export async function m3_save_the_data_of_given_customer_to_the_sorted_database(customer_job) {
  let path_to_given_customer_file = path.join(the_Absolute_Path_Of_This_Folder, `./the_sorted_database/${customer_job}.json`);

  let JSON_arr_of_given_customers = JSON.stringify(arr_of_given_customers);
  await fsPromises.writeFile(path_to_given_customer_file, JSON_arr_of_given_customers, "utf-8");
}

// function s1_get_arr_of_given_customer(customer_job) {
//   for (let i = 0; i < arr_of_JAVAscript_objects_from_db.length; i++) {
//     if (arr_of_JAVAscript_objects_from_db[i].job == customer_job) {
//       s_customer_obj = {
//         Name: arr_of_JAVAscript_objects_from_db[i].name,
//         Job: arr_of_JAVAscript_objects_from_db[i].job,
//         IQ: arr_of_JAVAscript_objects_from_db[i].IQ,
//       };

//       arr_of_given_customers.push(s_customer_obj);
//     }
//   }
//   console.log(arr_of_given_customers);
//   return arr_of_given_customers;
// }

//#endregion
