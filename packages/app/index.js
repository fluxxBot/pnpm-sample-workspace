const axios = require("axios");
const { greet } = require("@sample/core");

async function main() {
  console.log(greet("world1"));
  const res = await axios.get("https://httpbin.org/get");
  console.log("Status:", res.status);
}

main();
