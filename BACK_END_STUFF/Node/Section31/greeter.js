let args = process.argv.slice(2);
for(let arg of args){
    console.log(`Ram Ram ${arg}`);
}


// $ node greeter.js Digvijay
//     Ram Ram Digvijay

// Haridas@Rising-Sun MINGW64 /d/github/WebDevColtUdemy/BACK_END_STUFF/Node/Section31 (23rdjul2024)
// $ node greeter.js Digvijay Harshal Pritam Pranita
//     Ram Ram Digvijay
//     Ram Ram Harshal
//     Ram Ram Pritam
//     Ram Ram Pranita