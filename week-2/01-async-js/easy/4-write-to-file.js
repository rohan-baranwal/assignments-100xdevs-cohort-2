/**
    ## Write to a file
    Using the fs library again, try to write to the contents of a file.
    You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require("fs");
const writeToFile = (filePath, content) => {
    fs.writeFile(filePath, content, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log("added contents in file:");
            console.log(fs.readFileSync(filePath, "utf-8"));
        }
    })
}

writeToFile("./4-file-to-write.txt", "Yo");