const args = process.argv;
const alarm = args.splice(2);

const timer = (beeps) => {
  for (const seconds of beeps) {
    if (parseInt(seconds) > 0){
      setTimeout(() => {
        process.stdout.write('\x07');
      }, parseInt(seconds) * 1000);
    }
  }
};

timer(alarm);