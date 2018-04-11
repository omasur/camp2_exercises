// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)
//const path = require("path");
const fs = require("fs");

const pathOri = "/Users/Olivier/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/folderToto/toto";
const pathDest = "/Users/Olivier/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/folderTiti/toto";

function cutPaste (sourceFilename, targetFilename) {
// Copy -- if success -> delete
  fs.copyFile(sourceFilename, targetFilename, (err) => {
    if (err) throw err;
    deleteFile (sourceFilename);
    console.log(`${sourceFilename} was copied to ${targetFilename}`);
  });

}

function deleteFile (fileToDelete) {
  fs.unlink(fileToDelete, (err) => {
    if (err) throw err;
    console.log(`File ${fileToDelete} successfully deleted`);
  });
}

cutPaste (pathOri,pathDest);


module.exports = cutPaste;
