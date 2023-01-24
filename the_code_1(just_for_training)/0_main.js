//#region node Imports
import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";

//#endregion

//#region internal Imports
import {
  arr_of_complete_absolute_path_of_every_file_inside_the_datbase_folder,
  m_get_the_paths_of_files_exist_in_database_folder_path,
} from "./1_get_the_paths_of_files_exist_in_our_customer_datbase_folder.js";
import {
  m_get_JSON_objects_exists_in_database_files,
  arr_of_JSON_objects_exists_in_database,
} from "./2_from_these_files_paths_get_me_the_exist_JSON_objects.js";
import {
  m_get_data_from_the_database,
  arr_of_javascript_objects_exists_in_database,
} from "./3_from_these_JSON_objects_get_me_javascript_objects_.js";
import {
  arr_of_mechanical_engineer,
  m1_tell_me_how_many_mechanical_engineer_custormers,
  m2_sort_the_mechanical_engineers_based_on_thier_IQ,
  m3_save_this_sorted_array_of_mechanical_engneers_to_the_sorted_datbase,
  // s2_rearang_objects_in_array_of_mechanical_engineer,
} from "./4_from_these_js_objs_get_our_mechanical_engineers.js";
import {
  s1_get_arr_of_doctor_customers,
  arr_of_doctors_customers,
  m1_tell_me_how_many_doctors_customers_in_our_database,
  m2_sort_the_doctors_based_on_thier_IQ,
  m3_save_this_sorted_array_of_doctors_to_the_sorted_datbase,
} from "./5_from_these_js_objs_get_our_Doctors_customers.js";
import { arr_of_accountant_customers } from "./6_from_these_js_objs_get_our_accountants_customers .js";
//#endregion

//#region variables

//#endregion

await sorting_customers_in_our_database_by_thier_personal_attributes();

async function sorting_customers_in_our_database_by_thier_personal_attributes() {
  await m_get_data_from_the_database();

  //#region working on mechanical engineer customers
  m1_tell_me_how_many_mechanical_engineer_custormers();
  m2_sort_the_mechanical_engineers_based_on_thier_IQ();
  await m3_save_this_sorted_array_of_mechanical_engneers_to_the_sorted_datbase();
  //#endregion
  //#region working on Doctors customers

  m1_tell_me_how_many_doctors_customers_in_our_database();
  m2_sort_the_doctors_based_on_thier_IQ();
  await m3_save_this_sorted_array_of_doctors_to_the_sorted_datbase();

  //#endregion

  //#region working with accountants
  m1_tell_me_how_many_accountants_customers_in_our_database();
  console.log(arr_of_accountant_customers);

  //#endregion
}
