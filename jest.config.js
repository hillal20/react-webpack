module.exports = {
  setupFiles: ["<rootDir>/src/setupTests.js"],
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$",
    "^.+\\.module\\.{css,sass,scss}$"
  ],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/assetsTransformer.js"
  }
};
