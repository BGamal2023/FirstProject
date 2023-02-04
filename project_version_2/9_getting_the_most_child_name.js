//@ts-check
//#region Node imports

import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";
//#endregion
//#region iternal inmpotrs

import { m_read_customer_data_from_databas, arr_of_JAVAscript_objects_from_db } from "./1_reading_data_from_database.js";

//#endregion

//#region variables
export let arr_of_childs_objects = [];
export let arr_of_extracted_childs_names = [];
//#endregion

//#region invoked functions  to test
// await m_read_customer_data_from_databas();
// m_get_the_most_child_name();
//#endregion

//#region function

export function w0_get_arr_of_childs_names() {
  for (let i = 0; i < arr_of_JAVAscript_objects_from_db.length; i++) {
    arr_of_childs_objects.push(arr_of_JAVAscript_objects_from_db[i].children);
  }

  return arr_of_childs_objects;
}

export function w1_extract_childs_names_from_arr_of_childs_objecsts() {
  for (let i = 0; i < arr_of_childs_objects.length; i++) {
    arr_of_extracted_childs_names.push(arr_of_childs_objects[i].child_1);
    arr_of_extracted_childs_names.push(arr_of_childs_objects[i].child_2);
    arr_of_extracted_childs_names.push(arr_of_childs_objects[i].child_3);
  }

  return arr_of_extracted_childs_names;
}

export function m_get_the_most_child_name() {
  let counter = 0;
  let maxfreq = 1;
  let max_repeated_item;
  w0_get_arr_of_childs_names();
  w1_extract_childs_names_from_arr_of_childs_objecsts();

  for (let i = 0; i < arr_of_extracted_childs_names.length; i++) {
    for (let j = 0; j < arr_of_extracted_childs_names.length; j++) {
      if ((arr_of_extracted_childs_names[j] = arr_of_extracted_childs_names[i])) {
        counter++;
        if (maxfreq < counter) {
          maxfreq = counter;
          max_repeated_item = arr_of_extracted_childs_names[i];
        }
      }
    }
    counter = 0;
  }
  console.log("the max repeated child name is = " + max_repeated_item + " and no. of repetition= " + maxfreq);
}

//#endregion
