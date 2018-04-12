// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.
const fs = require("fs");

const pathOri = "toto";
const pathDest = "titi";

function copyPaste (sourceFilename, targetFilename) {
  if (fileExist (targetFilename) === false) {
    fs.readFile (sourceFilename, (error, data) => {
      if (error) {
        console.warn(error);
        return;
      }
      fs.writeFile (targetFilename, data, (error) => {
        if (error) {
          console.warn(error);
          return;
        }
      });
    });
  }
}

copyPaste (pathOri,pathDest);

module.exports = copyPaste;

function fileExist (path2) {
  if (fs.existsSync(path2) === true) {
    return true;
  } else {
    return false;
  }
}
//
// function copyPaste (sourceFilename, targetFilename) {
// // Copy -- if success -> delete
//   if (fileExist (targetFilename) === false) {
//     fs.copyFile(sourceFilename, targetFilename, (err) => {
//       if (err) {
//         console.warn("aie !!");
//       } else {
//         console.log(`${sourceFilename} was copied to ${targetFilename}`);
//       }
//     });
//   } else {
//     return false;
//   }
// }
