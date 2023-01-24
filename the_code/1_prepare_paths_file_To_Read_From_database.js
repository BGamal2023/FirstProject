import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";

//=========================== Variables ==============================================

export const paths_files_array = [];
let paths_of_one_file;
const directorypath = path.join(
  the_Absolute_Path_Of_This_Folder,
  "../the_database"
);

//=========================== Codes ==============================================

console.log(directorypath);

export async function create_Paths_files_array_for_reading_from_db() {
  const files_names_array = await fsPromises.readdir(directorypath);
  for (let i = 0; i < files_names_array.length; i++) {
    paths_files_array.push(
      path.join(directorypath, files_names_array[i].toString())
    );
  }
  return paths_files_array;
}
function print_files_names_arry(files_names_array) {
  console.log(files_names_array);
}
print_files_names_arry(files_names_array);
