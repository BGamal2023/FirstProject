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