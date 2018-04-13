// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)
//const path = require("path");
const fs = require("fs");

const pathOri = "/Users/Olivier/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/folderToto/toto";
const pathDest = "/Users/Olivier/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/folderTiti/titi";

function cutPaste (sourceFilename, targetFilename) {
// Copy -- if success -> delete
  if (fs.existsSync(sourceFilename) === false) {
    console.log("aie !! File not exist");
    return false;
  } else {
    if (fs.lstatSync(sourceFilename).isDirectory() === true) {
      console.log("aie !! Is a folder");
      return false;
    } else {
      fs.copyFile(sourceFilename, targetFilename, (err) => {
        if (err) {
          console.warn("aie !! Issue with copy");
          return false;
        }
        deleteFile (sourceFilename);
        console.log(`${sourceFilename} was copied to ${targetFilename}`);
        return true;
      });
    }
  }
}

function deleteFile (fileToDelete) {
  fs.unlink(fileToDelete, (err) => {
    if (err) {
      console.warn("aie !! Issue with delete");
      return;
    }
    console.log(`File ${fileToDelete} successfully deleted`);
    return true;
  });
}

cutPaste (pathOri,pathDest);


module.exports = cutPaste;
