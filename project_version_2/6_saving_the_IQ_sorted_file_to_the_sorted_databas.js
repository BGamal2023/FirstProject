//@ts-check
import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";

import { arr_of_full_customers_detailes_sorted_by_IQ } from "./5_sorting_the_customers_based_on_thier_IQ.js";
export async function w_save_the_sorted_customer_by_IQ_to_the_database() {
  let path_of_the_file = path.join(the_Absolute_Path_Of_This_Folder, "./the_sorted_database/IQ sorted full customer file.json");
  let JSON_arr = JSON.stringify(arr_of_full_customers_detailes_sorted_by_IQ);
  await fsPromises.writeFile(path_of_the_file, JSON_arr, "utf-8");
}
