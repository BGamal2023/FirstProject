//@ts-check
import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";
import { arr_of_full_customers_detailes } from "./2_getting_file_for_each_customer_full_details.js";
import { m_read_customer_data_from_databas } from "./1_reading_data_from_database.js";
import {
  arr_of_full_customers_detailes_sorted_by_age,
  w_sort_the_full_customers_based_on_thire_age,
} from "./3_sorting_the_customers_based_on_thier_Ages.js";

//#region invoked functions
await m_read_customer_data_from_databas();
w_sort_the_full_customers_based_on_thire_age();
w_save_the_age_sorted_full_customer_file_to_the_sorted_database();
//#endregion

export async function w_save_the_age_sorted_full_customer_file_to_the_sorted_database() {
  let path_of_the_file = path.join(the_Absolute_Path_Of_This_Folder, "./the_sorted_database/age sorted full customer file.json");
  let JSON_array = JSON.stringify(arr_of_full_customers_detailes_sorted_by_age);
  await fsPromises.writeFile(path_of_the_file, JSON_array, "utf-8");
}
