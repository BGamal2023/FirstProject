// @ts-check
"use strict";
//#region the Imports
import * as os from "os";
import path, { basename, dirname } from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
import { Dirent } from "fs";
//#endregion
//--------------------------------------------------------------------------------------------------------
//#region The variables
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const thisDirName = dirname(__filename);
const strOfThe_Strings_ToBe_Ignored =
	".git,.vscode,.js,.ts,.cs,.html,.css,.java,.kt,./the_sorted_database/${customer_job}.json";
const path_OfThe_CheckIgnore_File = path.join(thisDirName, "./strings_ToBe_Ignored_When_Check.txt");
const path_OfThe_Log_Json_File = path.join(thisDirName, "./the_Log_File_For_The_Wrong_Paths.json");
let counter_1 = 0;
const obj_OfThe_Paths_That_DoesNot_Exist_And_Their_MetaData = {};
const currentFileName = basename(__filename);
let the_Log_Obj = {};
let counter = 0;
//#endregion
//--------------------------------------------------------------------------------------------------
await check_The_Existence_OFThe_Paths_That_Are_Inside_The_Files_Of_This_Directory();
//--------------------------------------------------------------------------------------------------4
//#region the Main Function
async function check_The_Existence_OFThe_Paths_That_Are_Inside_The_Files_Of_This_Directory() {
	console.log("\x1b[36m%s\x1b[0m", "\n-----------------------The Start-----------------------");

	await runTheCheck_On_The_Targeted_Directory_And_Its_SubDirectories(thisDirName);
	//#region write all the results to the log json file
	await fsPromises.writeFile(
		path_OfThe_Log_Json_File,
		JSON.stringify(obj_OfThe_Paths_That_DoesNot_Exist_And_Their_MetaData),
		"utf-8"
	);
	//#endregion

	if (Object.keys(obj_OfThe_Paths_That_DoesNot_Exist_And_Their_MetaData).length == 0) {
		console.log(
			"\x1b[32m%s\x1b[0m",
			"\n------ WOW, \nYou don't have any mistakes in your paths. \nGood Job."
		);
	} else {
		const mistakes_Count = Object.keys(
			obj_OfThe_Paths_That_DoesNot_Exist_And_Their_MetaData
		).length;
		console.log(
			"\x1b[31m%s\x1b[0m",
			`\n------ OH, No,\nYou have (${mistakes_Count}) mistakes\n\x1b[35mread them in ===> \x1b[36m[${path_OfThe_Log_Json_File.replace(
				thisDirName,
				""
			)}] `
		);
	}
	console.log("\x1b[36m%s\x1b[0m", "\n-----------------------The End-----------------------");
}
//#endregion
//-----------------------------------------------------------------------------------------------------------------
//#region The Worker Functions
//--------------------------------------------------------------------------------------------------
/**
 * @param {string} the_Path_OfThe_Targeted_Directory_That_Need_ToBe_Checked
 */
async function runTheCheck_On_The_Targeted_Directory_And_Its_SubDirectories(
	the_Path_OfThe_Targeted_Directory_That_Need_ToBe_Checked
) {
	//#region get all the sub directories and files from inside the targeted directory
	const arrOfDirents_OfAll_The_Files_And_The_Directories_Inside_The_Targeted_Directory =
		await fsPromises.readdir(the_Path_OfThe_Targeted_Directory_That_Need_ToBe_Checked, {
			withFileTypes: true,
		});
	//#endregion

	//#region run the check on all the sub directories and files that exist inside the targeted directory
	for (const dirent of arrOfDirents_OfAll_The_Files_And_The_Directories_Inside_The_Targeted_Directory) {
		if (dirent.isDirectory()) {
			//#region run the check on its sub Directories
			await runTheCheck_On_Only_Sub_Directories(
				dirent.name,
				the_Path_OfThe_Targeted_Directory_That_Need_ToBe_Checked
			);
			//#endregion
		} else {
			//#region protect from checking unnecessary files
			if (dirent.name.includes(currentFileName)) {
				continue;
			}
			if (/(\.js|\.ts|\.mjs)$/gim.test(dirent.name) == false) {
				continue;
			}
			//#endregion

			//#region run the actual file checking
			await run_The_Actual_File_Checking(
				dirent.name,
				the_Path_OfThe_Targeted_Directory_That_Need_ToBe_Checked
			);
			//#endregion
		}
	}
	//#endregion
}
//------------------------------------------------------------------------------------------------------------
/**
 * @param {string} the_Name_OfThe_SubDirectory
 * @param {string} the_Path_OfThe_ParentDirectory_OfThe_SubDir_That_Is_Under_Check
 */
