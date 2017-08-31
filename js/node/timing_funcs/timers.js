const waitTime = 3000;
const waitInterval = 100;
let currentTime = 0;
let percentWaited = 0;

function writeWaitingPercent(p) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Waiting... ${p}%`)
}

//convieniently, these funcs are the same as client JavaScript
const interval = setInterval(() => {
  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime / waitTime) * 100);
  writeWaitingPercent(percentWaited);
  // console.log(`waiting ${currentTime / 1000 } seconds...`)
}, waitInterval);

setTimeout(() => {
  clearInterval(interval);
  writeWaitingPercent(100);
  console.log("\nDone\n");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);
