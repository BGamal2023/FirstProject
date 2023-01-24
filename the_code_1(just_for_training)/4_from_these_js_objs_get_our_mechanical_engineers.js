//get how many mechnical enginner in database
//what are thier names
//sort them by IQ.

//#region node import
import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";

//#endregion

//#region my_internal_import
import {
  arr_of_complete_absolute_path_of_every_file_inside_the_datbase_folder,
  m_get_the_paths_of_files_exist_in_database_folder_path,
} from "./1_get_the_paths_of_files_exist_in_our_customer_datbase_folder.js";
import {
  m_get_JSON_objects_exists_in_database_files,
  arr_of_JSON_objects_exists_in_database,
} from "./2_from_these_files_paths_get_me_the_exist_JSON_objects.js";
import { arr_of_javascript_objects_exists_in_database } from "./3_from_these_JSON_objects_get_me_javascript_objects_.js";
import { Console } from "console";
//#endregion

//#region variables
//========================variables====================================================
export let arr_of_mechanical_engineer = [];
export let s_mech_eng_obj = {};

//#endregion

//#region invoked functions

//#endregion

//#region functions

function s1_get_arr_of_mechanical_engineer_customer() {
  for (let i = 0; i < arr_of_javascript_objects_exists_in_database.length; i++) {
    if (arr_of_javascript_objects_exists_in_database[i].job == "mechanical engineer") {
      s_mech_eng_obj = {
        Name: arr_of_javascript_objects_exists_in_database[i].name,
        Job: arr_of_javascript_objects_exists_in_database[i].job,
        IQ: arr_of_javascript_objects_exists_in_database[i].IQ,
      };

      arr_of_mechanical_engineer.push(s_mech_eng_obj);
    }
  }

  return arr_of_mechanical_engineer;
}
export function m1_tell_me_how_many_mechanical_engineer_custormers() {
  s1_get_arr_of_mechanical_engineer_customer();
  console.log("our mechanical engineer custormers Number is :- " + arr_of_mechanical_engineer.length);
}

export function m2_sort_the_mechanical_engineers_based_on_thier_IQ() {
  arr_of_mechanical_engineer.sort((a, b) => {
    return b.IQ - a.IQ;
  });

  for (let i = 0; i < arr_of_mechanical_engineer.length; i++) {
    arr_of_mechanical_engineer[i] = {
      mechanical_engineer_NO: i + 1,
      Name: arr_of_mechanical_engineer[i].Name,

      IQ: arr_of_mechanical_engineer[i].IQ,
    };
  }
  return arr_of_mechanical_engineer;
}

export async function m3_save_this_sorted_array_of_mechanical_engneers_to_the_sorted_datbase() {
  let path_to_mech_engi_file = path.join(the_Absolute_Path_Of_This_Folder, "../sorted_database/mechanical_engineers.json");

  let JSON_arr_of_mech_engin = JSON.stringify(arr_of_mechanical_engineer);
  await fsPromises.writeFile(path_to_mech_engi_file, JSON_arr_of_mech_engin, "utf-8");
}

//#endregion
