// console.log(process.argv[2])
const fs = require('fs')
const inp = process.argv;
if (inp[2]==='del') {
    fs.unlinkSync(inp[3]);
}
else if (inp[2] == 'add') {
    fs.writeFileSync(inp[3], inp[4]);
}
else {
    console.error("Invalid input...");
}