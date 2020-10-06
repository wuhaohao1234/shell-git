#!/usr/bin/env node
const program = require("commander");
const exec = require("shelljs").exec;
program
  .version(require("./package").version, "-v, --version")
  .command("submit <msg> <branch>")
  .action((msg,branch) => {
    exec("git add .");
    console.log('添加文件到缓存区')
    exec(`git commit -m ${msg}`);
    console.log(`添加commit 为 ${msg}`)
    exec(`git push origin ${branch}`);
    console.log(`提交分支为 ${branch}`)
  });
//  .command('init <name>')
//  .action((name) => {
//    console.log(name)
//  })

program.parse(process.argv);
