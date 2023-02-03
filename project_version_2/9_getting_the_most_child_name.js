//#region iternal inmpotrs

import { arr_of_JAVAscript_objects_from_db } from "./1_reading_data_from_database.js";

//#endregion

export let arr_of_childs_objects = [];
export let arr_of_extracted_childs_names = [];

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
  w0_get_arr_of_childs_names();
  w1_extract_childs_names_from_arr_of_childs_objecsts();

  for (let i = 0; i < arr_of_extracted_childs_names.length; i++) {}
}