async function runTheCheck_On_Only_Sub_Directories(
	the_Name_OfThe_SubDirectory,
	the_Path_OfThe_ParentDirectory_OfThe_SubDir_That_Is_Under_Check
) {
	//#region Protect from checking unnecessary folders
	if (
		the_Name_OfThe_SubDirectory.includes("node_modules") ||
		the_Name_OfThe_SubDirectory.includes("coverage") ||
		the_Name_OfThe_SubDirectory.includes(".git") ||
		the_Name_OfThe_SubDirectory.includes(".vscode")
	) {
		return;
	}
	//#endregion

	//#region use the primary checking function to check the subdirectories of the incoming parent directory
	const path_OfThe_SubDir_That_Is_Under_Check = path.join(
		the_Path_OfThe_ParentDirectory_OfThe_SubDir_That_Is_Under_Check,
		the_Name_OfThe_SubDirectory
	);
	await runTheCheck_On_The_Targeted_Directory_And_Its_SubDirectories(
		path_OfThe_SubDir_That_Is_Under_Check
	);
	//#endregion
}
//------------------------------------------------------------------------------------------------------------
/**
 * @param {string} the_File_Name
 * @param {string} the_Path_OfThe_Directory_That_Is_Under_Check
 */
async function run_The_Actual_File_Checking(
	the_File_Name,
	the_Path_OfThe_Directory_That_Is_Under_Check
) {
	//#region some needed variables
	const the_Path_OfThe_File_ThatIs_Under_Checking = path.join(
		the_Path_OfThe_Directory_That_Is_Under_Check,
		the_File_Name
	);
	//#endregion
	try {
		//#region get all the Acceptable PathLike_Strings from the current file that is under checking
		const the_Content_OfThe_File_Under_Checking = await fsPromises.readFile(
			the_Path_OfThe_File_ThatIs_Under_Checking,
			"utf-8"
		);
		const arr_OfAll_The_Accepted_PathLike_Strings =
			giveMe_The_Arr_Of_The_Acceptable_PathLike_Strings(
				the_Content_OfThe_File_Under_Checking
			);
		//#endregion

		//#region get the PathLike_Strings that you want to ignore
		let arr_OfThe_Strings_ToBe_Ignored = strOfThe_Strings_ToBe_Ignored
			.split(/[,\n\r\t]/gim)
			.filter((item) => {
				if (item == "") return false;
				return true;
			});
		//#endregion

		const ahmed = "ahmed";

		//#region categorize All the Acceptable PathLike_Strings
		const arr_OfThe_Strings_ThatLookLike_Relative_Paths = [];
		const arr_OfThe_Strings_ThatLookLike_Absolute_Paths = [];
		const arr_OfThe_Strings_ThatLookLike_Files_Names = [];
		const arr_OfThe_Ambiguous_Strings = [];
		const arr_OfThe_Highly_Unlikely_ToBe_Paths = [];
		arr_OfAll_The_Accepted_PathLike_Strings.forEach((pathLike_Str) => {
			if (pathLike_Str.toLocaleLowerCase().startsWith("http")) return;
			if (pathLike_Str.toLocaleLowerCase().endsWith(".html")) return;
			if (/\d+\.\d+/gim.test(pathLike_Str)) return;
			if (arr_OfThe_Strings_ToBe_Ignored.includes(pathLike_Str)) return;
			if (/\.{3}$/gim.test(pathLike_Str)) return;
			if (
				/\W\D$/gim.test(pathLike_Str) &&
				/^\.+\/|^.+:\/\/|^.+:\\\\/gim.test(pathLike_Str) == false
			)
				return;
			if (/^\.+\\|^\.+\//gim.test(pathLike_Str)) {
				arr_OfThe_Strings_ThatLookLike_Relative_Paths.push(pathLike_Str);
			} else if (/^.+:\/\/|^.+:\\\\/gim.test(pathLike_Str)) {
				arr_OfThe_Strings_ThatLookLike_Absolute_Paths.push(pathLike_Str);
			} else if (/.+\.(?=[a-zA-z\d]+)$/gim.test(pathLike_Str)) {
				arr_OfThe_Strings_ThatLookLike_Files_Names.push(pathLike_Str);
			} else if (/.*\.(?=[a-zA-z\d]+)/gim.test(pathLike_Str)) {
				arr_OfThe_Ambiguous_Strings.push(pathLike_Str);
			} else if (/.*\..+/gim.test(pathLike_Str)) {
				arr_OfThe_Highly_Unlikely_ToBe_Paths.push(pathLike_Str);
			}
		});

		//#endregion

		//#region extract the paths that doesn't exist and put them in a js obj
		await extract_All_The_Paths_That_Does_Not_Exist_And_Put_Them_In_A_Js_Obj(
			the_Path_OfThe_File_ThatIs_Under_Checking,
			the_Path_OfThe_Directory_That_Is_Under_Check,
			the_Content_OfThe_File_Under_Checking,
			arr_OfThe_Strings_ThatLookLike_Relative_Paths,
			arr_OfThe_Strings_ThatLookLike_Absolute_Paths,
			arr_OfThe_Strings_ThatLookLike_Files_Names
		);
		//#endregion
	} catch (error_0) {
		// eslint-disable-next-line no-console
		console.log("Ahmed Log:-");
		// eslint-disable-next-line no-console
		console.log("The Error happened in the following file:-");
		// eslint-disable-next-line no-console
		console.log(the_Path_OfThe_File_ThatIs_Under_Checking);
		// eslint-disable-next-line no-console
		console.log("\n");
		// eslint-disable-next-line no-console
		console.error(error_0);
		// eslint-disable-next-line no-console
		console.log("------------------------------------------------------------");
		// eslint-disable-next-line no-console
		console.log("\n");
	}
}
//#endregion
//-----------------------------------------------------------------------------------------------------------------
//#region The Service Functions
//------------------------------------------------------------------------------------------------------------
/**
 * @param {string} the_Content_OfThe_File_Under_Checking
 */
