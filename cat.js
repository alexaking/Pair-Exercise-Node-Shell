module.exports = (fileName) => {
    const cat = require ('cat')
    let args = cmd.split(" ")
            cat.readfile('./', 'utf8', (err, files) => {
                if (err){
                    throw err
                } else{
                    for (let x = 0; x < args.length; x++){
                        process.stdout.write(cat(args[x]));
                }
                process.stdout.write("\nprompt > ");
        }
}