/**
    Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
    clock that shows you the current machine time?

    Can you make it so that it updates every second, and shows time in the following formats - 

    - HH:MM::SS (Eg. 13:45:23)

    - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

const timeIn24hFormat = (hours, minutes, seconds) => {
    return `${hours}:${minutes}:${seconds}\n`;
}

const timeIn12hFormat = (hours, minutes, seconds) => {
    const median = hours >= 12 ? "PM" : "AM";
    return `${hours}:${minutes}:${seconds} ${median}\n`;
}

const clearConsole = () => {
    process.stdout.moveCursor(0, -2)
    process.stdout.cursorTo(0);
    process.stdout.clearScreenDown();
}

const printCurrentTime = () => {
    setInterval(() => {
        const dateTime = new Date();
        const hours = dateTime.getHours();
        const minutes = dateTime.getMinutes();
        const seconds = dateTime.getSeconds();
        
        clearConsole();
        process.stdout.write(timeIn24hFormat(hours, minutes, seconds));
        process.stdout.write(timeIn12hFormat(hours, minutes, seconds));
    }, 1000);
}

printCurrentTime();