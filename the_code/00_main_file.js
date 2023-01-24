// @ts-ignore

import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";

//========================My Imports =================================================
// import {
//   create_Paths_files_array_for_reading_from_db,
//   paths_files_array,
// } from "./prepare_paths_file_To_Read_From_database.js";

import {
  sortTheMechanicalEngineerGroupBy_IQ,
  get_Mech_Eng_from_the_All_jsObj,
  mechanical_Engineer_JsObj_arr,
} from "./3_Mech_Eng_Prepare_mechanical_Engineer_list_rfdb_Step1.js";
import {
  write_Mecha_Eng_list_to_database_file,
  mechanical_Engineer_JsonStr_Object,
  create_jsonStr_from_jsonObj_Mech_Eng,
} from "./4_Mech_Eng_Prepare_mechanical_Engineer_list_widb_Step2.js";
import {
  Sort_Doctors_Objects_by_IQ,
  get_Docotrs_from_the_All_jsObj_withoutSorting,
  doctors_Jsobj_array,
  sorted_Doctors_Jsobj_array,
} from "./5_Doctor_list_From_DataBase_Step1(Reading).js";

import {
  doctors_JsonStr_Object,
  write_Doctors_list_to_database_file,
  create_jsonStr_from_jsonObj_Doctors,
} from "./6_Doctor_list_To_DataBase_Step2(Writing).js";

import {
  sortTheJobNameGroupBy_IQ,
  create_jsonStr_from_jsonObj_jobName,
  write_Entered_jobName_list_to_database_file,
  paths_files_array,
  create_Paths_files_array_for_reading_from_db,
  directorypath,
  readAll_JsObj_FromDataBase,
  All_jsObj_From_DataBase_array,
} from "./2_General_Mechanism.js";

import { print_The_Most_Common_Name } from "./8_most_Common_name.js";
import { print_The_Most_Common_Name_With_Fathers_names } from "./9_most_common_name_with_father_name.js";

//==========================   Code   ===============================================

await readAll_JsObj_FromDataBase(paths_files_array, All_jsObj_From_DataBase_array);

// print_The_Most_Common_Name_With_Fathers_names(All_jsObj_From_DataBase_array);

//================================= Plan ========================================

//           step_1 :-    prepare paths of files in the data base to read the objects....
//               Result:-  paths_files_array[]
//           step_2 :-    - use fspromis to read data from database .....
//                Result:-  All_jsObj_From_DataBase_array[]
//           step_2 :-      detect how many mechanical engineers in this array of jsobj
//                Result:-   mechanical_Engineer_JsObj_arr[]
//
// base_version           -
