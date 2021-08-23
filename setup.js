const fs = require("fs");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`
        please enter your github personal access token below...

        for info on how to generate your token please visit this link:
        https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token

        required permissions:
        repo, delete_repo

    `,
    (token) => {
        fs.writeFile(".env", `TOKEN="${token}"`, (err) =>{
            if(err) throw err;
            console.log("setup complete!");
            process.exit()
        })
    }
)


