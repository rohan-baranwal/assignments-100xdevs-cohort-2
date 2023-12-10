/**
    ## File cleaner
    Read a file, remove all the extra spaces and write it back to the same file.

    For example, if the file input was
    ```
    hello     world    my    name   is       raman
    ```

    After the program runs, the output should be

    ```
    hello world my name is raman
    ```
*/

const fs = require("fs");
const fileCleaner = (filePath) => {
    fs.readFile(filePath, "utf-8", (err_read, data) => {
        if (err_read) {
            console.error(err_read);
        }
        console.log(`Old contnets of file:\n${fs.readFileSync(filePath, "utf-8")}\n`);
        console.log(`**************************************************`)
        const cleanData = data.replace(/ +(?= )/g, '');
        fs.writeFile(filePath, cleanData, (err_write) => {
            if (err_write) {
                console.error(err_write);
            } else {
                console.log(`New contnets of file:\n${fs.readFileSync(filePath, "utf-8")}`);
            }
        })
    })
}
fileCleaner("./1-file-to-clean.txt");