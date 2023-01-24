//#region Node import

import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";

//#endregion

//#region internal imports
import {
  arr_of_complete_absolute_path_of_every_file_inside_the_datbase_folder,
  m_get_the_paths_of_files_exist_in_database_folder_path,
} from "./1_get_the_paths_of_files_exist_in_our_customer_datbase_folder.js";
import {
  m_get_JSON_objects_exists_in_database_files,
  arr_of_JSON_objects_exists_in_database,
} from "./2_from_these_files_paths_get_me_the_exist_JSON_objects.js";
//#endregion

//#region variables

export let arr_of_javascript_objects_exists_in_database = [];
let counter_of_numbers_of_javascript_objects_inside_datbas = 0;
//#endregion

//#region invoked functions

// await m_get_all_data_of_customers_from_the_database_and_put_this_data_in_array();
// console.log(arr_of_javascript_objects_exists_in_database);
// console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
// console.log(arr_of_javascript_objects_exists_in_database.length);

//#endregion

//#region functions

export async function m_get_data_from_the_database() {
  await m_get_JSON_objects_exists_in_database_files();
  for (let i = 0; i < arr_of_JSON_objects_exists_in_database.length; i++) {
    let innercontainer = JSON.parse(arr_of_JSON_objects_exists_in_database[i]);
    arr_of_javascript_objects_exists_in_database.push(innercontainer);
  }

  return arr_of_javascript_objects_exists_in_database;
}

//#endregion
