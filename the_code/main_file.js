import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";

//=========================================================================

const database_files_array=[];
const paths_files_array = [];
const path_file_1=
"../../../../../Programming/javascript/Awaad_Projects/Training_Project_For_Bahaa/the_database/adel_ahmed.json";
const path_file_2="../../../../../Programming/javascript/Awaad_Projects/Training_Project_For_Bahaa/the_database/adel_amr.json";
paths_files_array.push(path_file_1);
paths_files_array.push(path_file_2);
console.log(paths_files_array);


async function readfromfile(paths_files_array , database_files_array){
    
    for(let i =0 ;i<paths_files_array.length;i++){

        const Read_From_the_database_file= 
        await fsPromises.readFile(paths_files_array[i] , "utf-8");
        const jsonObj=JSON.parse(Read_From_the_database_file)
        database_files_array.push(jsonObj);
    }

       

     return console.log(database_files_array);
   // const jsonobj= JSON.parse(Read_From_the_database_file);
   // console.log(jsonobj);
}


readfromfile(paths_files_array , database_files_array);
async function printArray (database_files_array){
   await console.log(database_files_array);

}
printArray(database_files_array);

