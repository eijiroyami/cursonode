const fs = require('fs');

const logsave = function(data){
    fs.appendFile('log/log.txt', data, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });      
}
 
module.exports = logsave

