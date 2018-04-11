// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.
const fs = require("fs");

const pathOri = "/Users/Olivier/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/folderToto/toto";
const pathDest = "/Users/Olivier/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/folderTiti/toto";

function copyPaste (sourceFilename, targetFilename) {
// Copy -- if success -> delete
  fs.copyFile(sourceFilename, targetFilename, (err) => {
    if (err) throw err;

    console.log(`${sourceFilename} was copied to ${targetFilename}`);
  });
  // fs.unlink(pathToDelete, (err) => {
  //   if (err) throw err;
  //   console.log(`File ${pathToTest} successfully deleted`);
  // });
}

copyPaste (pathOri,pathDest);

module.exports = copyPaste;
