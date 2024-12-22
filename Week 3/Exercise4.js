const os = require("os");
const util = require("util");

console.log("Temporary directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("OS: " + os.platform() + " Release: " + os.release());
console.log("Uptime: " + (os.uptime() / 3600) + " hours");
console.log("User Info: " + util.inspect(os.userInfo()));
console.log("Memory: " + os.totalmem() / 1000000000 + " Gigabyte");
console.log("Free: " + os.freemem() / 1000000000 + " Gigabyte");
console.log("CPU: " + util.inspect(os.cpus()));
console.log("Network: " + util.inspect(os.networkInterfaces()));
console.log("Program end");
