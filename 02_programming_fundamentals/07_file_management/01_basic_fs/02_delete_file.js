// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.

const fs = require("fs");
//const stats = require("stats");

const pathToTest = "/Users/Olivier/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/folderToto/toto";

function deleteFile (fileToDelete) {
  fs.unlink(fileToDelete, (err) => {
    if (err) {
      console.warn("aie !!");
      return;
    }
    console.log(`File ${fileToDelete} successfully deleted`);
  });
}

deleteFile (pathToTest);

module.exports = deleteFile;


// //let pathToTest;
// function fileExist (path2) {
//   if (fs.existsSync(path2) === true) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// function isAFile (path1) {
//   let stats = fs.statSync(path1);
//   console.log ("path is a file" , path1);
//   if (stats.isFile() === true) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// function deleteFile (pathToDelete) {
//   let returnCode;
//   if (fileExist (pathToDelete) === true && isAFile(pathToDelete) === true) {
//     console.log ("exist and a File");
//     fs.unlinkSync(pathToDelete);
//     if (fileExist (pathToDelete) === false) {
//       returnCode = true;
//       console.log ("tout est ok");
//     } else {
//       returnCode = false;
//       console.log ("suppr ko.le fichier existe encore");
//     }
//   } else {
//     console.log ("imposs car fichier absent ou n'est pas un fichier");
//     returnCode = false; //note a file
//   }
//
//   console.log ("Code retour" , returnCode);
//   return returnCode;  //console.log(`File ${pathToTest} successfully deleted`);
// }
