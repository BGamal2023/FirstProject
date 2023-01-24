//#region node import
import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";

//#endregion
//#region Expalination
// i have arr of paths of the json files in database
// i will use fspromis.readfile() method to get the JSON object inside every file
// then i will use JSON.parse() to convert the TEXT IN json object files to javascribt objects...

//#endregion
//#region imports
import {
  arr_of_complete_absolute_path_of_every_file_inside_the_datbase_folder,
  m_get_the_paths_of_files_exist_in_database_folder_path,
} from "./1_get_the_paths_of_files_exist_in_our_customer_datbase_folder.js";
//#endregion
//#region variables
//=========================variables===============================
export let arr_of_JSON_objects_exists_in_database = [];

//#endregion
//#region invoked functions

// await m_get_JSON_objects_exists_in_database_files();
// console.log(arr_of_JSON_objects_exists_in_database);

//#endregion

//#region  Functions

export async function m_get_JSON_objects_exists_in_database_files() {
  //#region Explaination
  // databas has JSON objects
  // i need to switch them from JSON objects to javascript objects
  // to do this i need to use JSON.parse() function.
  //#endregion
  await m_get_the_paths_of_files_exist_in_database_folder_path();
  for (let i = 0; i < arr_of_complete_absolute_path_of_every_file_inside_the_datbase_folder.length; i++) {
    const current_readed_file = await fsPromises.readFile(
      arr_of_complete_absolute_path_of_every_file_inside_the_datbase_folder[i],
      "utf-8"
    );
    arr_of_JSON_objects_exists_in_database.push(current_readed_file);
  }
  return arr_of_JSON_objects_exists_in_database;
}

//#endregion
