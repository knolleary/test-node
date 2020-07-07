const fs = require("fs");

const version = require("../../package.json").version;

const currentVersion = require("../../../node-red-docker/package.json").version;

console.log(`Update from ${currentVersion} to ${version}`)