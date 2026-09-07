const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "test.txt");

console.log("Creating File...");
fs.writeFile(filePath, "Hello Node.js", (err) => {
  if (err) return console.error("Error creating file:", err.message);
  console.log("File Created");

  console.log("Reading File");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return console.error("Error reading file:", err.message);
    console.log(data);

    console.log("Updating File");
    fs.appendFile(filePath, "\nLearning FS Module", (err) => {
      if (err) return console.error("Error updating file:", err.message);
      console.log("File Updated");

      fs.readFile(filePath, "utf8", (err, updatedData) => {
        if (err)
          return console.error("Error reading updated file:", err.message);
        console.log(updatedData);

        fs.unlink(filePath, (err) => {
          if (err) return console.error("Error deleting file:", err.message);
          console.log("File Deleted");
        });
      });
    });
  });
});
