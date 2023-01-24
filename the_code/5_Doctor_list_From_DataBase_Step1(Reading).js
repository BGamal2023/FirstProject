//@ts-check
import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";

//.............................my Imports.......................
import { paths_files_array } from "./1_prepare_paths_file_To_Read_From_database.js";
import { All_jsObj_From_DataBase_array } from "./3_Mech_Eng_Prepare_mechanical_Engineer_list_rfdb_Step1.js";

//.............................Variables.......................
export const doctors_Jsobj_array = [];
export let sorted_Doctors_Jsobj_array = [];

//.............................Funcs.......................
export async function Sort_Doctors_Objects_by_IQ() {
  get_Docotrs_from_the_All_jsObj_withoutSorting(
    paths_files_array,
    All_jsObj_From_DataBase_array,
    doctors_Jsobj_array
  );
  console.log(doctors_Jsobj_array);

  doctors_Jsobj_array.sort((a, b) => {
    return a.IQ - b.IQ;
  });

  sorted_Doctors_Jsobj_array = doctors_Jsobj_array;
  return sorted_Doctors_Jsobj_array;
}

export async function get_Docotrs_from_the_All_jsObj_withoutSorting(
  paths_files_array,
  All_jsObj_From_DataBase_array,
  doctors_Jsobj_array
) {
  for (let i = 0; i < All_jsObj_From_DataBase_array.length; i++) {
    if (All_jsObj_From_DataBase_array[i].job === "doctor") {
      const obj = {
        Name: All_jsObj_From_DataBase_array[i].name,
        Job: All_jsObj_From_DataBase_array[i].job,
        IQ: All_jsObj_From_DataBase_array[i].IQ,
      };
      doctors_Jsobj_array.push(obj);
    }
  }
  return doctors_Jsobj_array;
}
