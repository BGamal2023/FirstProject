import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";
// .............rfdb (reading from database)............................

// ......................my imports...............................

import { create_Paths_files_array_for_reading_from_db, paths_files_array } from "./1_prepare_paths_file_To_Read_From_database.js";
import { mechanical_Engineer_JsonStr_Object } from "./4_Mech_Eng_Prepare_mechanical_Engineer_list_widb_Step2.js";

//========================Variables=================================================

let Number_Of_Mech_Eng;
export const All_jsObj_From_DataBase_array = [];
export let mechanical_Engineer_JsObj_arr = [];
export let test = {};

//..........................Code...................................................

//.................func1..................................

export async function sortTheMechanicalEngineerGroupBy_IQ() {
  await get_Mech_Eng_from_the_All_jsObj(paths_files_array, All_jsObj_From_DataBase_array, mechanical_Engineer_JsObj_arr);

  mechanical_Engineer_JsObj_arr.sort((a, b) => {
    return a.IQ - b.IQ;
  });
  mechanical_Engineer_JsObj_arr.forEach((e) => {
    console.log(`IQ :  ${e.IQ}  :   Name : ${e.Name}    Jop : ${e.Job}`);
  });
}
//.................func2........ tested (Okay)..........................

export async function get_Mech_Eng_from_the_All_jsObj(
  paths_files_array,
  All_jsObj_From_DataBase_array,
  mechanical_Engineer_JsObj_arr
) {
  await readAll_JsObj_FromDataBase(paths_files_array, All_jsObj_From_DataBase_array, mechanical_Engineer_JsObj_arr);

  for (let i = 0; i < All_jsObj_From_DataBase_array.length; i++) {
    if (All_jsObj_From_DataBase_array[i].job === "mechanical engineer") {
      const obj1 = {
        Job: All_jsObj_From_DataBase_array[i].job,
        Name: All_jsObj_From_DataBase_array[i].name,
        IQ: All_jsObj_From_DataBase_array[i].IQ,
      };
      mechanical_Engineer_JsObj_arr.push(obj1);
    }
  }

  return mechanical_Engineer_JsObj_arr;
}

//.................func3(Tested : okay)  ..................................

export async function readAll_JsObj_FromDataBase(paths_files_array, All_jsObj_From_DataBase_array) {
  await create_Paths_files_array_for_reading_from_db();
  for (let i = 0; i < paths_files_array.length; i++) {
    const jsonFileFromDataBase = await fsPromises.readFile(paths_files_array[i], "utf-8");
    const jsObj = JSON.parse(jsonFileFromDataBase);
    All_jsObj_From_DataBase_array.push(jsObj);
  }

  return All_jsObj_From_DataBase_array;
  console.log(All_jsObj_From_DataBase_array);
}
