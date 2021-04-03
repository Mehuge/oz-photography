
const cmd = `c:\\cygwin64\\bin\\rsync.exe`;
const argv = [
  `-avz`, `--progress`, `-e /bin/ssh`, `--chmod=o+rx`, `--delete`,
  `${process.argv[2]}`,
  `${process.env.WEBSITE_LOGIN}:${process.argv[3]}`
];

console.log(argv);

const { spawn } = require('child_process');
const child = spawn(cmd, argv);
child.stdout.on('data', data => {
  if (data[data.length-1] == 10) data = data.slice(0,data.length-1);
  console.log(`${data}`);
});
child.stderr.on('data', data => {
  console.error(`${data}`);
});
child.on('close', code => {
  process.exit(code);
});
