var fs = require('fs');

function countNewLines(file) {
  var buffer = fs.readFileSync(file).toString(),
    count = buffer.split('\n').length - 1;
    console.log(count);
}

countNewLines(process.argv[2]);