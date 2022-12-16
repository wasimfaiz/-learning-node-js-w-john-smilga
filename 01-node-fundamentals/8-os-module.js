// OS (Operating System) Modules
const os = require('os');

// info about current user
const user = os.userInfo();
// console.log(user);

// method returns the system uptime in seconds
const systemUpTimeInSeconds = os.uptime();
const systemUpTimeInMinutes = systemUpTimeInSeconds / 60;
const systemUpTimeInHours = systemUpTimeInMinutes / 60;
// console.log(systemUpTimeInHours.toFixed(2));

// Get information about current OS
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
// console.log(currentOS);
