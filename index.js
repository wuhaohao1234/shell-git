#!/usr/bin/env node
const program = require("commander");
const exec = require("shelljs").exec;
program
  .version(require("./package").version, "-v, --version")
  .command("add <msg>")
  .action((msg) => {
    exec("git add .");
    exec(`git commit -m ${msg}`);
    exec(`git push`);
  });
//  .command('init <name>')
//  .action((name) => {
//    console.log(name)
//  })

program.parse(process.argv);