function giveMe_The_Arr_Of_The_Acceptable_PathLike_Strings(the_Content_OfThe_File_Under_Checking) {
	//#region get the index every quotation mark inside the current file under checking
	const arr_OfThe_Indexes_OfThe_Double_Quotes_Inside_The_Current_File_Under_Checking =
		giveMe_The_IndexesArr_OfAllThe_Occurrences_Of_A_QuotationMark_Inside_A_String(
			`"`,
			the_Content_OfThe_File_Under_Checking
		);
	const arr_OfThe_Indexes_OfThe_Single_Quote_Inside_The_Current_File_Under_Checking =
		giveMe_The_IndexesArr_OfAllThe_Occurrences_Of_A_QuotationMark_Inside_A_String(
			`'`,
			the_Content_OfThe_File_Under_Checking
		);
	const arr_OfThe_Indexes_OfThe_BackTick_Inside_The_Current_File_Under_Checking =
		giveMe_The_IndexesArr_OfAllThe_Occurrences_Of_A_QuotationMark_Inside_A_String(
			"`",
			the_Content_OfThe_File_Under_Checking
		);

	const arr_OfThe_Arrays = [
		arr_OfThe_Indexes_OfThe_Double_Quotes_Inside_The_Current_File_Under_Checking,
		arr_OfThe_Indexes_OfThe_Single_Quote_Inside_The_Current_File_Under_Checking,
		arr_OfThe_Indexes_OfThe_BackTick_Inside_The_Current_File_Under_Checking,
	];
	//#endregion

	//#region get every possible string from inside the current file under checking
	const arr_Of_All_The_Possible_Strings = giveMe_The_Arr_Of_All_The_Possible_Strings(
		arr_OfThe_Arrays,
		the_Content_OfThe_File_Under_Checking
	);
	//#endregion

	//#region return only the acceptable PathLike_Strings
	return arr_Of_All_The_Possible_Strings.filter((str_Item) => {
		if (/[\`\'\"\n]/gim.test(str_Item)) return false;
		if (/[:\\/\.]/gim.test(str_Item) == false) return false;
		return true;
	});
	//#endregion
}
//------------------------------------------------------------------------------------------------------------
/**
 * @param {number[][]} arr_ofThe_ArraysOfIndexes
 * @param {string} the_Content_OfThe_File_Under_Checking
 */
function giveMe_The_Arr_Of_All_The_Possible_Strings(
	arr_ofThe_ArraysOfIndexes,
	the_Content_OfThe_File_Under_Checking
) {
	const arr_OfTheStrings_From_Inside_The_Content_OfThe_Current_File_Under_Checking = [];
	arr_ofThe_ArraysOfIndexes.forEach((arr_Of_Indexes_OfThe_Quotation_Marks) => {
		//#region use every arr_Of_Indexes_OfThe_Quotation_Marks to rebuild the strings from inside the content of the current file under checking
		arr_Of_Indexes_OfThe_Quotation_Marks.forEach(
			(indexOfThe_Quotation_Mark, index_Of_This_IndexOfTheMatch) => {
				//#region use every 2 indexes from the arr_Of_Indexes_OfThe_Quotation_Marks to rebuild the strings from inside the content of The current file under checking
				if (index_Of_This_IndexOfTheMatch % 2 != 0) return;
				const the_Next_IndexOfTheMatch = arr_Of_Indexes_OfThe_Quotation_Marks.at(
					index_Of_This_IndexOfTheMatch + 1
				);

				const the_Current_SubStr = the_Content_OfThe_File_Under_Checking.substring(
					indexOfThe_Quotation_Mark + 1,
					the_Next_IndexOfTheMatch
				);
				arr_OfTheStrings_From_Inside_The_Content_OfThe_Current_File_Under_Checking.push(
					the_Current_SubStr
				);
				//#endregion
			}
		);
		//#endregion
	});

	return arr_OfTheStrings_From_Inside_The_Content_OfThe_Current_File_Under_Checking;
}
//------------------------------------------------------------------------------------------------------------
/**
 * @param {string} the_Quotation_Mark
 * @param {string} the_Content_OfThe_File_Under_Checking
 */
function giveMe_The_IndexesArr_OfAllThe_Occurrences_Of_A_QuotationMark_Inside_A_String(
	the_Quotation_Mark,
	the_Content_OfThe_File_Under_Checking
) {
	const arr_OfThe_Indexes_OfThe_Occurrences = [];
	//#region find all the occurrences of the quotation mark inside the string
	let the_Start = 0;
	for (;;) {
		//#region get the index of the current Occurrence
		const the_Index_OfThe_Occurrence = the_Content_OfThe_File_Under_Checking.indexOf(
			the_Quotation_Mark,
			the_Start
		);
		if (the_Index_OfThe_Occurrence <= 0) {
			break;
		}
		arr_OfThe_Indexes_OfThe_Occurrences.push(the_Index_OfThe_Occurrence);
		the_Start = the_Index_OfThe_Occurrence + 1;
		//#endregion
	}
	//#region protection in case of the number of index is odd number. Because we need 2 indexes for each substring we want to cut
	if (arr_OfThe_Indexes_OfThe_Occurrences.length % 2 != 0) {
		arr_OfThe_Indexes_OfThe_Occurrences.push(
			the_Content_OfThe_File_Under_Checking.length - 1
		);
	}
	//#endregion
	//#endregion
	return arr_OfThe_Indexes_OfThe_Occurrences;
}
//------------------------------------------------------------------------------------------------------------
/**
 * @param {string} the_Path_OfThe_File_Under_Check
 * @param {string} the_Path_OfThe_Directory_That_Contains_The_File
 * @param {string} the_Content_OfThe_File_Under_Checking
 * @param {string[]} arr_OfThe_Paths_ThatLookLike_Relative_Paths
 * @param {string[]} arr_OfThe_Paths_ThatLookLike_Absolute_Paths
 * @param {string[]} arr_OfThe_Paths_ThatLookLike_Files_Names
 */
async function extract_All_The_Paths_That_Does_Not_Exist_And_Put_Them_In_A_Js_Obj(
	the_Path_OfThe_File_Under_Check,
	the_Path_OfThe_Directory_That_Contains_The_File,
	the_Content_OfThe_File_Under_Checking,
	arr_OfThe_Paths_ThatLookLike_Relative_Paths,
	arr_OfThe_Paths_ThatLookLike_Absolute_Paths,
	arr_OfThe_Paths_ThatLookLike_Files_Names
) {
	await handle_Only_A_Single_Array(
		the_Path_OfThe_File_Under_Check,
		the_Path_OfThe_Directory_That_Contains_The_File,
		the_Content_OfThe_File_Under_Checking,
		arr_OfThe_Paths_ThatLookLike_Relative_Paths,
		false
	);
	await handle_Only_A_Single_Array(
		the_Path_OfThe_File_Under_Check,
		the_Path_OfThe_Directory_That_Contains_The_File,
		the_Content_OfThe_File_Under_Checking,
		arr_OfThe_Paths_ThatLookLike_Absolute_Paths,
		true
	);
	await handle_Only_A_Single_Array(
		the_Path_OfThe_File_Under_Check,
		the_Path_OfThe_Directory_That_Contains_The_File,
		the_Content_OfThe_File_Under_Checking,
		arr_OfThe_Paths_ThatLookLike_Files_Names,
		false
	);
}
//------------------------------------------------------------------------------------------------------------
/**
 * @param {string} the_Path_OfThe_File_Under_Check
 * @param {string} the_Path_OfThe_Directory_That_Contains_The_File
 * @param {string} the_Content_OfThe_File_Under_Checking
 * @param {string[]} the_Array
 * @param {boolean} is_It_The_Array_Of_Absolute_Paths
 */
async function handle_Only_A_Single_Array(
	the_Path_OfThe_File_Under_Check,
	the_Path_OfThe_Directory_That_Contains_The_File,
	the_Content_OfThe_File_Under_Checking,
	the_Array,
	is_It_The_Array_Of_Absolute_Paths
) {
	//#region some variables

	const arr_OfThe_Lines_OfThe_Content_OfThe_File_That_Under_Checking =
		the_Content_OfThe_File_Under_Checking.split("\n");
	//#endregion
	for (let pathLike_String of the_Array) {
		//#region create the full path based on the type of the PathLike_String
		let the_Complete_Path_OfThe_Current_PathLike_String = path.join(
			the_Path_OfThe_Directory_That_Contains_The_File,
			pathLike_String
		);

		if (is_It_The_Array_Of_Absolute_Paths == true) {
			the_Complete_Path_OfThe_Current_PathLike_String = path.join(pathLike_String);
		}
		//#endregion

		try {
			//#region check if the path exist or not
			await fsPromises.stat(the_Complete_Path_OfThe_Current_PathLike_String);
			//if no errors then the file exists
			//#endregion
		} catch (error) {
			//#region save the non existed path in the js obj
			counter_1++;
			const obj_1 = {};
			obj_OfThe_Paths_That_DoesNot_Exist_And_Their_MetaData[counter_1] = obj_1;
			obj_1["the_Non_Existed_Path"] = pathLike_String;
			//#endregion

			//#region save the path of the file that has the problem in the js obj
			obj_1["the_Path_OfThe_File_That_Has_The_Problem"] =
				the_Path_OfThe_File_Under_Check;
			//#endregion

			//#region save the numbers of the lines of the non existed paths in the js obj
			let str_The_Numbers_OfThe_Lines_OfThe_Non_Existed_Paths = "";
			arr_OfThe_Lines_OfThe_Content_OfThe_File_That_Under_Checking.forEach(
				(line, index_OfThe_Line) => {
					if (line.includes(pathLike_String) == false) return;
					if (
						new RegExp(
							`(?<![\"\'\`].*)//.*[\"\'\`]${pathLike_String}`,
							"gmi"
						).test(line)
					) {
						delete obj_OfThe_Paths_That_DoesNot_Exist_And_Their_MetaData[
							counter_1
						];
						counter_1--;
						return;
					}

					str_The_Numbers_OfThe_Lines_OfThe_Non_Existed_Paths += ` ${
						index_OfThe_Line + 1
					}`;
				}
			);

			obj_1["the_Numbers_OfThe_Lines"] =
				str_The_Numbers_OfThe_Lines_OfThe_Non_Existed_Paths;

			//#endregion
		}
	}
}
//------------------------------------------------------------------------------------------------------------
//#endregion
//-----------------------------------------------------------------------------------------------------------------
