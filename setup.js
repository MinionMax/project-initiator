const fs = require("fs");
const { exec } = require("child_process");
const chalk = require("chalk");
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

// acts as a global variable that will end up in .env file
var nameString = "";
var pathString = "";
var IDEstring = "";

function tryGetUsername(){
    exec("git config user.name", (err, stdout, stderr) => {
        if (err){
            // console.log(err)
            inputName();
        } 
        var name = stdout.replace(/\n$/, '')
        nameString = `GHUSERNAME="${name}"\n`
        inputDestinationFolder();
    })
}
tryGetUsername();

function inputDestinationFolder(){
    rl.question(chalk`
        {yellow please enter the path to your coding projects folder...}

        {gray you may also drag and drop the folder into the terminal}
        `,
        (path) => {
            pathString = `PROJECTPATH="${path.trim()}"\n`
            inputIDE();
        }
    )
}

function inputName(){
    rl.question(chalk.yellow`

        please enter your github username below...

        `, 
        (username) => {
            nameString = `GHUSERNAME="${username}"\n`
            inputDestinationFolder();
        }
    )
}

function inputIDE(){
    rl.question(chalk`

        {yellow the CLI will open the new project in your IDE automatically.
        in case you would like to have this feature, please enter the corresponding command below...}

        {gray options are:
        code, atom, subl, mate

        also make sure these commands are installed in your path}

    `, 
    (ide) => {
        IDEstring = `IDE="${ide}"\n`
        inputToken();
    }
)
}
function inputToken(){
    rl.question(chalk`
        {yellow please enter your github personal access token below...}

        {gray for info on how to generate your token please visit this link:
        https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token}

        {red required permissions:
        repo, delete_repo}

        `,
        (token) => {
            var finalEnvString = nameString + pathString + IDEstring + `TOKEN="${token}"`
            fs.writeFile(".env", finalEnvString, (err) =>{
                if(err) throw err;
                console.log(chalk.green("\nsetup complete!"));
                process.exit()
            })
        }
    )
}

exports.tryGetUsername = tryGetUsername