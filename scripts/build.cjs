const build = require("@fehujs/build")
const pkgJson = require("../package.json")

build(pkgJson.dependencies)
