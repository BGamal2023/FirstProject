//#region  Node import
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

//#region variables
let s_datbase_folder_path;
let s_arr_of_JSON_files_names = [];
let s_arr_of_JSON_files_paths = [];
let arr_of_JSON_objects_from_db = [];
export let arr_of_JAVAscript_objects_from_db = [];

//#endregion

//#region invoked functions for test
// await m_read_customer_data_from_databas();
// console.log(arr_of_JAVAscript_objects_from_db);
//#endregion
//#region main functions
export async function m_read_customer_data_from_databas() {
  s0_get_database_folder_path();
  await s1_get_path_of_every_json_file_exist_in_the_database();
  await s2_read_JSON_objects_from_datbase();
  s3_convert_json_objects_to_js_objects();
}
//#endregion

//#region service functions

function s0_get_database_folder_path() {
  s_datbase_folder_path = path.join(the_Absolute_Path_Of_This_Folder, "./the_database");
}

async function s1_get_path_of_every_json_file_exist_in_the_database() {
  s_arr_of_JSON_files_names = await fsPromises.readdir(s_datbase_folder_path, "utf-8");
  for (let i = 0; i < s_arr_of_JSON_files_names.length; i++) {
    s_arr_of_JSON_files_paths.push(path.join(s_datbase_folder_path, s_arr_of_JSON_files_names[i].toString()));
  }
  return s_arr_of_JSON_files_paths;
}

async function s2_read_JSON_objects_from_datbase() {
  for (let i = 0; i < s_arr_of_JSON_files_paths.length; i++) {
    let curr_readed_file = await fsPromises.readFile(s_arr_of_JSON_files_paths[i], "utf-8");
    arr_of_JSON_objects_from_db.push(curr_readed_file);
  }

  return arr_of_JSON_objects_from_db;
}

function s3_convert_json_objects_to_js_objects() {
  for (let i = 0; i < arr_of_JSON_objects_from_db.length; i++) {
    arr_of_JAVAscript_objects_from_db.push(JSON.parse(arr_of_JSON_objects_from_db[i]));
  }
  return arr_of_JAVAscript_objects_from_db;
}
//#endregion
