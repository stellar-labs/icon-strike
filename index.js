const fancyLog = require('fancy-log');
const webfontsGenerator = require('webfonts-generator');
const fs = require('fs');

fancyLog.info('starting converting SVG files');

webfontsGenerator({
    files: fs.readdirSync('./src/img').map(function(file) { return './src/img/' + file; }),
    dest: './dist',
    html: true
}, function(error) {
    if( error ) {
        fancyLog.error('could not generate the web fonts');
        fancyLog.error(error);
    }
    else {
        fancyLog.info('all SVG files have been converted to web fonts');
    }
});

fancyLog.info('end of the conversion');