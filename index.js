#!/usr/bin/env node

const { Octokit } = require("@octokit/rest");
const dotenv = require("dotenv").config();
const childProcess = require("child_process");
const fs = require("fs");
const open = require("open");
const path = require("path");
const argv = require("minimist")(process.argv.slice(2));
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
const setup = require("./setup")
const chalk = require("chalk");
const TOKEN = process.env.TOKEN;
const GHUSERNAME = process.env.GHUSERNAME;
const PROJECTPATH = process.env.PROJECTPATH;
const IDE = process.env.IDE;

const octokit = new Octokit({
    auth: TOKEN,
    userAgent: GHUSERNAME,
    baseUrl: 'https://api.github.com',
})

function argumentValid(argv){

    const argument = argv._[0];
    const name = argv._[1]
    const private = argv.p;
    const help = argv.h;
    const silent = argv.s


    switch(argument){
        case "new":
            newRepo(name, private, silent);
        break;
        case "del":
            deleteRepo(name);
        break;
        case "setup":
            launchSetup();
        break;
        default:
           if(!help) console.error("error in parsing arguments, use 'project -h' for available commands");
           else if(help) provideHelp();
           process.exit();
        break;
    }

}
argumentValid(argv);

async function newRepo(name, private, silent){
    
    const project = path.join(PROJECTPATH, name);

    console.log(chalk.gray("[1/3]"), "🚚 connecting to github...");
    await octokit.rest.repos.createForAuthenticatedUser({
        name: name,
        private: private
    });

    fs.mkdirSync(project);
    fs.writeFileSync(path.join(project + "/README.md"), `# ${name}`, (err) => {
        if (err) throw err;
    })
    fs.writeFile(path.join(project + "/.gitignore"),"", (err) => {
        if (err) throw err;
    })

    console.log(chalk.gray("[2/3]"), "✨ initialising empty git repo...")
    childProcess.execSync(
        `cd ${project} && ` +
        "git init && " +
        "git add . && " +
        'git commit -m "🎉 initial commit" && ' +
        `git remote add origin https://github.com/${GHUSERNAME}/${name}.git && ` +
        "git push -u origin master"
    );

    console.log(chalk.gray("[3/3]"),`🎉 done! project ${name} is online!`);
    if(!silent){
        open(`https://github.com/${GHUSERNAME}/${name}.git`);
        if(IDE) childProcess.exec(`cd ${project} && code .`);
    } 
    process.exit()

}

async function deleteRepo(name){


    const yesOrNo = await question(chalk.bgRed.white("💁‍♂️ are you sure? this process is irreversible! (y/n)\n"));
    if (yesOrNo === "n" || yesOrNo === "no"){
        console.log("❌ aborting...");
        process.exit()
    } else if (yesOrNo !== "y" && yesOrNo !== "yes") return console.log(chalk.red("please answer with 'y' or 'n'"));

    const project = path.join(PROJECTPATH, name);

    console.log(chalk.gray("[1/3]"), "🚚 connecting to github...");
    await octokit.rest.repos.delete({
        owner: GHUSERNAME,
        repo: name
    });

    console.log(chalk.gray("[2/3]"), "🗑  removing local files...");
    fs.rmdirSync(project, { recursive: true }, (err) => {
        if (err) throw err;
    });

    console.log(chalk.gray("[3/3]"), `🧨 done! project ${name} is on to its way into oblivion!`);
    process.exit();
}

function launchSetup(){
    setup.tryGetUsername()
}

function question(q){

    var response;

    rl.setPrompt(q);
    rl.prompt();

    return new Promise((resolve, reject) => {
        rl.on("line", (answer) => {
            response = answer.toLowerCase();
            rl.close();
        })

        rl.on("close", () => {
            resolve(response);
        })
    })
}

function provideHelp(){
    console.log(chalk`
        {blueBright ===AVAILABLE ARGUMENTS===}
        {yellow (usage: project <...>)}
        - 'new <name>' -> creates an initial repo locally and github
        - 'del <name>' -> deletes repo lacally and github (with confirmation)
        - 'setup' -> relaunches setup process

        {blueBright ===AVAILABLE FLAGS===}
        - '-p' -> available for 'new', makes the repo private
        - '-s' -> available for 'new', enables silent mode (ide/browser will not open)
        
        {gray for more info see:
        https://github.com/MinionMax/project-initiator/blob/master/README.md#usage}
    `);
}