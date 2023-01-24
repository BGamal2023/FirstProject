//@ts-check
import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const the_Absolute_Path_Of_This_Folder = dirname(__filename);
const currentFileName = basename(__filename);
import * as TI from "readline";

//--------------------------------------------------------------------------------------------------
async function info() {
  const arr_List_OfThe_Question = [
    "file of how many mechanical engineer and their names, (sorted according their IQ)",
    "file of how many doctor and their names, (sorted according their IQ)",
    "file of how many accountant and their names, (sorted according their IQ)",
    "file of how many lawyer and their names, (sorted according their IQ)",
    "file of how many teacher and their names, (sorted according their IQ)",
    "file of how many mathematician and their names, (sorted according their IQ)",
    "file of how many programmer and their names, (sorted according their IQ)",
    "file of how many electrical engineer and their names, (sorted according their IQ)",
    "file of how many civil engineer and their names, (sorted according their IQ)",
    "file of how many chemical engineer and their names, (sorted according their IQ)",
    "file of how many dentist and their names, (sorted according their IQ)",
    //"file of how many male and their ages (sorted according to their IQ",
    //"file of how many female and their ages (sorted according to their IQ",
    "file of what is the most common name",
    "file of what is the most child name",
    "file of who is the smartest an least smart one (and their jobs and their other details",
    "file of each one with the full details (sorted according to their IQ)",
    "file of each one with the full details (sorted according to their Age)",
  ];
  //Examples of the code that maybe needed.
  const the_Absolute_Path_OfThe_Database_Folder = path.join(
    the_Absolute_Path_Of_This_Folder,
    "../the_database"
  );

  const random_Name_Of_A_File = "adel_ahmed.json";
  const the_Absolute_Path_To_The_Random_File = path.join(
    the_Absolute_Path_OfThe_Database_Folder,
    random_Name_Of_A_File
  );

  const string_From_The_Random_File = await fsPromises.readFile(
    the_Absolute_Path_To_The_Random_File,
    "utf-8"
  );

  // to write something to the random file
  const what_I_Want_To_Write = "something";
  await fsPromises.writeFile(
    the_Absolute_Path_To_The_Random_File,
    what_I_Want_To_Write,
    "utf-8"
  );
}
