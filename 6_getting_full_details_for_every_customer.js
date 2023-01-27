//#region node import
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

//#region internal import
import { m_read_customer_data_from_databas, arr_of_JAVAscript_objects_from_db } from "./1_reading_data_from_database.js";
//#endregion

//#region variables

//#endregion

//#region invoked functions
await m_read_customer_data_from_databas();
console.log(arr_of_JAVAscript_objects_from_db);
//#endregion

//#region functions
export async function get_and_print_full_details_for_every_customer() {
  await m_read_customer_data_from_databas();
  console.log("our customers befor sorting :- " + arr_of_JAVAscript_objects_from_db);
}
//#endregion
