// These files will be created at location from where we run this script and not where the script is located
const fs = require('fs');
const folderName = process.argv[2] || "Project";

try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`," ");
    fs.writeFileSync(`${folderName}/style.css`," ");
    fs.writeFileSync(`${folderName}/script.js`," ");
} catch(e){
    console.log("Something Went Wrong!!");
    console.log(e);
}

    // $ node fileSystem.js

// Haridas@Rising-Sun MINGW64 /d/github/WebDevColtUdemy/BACK_END_STUFF/Node/Section31 (23rdjul2024)
    // $ ls
    // Project  args.js  fileSystem.js  firstScript.js  greeter.js  nodeInfo.txt

// Haridas@Rising-Sun MINGW64 /d/github/WebDevColtUdemy/BACK_END_STUFF/Node/Section31 (23rdjul2024)
    // $ cd Project/

// Haridas@Rising-Sun MINGW64 /d/github/WebDevColtUdemy/BACK_END_STUFF/Node/Section31/Project (23rdjul2024)
    // $ ls
    // index.html  script.js  style.css