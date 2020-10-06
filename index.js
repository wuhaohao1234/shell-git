#!/usr/bin/env node
const program = require("commander");
const exec = require("shelljs").exec;
program
  .version(require("./package").version, "-v, --version")
  .command("submit <msg> <branch>")
  .action((msg) => {
    exec("git add .");
    console.log('添加文件到缓存区')
    exec(`git commit -m ${msg}`);
    console.log(`添加commit 为 ${msg}`)
    exec(`git push`) 
  });
//  .command('init <name>')
//  .action((name) => {
//    console.log(name)
//  })

program.parse(process.argv);
