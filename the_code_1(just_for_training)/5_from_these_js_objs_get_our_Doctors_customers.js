//#region node imports
import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";

//#endregion

import { arr_of_javascript_objects_exists_in_database } from "./3_from_these_JSON_objects_get_me_javascript_objects_.js";

export let arr_of_doctors_customers = [];
let S_temp_doctor_obj;

export function s1_get_arr_of_doctor_customers() {
  for (let i = 0; i < arr_of_javascript_objects_exists_in_database.length; i++) {
    if (arr_of_javascript_objects_exists_in_database[i].job == "doctor") {
      S_temp_doctor_obj = {
        Name: arr_of_javascript_objects_exists_in_database[i].name,
        Job: arr_of_javascript_objects_exists_in_database[i].job,
        IQ: arr_of_javascript_objects_exists_in_database[i].IQ,
      };
      arr_of_doctors_customers.push(S_temp_doctor_obj);
    }
  }

  return arr_of_doctors_customers;
}

export function m1_tell_me_how_many_doctors_customers_in_our_database() {
  s1_get_arr_of_doctor_customers();
  console.log("Number_of_docotors_in_our_database is = " + arr_of_doctors_customers.length);
}
export function m2_sort_the_doctors_based_on_thier_IQ() {
  arr_of_doctors_customers.sort((a, b) => {
    return b.IQ - a.IQ;
  });
  for (let i = 0; i < arr_of_doctors_customers.length; i++) {
    arr_of_doctors_customers[i] = {
      Doctor_Number: i + 1,
      Name: arr_of_doctors_customers[i].Name,
      IQ: arr_of_doctors_customers[i].IQ,
    };
  }

  return arr_of_doctors_customers;
}

export async function m3_save_this_sorted_array_of_doctors_to_the_sorted_datbase() {
  let path_of_doctor_file = path.join(the_Absolute_Path_Of_This_Folder, "../sorted_database/doctors.json");
  let Json_arr_of_doctors = JSON.stringify(arr_of_doctors_customers);
  await fsPromises.writeFile(path_of_doctor_file, Json_arr_of_doctors, "utf-8");
}
