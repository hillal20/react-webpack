const path = require("path");

module.exports = {
  process(src, filename = "pic.png", config, options) {
    console.log("fileName==> ", filename);

    return "module.exports = " + JSON.stringify(path.basename(filename)) + ";";
  }
};
