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

// import {
//   create_Paths_files_array_for_reading_from_db,
//   paths_files_array,
// } from "./prepare_paths_file_To_Read_From_database.js";
// import { mechanical_Engineer_JsonStr_Object } from "./Mech_Eng_Prepare_mechanical_Engineer_list_widb_Step2.js";

//========================Variables==================================================

export const paths_files_array = [];
export const directorypath = path.join(
  the_Absolute_Path_Of_This_Folder,
  "../the_database"
);
export const All_jsObj_From_DataBase_array = [];
export let job_Name_JsObj_arry = [];
export let test = {};
export let main_Object_for_JsonObjects_file_jobName = {};
export let jobName_JsonStr_Object = {};

//..........................Code...................................................

//......................... func1..................................

export async function write_Entered_jobName_list_to_database_file(
  jobName,
  directoryName,
  fileName
) {
  await create_jsonStr_from_jsonObj_jobName(jobName);

  const databas_directory_path = path.join(
    the_Absolute_Path_Of_This_Folder,
    directoryName
  );
  const jobName_File_Path = path.join(databas_directory_path, fileName);

  await fsPromises.writeFile(jobName_File_Path, jobName_JsonStr_Object, "utf-8");
}

export async function create_jsonStr_from_jsonObj_jobName(jobName) {
  await sortTheJobNameGroupBy_IQ(jobName);

  for (let i = 0; i < job_Name_JsObj_arry.length; i++) {
    main_Object_for_JsonObjects_file_jobName[i] = job_Name_JsObj_arry[i];
  }
  jobName_JsonStr_Object = JSON.stringify(main_Object_for_JsonObjects_file_jobName);
  console.log(jobName_JsonStr_Object);
}

export async function sortTheJobNameGroupBy_IQ(jobName) {
  await get_Job_Name_from_the_All_jsObj(
    jobName,
    paths_files_array,
    All_jsObj_From_DataBase_array,
    job_Name_JsObj_arry
  );

  job_Name_JsObj_arry.sort((a, b) => {
    return a.IQ - b.IQ;
  });
  job_Name_JsObj_arry.forEach((e) => {
    console.log(`IQ :  ${e.IQ}    Name : ${e.Name}    Jop : ${e.Job}`);
  });
}
//.................func2........ tested (Okay)..........................

export async function get_Job_Name_from_the_All_jsObj(
  jobName,
  paths_files_array,
  All_jsObj_From_DataBase_array,
  job_Name_JsObj_arry
) {
  await readAll_JsObj_FromDataBase(
    paths_files_array,
    All_jsObj_From_DataBase_array,
    job_Name_JsObj_arry
  );

  for (let i = 0; i < All_jsObj_From_DataBase_array.length; i++) {
    if (All_jsObj_From_DataBase_array[i].job === jobName) {
      const obj1 = {
        Job: All_jsObj_From_DataBase_array[i].job,
        Name: All_jsObj_From_DataBase_array[i].name,
        IQ: All_jsObj_From_DataBase_array[i].IQ,
      };
      job_Name_JsObj_arry.push(obj1);
    }
  }

  return job_Name_JsObj_arry;
}

//.................func3(Tested : okay)  ..................................

export async function readAll_JsObj_FromDataBase(
  paths_files_array,
  All_jsObj_From_DataBase_array
) {
  await create_Paths_files_array_for_reading_from_db();
  for (let i = 0; i < paths_files_array.length; i++) {
    const jsonFileFromDataBase = await fsPromises.readFile(paths_files_array[i], "utf-8");
    const jsObj = JSON.parse(jsonFileFromDataBase);
    All_jsObj_From_DataBase_array.push(jsObj);
  }

  return All_jsObj_From_DataBase_array;
}

//=========================== Codes ==============================================
export async function create_Paths_files_array_for_reading_from_db() {
  const files_names_array = await fsPromises.readdir(directorypath);
  for (let i = 0; i < files_names_array.length; i++) {
    paths_files_array.push(path.join(directorypath, files_names_array[i].toString()));
  }
  return paths_files_array;
}
