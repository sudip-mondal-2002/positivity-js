const spawn = require('child_process').spawn;
const Bluebird = require('bluebird');
const predictSentence = async (text) =>{
    return new Bluebird((resolve, reject) => {
        child = spawn('python', [__dirname+'/predict.py', text, __dirname]);
        child.stdout.on('data', (data) => {
            resolve(data.toString()[0]==="1" ? true : false );
        })
    })
}
module.exports = {predictSentence};