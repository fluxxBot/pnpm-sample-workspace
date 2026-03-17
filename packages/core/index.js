const _ = require("lodash");

function greet(name) {
  return _.capitalize(`hello1 ${name}`);
}

module.exports = { greet };
