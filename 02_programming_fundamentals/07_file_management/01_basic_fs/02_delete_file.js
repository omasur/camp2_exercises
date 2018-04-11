// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.

const fs = require("fs");
//const stats = require("stats");

const pathToTest = "/Users/Olivier/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/folderToto/toto";
//let pathToTest;

function deleteFile (pathToDelete) {
  let fileDeleted;
  if (isAFile(pathToDelete) === true) {
    fs.unlinkSync(pathToDelete);
    if (fs.existsSync(pathToDelete) === false) {
      fileDeleted = true;
    } else {
      fileDeleted = false;
    }
  } else {
    fileDeleted = false; //note a file
  }
  return fileDeleted;  //console.log(`File ${pathToTest} successfully deleted`);
}

function isAFile (path1) {
  let stats = fs.statSync(path1);
  if (stats.isFile() === true) {
    return true;
  } else {
    return false;
  }
}

deleteFile (pathToTest);



module.exports = deleteFile;
