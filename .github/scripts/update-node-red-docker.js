const fs = require("fs");

const version = require("../../package.json").version;

const currentVersion = require("../../../node-red-docker/package.json").version;

console.log(`Update from ${currentVersion} to ${version}`)

updateFile(__dirname+"/../../../node-red-docker/package.json", currentVersion, version);
updateFile(__dirname+"/../../../node-red-docker/docker-custom/package.json", currentVersion, version);
updateFile(__dirname+"/../../../node-red-docker/README.md", currentVersion, version);


function updateFile(path,from,to) {
    console.log(path+"\n----------------------")
    const contents = fs.readFileSync(path,"utf8");
    contents = contents.replace(new RegExp(from.replace(/\./g,"\\."),"g"), to);
    console.log(contents);
    console.log("\n----------------------")
    fs.writeFileSync(path, contents);
}