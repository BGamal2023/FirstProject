//@ts-check
import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";

//....................my imports..........................

//.................variables.........................

//......................codes........................

export async function print_The_Most_Common_Name(All_jsObj_From_DataBase_array) {
  let mostFreq = 0;
  let count = 0;
  let item;

  for (let i = 0; i < All_jsObj_From_DataBase_array.length; i++) {
    for (let j = 0; j < All_jsObj_From_DataBase_array.length; j++) {
      if (
        All_jsObj_From_DataBase_array[i].name.substring(0, All_jsObj_From_DataBase_array[i].name.indexOf("_")) ==
        All_jsObj_From_DataBase_array[j].name.substring(0, All_jsObj_From_DataBase_array[j].name.indexOf("_"))
      ) {
        count++;
        if (mostFreq < count) {
          mostFreq = count;
          item = All_jsObj_From_DataBase_array[i].name.substring(0, All_jsObj_From_DataBase_array[i].name.indexOf("_"));
        } //tubles
      }
    }
    count = 0;
  }
  console.log(`the most common name is  :- ${item} no.of repetations is :-   ${mostFreq}`);
}
