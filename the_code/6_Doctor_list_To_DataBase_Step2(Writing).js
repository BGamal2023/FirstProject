//@ts-check
import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";

//...................my imports.......................................
import {
  sorted_Doctors_Jsobj_array,
  Sort_Doctors_Objects_by_IQ,
} from "./5_Doctor_list_From_DataBase_Step1(Reading).js";
import { bahaa_databas_directory_path } from "./4_Mech_Eng_Prepare_mechanical_Engineer_list_widb_Step2.js";
//......................variables.....................................
export let doctors_JsonStr_Object = {};
export const main_Object_for_JsonObjects_file_Doctors = {};
const Doctors_File_Path = path.join(
  bahaa_databas_directory_path,
  "Docors list by IQ.json"
);

//.........................functions...................................

export async function write_Doctors_list_to_database_file() {
  await Sort_Doctors_Objects_by_IQ();
  create_jsonStr_from_jsonObj_Doctors();
  console.log(main_Object_for_JsonObjects_file_Doctors);
  doctors_JsonStr_Object = JSON.stringify(main_Object_for_JsonObjects_file_Doctors);
  console.log(doctors_JsonStr_Object);
  await fsPromises.writeFile(Doctors_File_Path, doctors_JsonStr_Object, "utf8");
}

export function create_jsonStr_from_jsonObj_Doctors() {
  for (let i = 0; i < sorted_Doctors_Jsobj_array.length; i++) {
    main_Object_for_JsonObjects_file_Doctors[i] = sorted_Doctors_Jsobj_array[i];
  }
  return main_Object_for_JsonObjects_file_Doctors;
}
