var marked = require('marked');
var fs = require('fs');

var readMe = fs.readFileSync('../hardware.md', 'utf-8');
var markdownReadMe = marked(readMe);

fs.writeFileSync('./site/README.html', markdownReadMe);
