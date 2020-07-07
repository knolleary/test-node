const fs = require("fs");

const newVersion = require("../../package.json").version;
console.log("GITHUB_REF",process.env.GITHUB_REF);
if (!/^\d+\.\d+\.\d+$/.test(newVersion)) {
    console.log(`Not updating for a non-stable release - ${newVersion}`);
    process.exit(0);
}

const currentVersion = require("../../../node-red-docker/package.json").version;

console.log(`Update from ${currentVersion} to ${newVersion}`)

updateFile(__dirname+"/../../../node-red-docker/package.json", currentVersion, newVersion);
updateFile(__dirname+"/../../../node-red-docker/docker-custom/package.json", currentVersion, newVersion);
updateFile(__dirname+"/../../../node-red-docker/README.md", currentVersion, newVersion);

console.log(`::set-env name=newVersion::${newVersion}`);

function updateFile(path,from,to) {
    let contents = fs.readFileSync(path,"utf8");
    contents = contents.replace(new RegExp(from.replace(/\./g,"\\."),"g"), to);
    fs.writeFileSync(path, contents);
}