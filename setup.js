const fs = require("fs");
const { exec } = require("child_process");
const chalk = require("chalk");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// acts as a global variable that will end up in .env file
var nameString = ""
var pathString = ""

function tryGetUsername(){
    exec("git config user.name", (err, stdout, stderr) => {
        if (err){
            // console.log(err)
            inputName();
        } 
        var name = stdout.replace(/\n$/, '')
        nameString = `USERNAME="${name}"\n`
        inputDestinationFolder();
    })
}
tryGetUsername();

function inputDestinationFolder(){
    clearScreen();
    readline.question(chalk`
            {yellow please enter the path to your coding projects folder...}

            {gray you may also drag and drop the folder into the terminal}
        `,
        (path) => {
            pathString = `PROJECTPATH="${path.trim()}"\n`
            clearScreen();
            inputToken();
        }
    )
}

function inputName(){
    readline.question(chalk.yellow`

            please enter your github username below...

        `, 
        (username) => {
            nameString = `USERNAME="${username}"\n`
            clearScreen()
            inputDestinationFolder();
        }
    )
}

function inputToken(){
    readline.question(chalk`
        {yellow please enter your github personal access token below...}

        {gray for info on how to generate your token please visit this link:
        https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token}

        {red required permissions:
        repo, delete_repo}

        `,
        (token) => {
            var finalEnvString = nameString + pathString + `TOKEN="${token}"`
            fs.writeFile(".env", finalEnvString, (err) =>{
                if(err) throw err;
                console.log(chalk.green("\nsetup complete!"));
                process.exit()
            })
        }
    )
}

function clearScreen(){
    var lines = process.stdout.getWindowSize()[1];
    for(var i = 0; i < lines; i++) {
        console.log('\r\n');
    }
}


