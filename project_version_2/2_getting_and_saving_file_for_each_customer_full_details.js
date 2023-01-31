//#region Node importing

//@ts-check
import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";
import { arr_of_JAVAscript_objects_from_db } from "./1_reading_data_from_database.js";
//#endregion

//#region varaibles
export let arr_of_full_customers_detailes = [];

let arr_of_full_customers_detailes_sorted_by_IQ = [];
//#endregion

//#region invoked function

//#endregion

//#region functions

export function w_get_file_of_each_customer_with_the_full_details() {
  arr_of_full_customers_detailes = [...arr_of_JAVAscript_objects_from_db];
}

export async function w_save_the_file_of_each_customer_with_full_details_to_the_sorted_database() {
  let path_of_the_file = path.join(the_Absolute_Path_Of_This_Folder, "./the_sorted_database/full customers detailes.json");
  let Json_array = JSON.stringify(arr_of_full_customers_detailes);
  await fsPromises.writeFile(path_of_the_file, Json_array, "utf-8");
}

//#endregion
