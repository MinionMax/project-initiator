#!/usr/bin/env node

const { Octokit } = require("@octokit/rest");
const dotenv = require("dotenv").config();
const childProcess = require("child_process");
const fs = require("fs");
const path = require("path");
const argv = require("minimist")(process.argv.slice(2));
const TOKEN = process.env.TOKEN;
const USERNAME = process.env.USERNAME;
const PROJECTPATH = process.env.PROJECTPATH;

const octokit = new Octokit({
    auth: TOKEN,
    userAgent: USERNAME,
    baseUrl: 'https://api.github.com',
})

function argumentValid(argv){

    const argument = argv._[0];
    const name = argv._[1]
    const private = argv.p;
    const help = argv.h;


    switch(argument){
        case "new":
            newRepo(name, private);
        break;
        case "del":
            deleteRepo(name);
        break;
        case "setup":
            launchSetup();
        break;
        default:
           if(!help) console.error("error in argument parsing, use project -h for available commands");
           else if(help) provideHelp();
        break;
    }

}
argumentValid(argv);

async function newRepo(name, private){
    const project = path.join(PROJECTPATH, name);
    console.log(project)
    console.log("🚚 connecting to github...");
    await octokit.rest.repos.createForAuthenticatedUser({
        name: name,
        private: private
    })
    fs.mkdirSync(project);
    fs.writeFile(path.join(project + "/README.md"), `# ${name}`, (err) => {
        if (err) throw err;
    })
    fs.writeFile(path.join(project + "/.gitignore"),"", (err) => {
        if (err) throw err;
    })
    console.log("✨ initialising empty git repo...")
    childProcess.exec("pwd", {
            cwd: project
        }, 
        (error, stdout, stderr) => {
            if(error) console.log(error)
            childProcess.exec("git init");
            childProcess.exec("git add .");
            childProcess.exec("git commit -m '🎉 initial commit'");
            childProcess.exec(`git remote add origin https://github.com/${USERNAME}/${name}.git`);
            childProcess.exec("git push");
        }
    )
    console.log(`🎉 done! project ${name} is online...`)

}

function deleteRepo(name){
    console.log("delete " + name)
}

function launchSetup(){
    childProcess.fork("./setup.js");
}

function provideHelp(){
    console.log("help")
}