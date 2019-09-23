const myPWD = require('./pwd')
const myLS = require('./ls')
const myCat = require('./cat')
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd'){
      myPWD() 
    }
    else if (cmd === 'ls'){
        myLS() 
      }
      else if (cmd.slice(0,3) === 'cat'){
        myCat(cmd.slice(4)) 
     }  
      
    else {process.stdout.write('You typed: ' + cmd);}
    process.stdout.write('\nprompt >');
});



