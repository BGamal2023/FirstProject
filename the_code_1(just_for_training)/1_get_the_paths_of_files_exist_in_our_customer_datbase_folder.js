//#region MyExpaination

/*
you can not use js directly to deal with database from browser for security
so because js can run in Node so node prepare liberay to deal with database(they regrit for that)
so the bottom imports for what you need from these packages >>>path , fileurltopath....etc



*/

//#endregion

//#region Node import
import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";

//#endregion

//#region Variables
//==========================variables===================================================
let database_folder_absolute_path;
let arr_of_only_names_of_files_that_excist_inside_the_database_folder = [];
export const arr_of_complete_absolute_path_of_every_file_inside_the_datbase_folder = [];
//#endregion

//#region Invoked functions

// m_get_the_paths_of_files_exist_in_database_folder_path();

//#endregion

//#region functions

// t means it is just test function.
// s means it is service function
// m means it is main function

//#region inner Expaination
// get path of the database file;
//read all json files .
//put them in array.
/*get path for every file so you need to loop in the array of the database json files and 
get one by one and use path.join (the_Absolute_Path_of_This_Folder,the name of the json file)
so you will have another array with every absoulet path for every json file in data base*/
//#endregion

function s_get_database_folder_path() {
  database_folder_absolute_path = path.join(the_Absolute_Path_Of_This_Folder, "../the_database");
}

async function s_get_files_names_exist_in_this_database_folder_path() {
  arr_of_only_names_of_files_that_excist_inside_the_database_folder = await fsPromises.readdir(database_folder_absolute_path);
}

function s_join_these_files_name_with_the_database_folder_path() {
  for (let i = 0; i < arr_of_only_names_of_files_that_excist_inside_the_database_folder.length; i++) {
    arr_of_complete_absolute_path_of_every_file_inside_the_datbase_folder.push(
      path.join(database_folder_absolute_path, arr_of_only_names_of_files_that_excist_inside_the_database_folder[i].toString())
    );
  }
  return arr_of_complete_absolute_path_of_every_file_inside_the_datbase_folder;
}

function s_t_print_arr_of_files_names_of_database() {
  console.log(arr_of_only_names_of_files_that_excist_inside_the_database_folder);
  console.log("#########################################################");
  console.log(
    "the numbers of files exist in database is equal:- " +
      arr_of_only_names_of_files_that_excist_inside_the_database_folder.length
  );
}
function s_t_print_arr_of_paths_of_files_in_database() {
  console.log(arr_of_complete_absolute_path_of_every_file_inside_the_datbase_folder);
}

export async function m_get_the_paths_of_files_exist_in_database_folder_path() {
  s_get_database_folder_path();
  await s_get_files_names_exist_in_this_database_folder_path();
  // s_t_print_arr_of_paths_of_files_in_database();

  //join every name of every  file in database to get complete path of every folder
  s_join_these_files_name_with_the_database_folder_path();
  // s_t_print_arr_of_paths_of_files_in_database();
}

//#endregion
