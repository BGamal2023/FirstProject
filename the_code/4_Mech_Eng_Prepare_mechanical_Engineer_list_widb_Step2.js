import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";
//.......................................................................................
import {
  sortTheMechanicalEngineerGroupBy_IQ,
  mechanical_Engineer_JsObj_arr,
} from "./3_Mech_Eng_Prepare_mechanical_Engineer_list_rfdb_Step1.js";

//.................widb >>write in database.............
// .....................................variables.............

export const bahaa_databas_directory_path = path.join(
  the_Absolute_Path_Of_This_Folder,
  "../databasebahaa"
);
const Mechanical_Engineer_File_Path = path.join(
  bahaa_databas_directory_path,
  "mechanical Engineer list by IQ.json"
);
export let mechanical_Engineer_JsonStr_Object = {};
const main_Object_for_JsonObjects_file_Mech_Eng = {};

//.................................... functions.................................

// .....fun_1
export async function write_Mecha_Eng_list_to_database_file() {
  await sortTheMechanicalEngineerGroupBy_IQ();
  create_jsonStr_from_jsonObj_Mech_Eng();

  await fsPromises.writeFile(
    Mechanical_Engineer_File_Path,
    mechanical_Engineer_JsonStr_Object,
    "utf-8"
  );
}
// .....fun_2

export function create_jsonStr_from_jsonObj_Mech_Eng() {
  for (let i = 0; i < mechanical_Engineer_JsObj_arr.length; i++) {
    main_Object_for_JsonObjects_file_Mech_Eng[i] = mechanical_Engineer_JsObj_arr[i];
  }
  mechanical_Engineer_JsonStr_Object = JSON.stringify(
    main_Object_for_JsonObjects_file_Mech_Eng
  );
}
