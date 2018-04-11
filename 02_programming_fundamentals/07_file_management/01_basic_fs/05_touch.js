// Using the file creation commands, create a touch function that mimics the behavior of the Unix command.
const fs = require("fs");

const fileAndPath = "/Users/Olivier/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/folderToto/tata";

function touch (fileToCreate) {
  fs.open(fileToCreate, "w", (error, file) => {
    if (error) {
      console.warn(error);
    } else {
      console.log("Created!");
    }
  });
}

touch (fileAndPath);

module.exports = touch;
