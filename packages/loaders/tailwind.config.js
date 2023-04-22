const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  // prefix loaders lib classes to avoid conflicting with the app
  prefix: "loaders-",
  presets: [sharedConfig],
};
