# shell-git

## 学会npm搭建自己的脚手架

`mkdir shell-git`

`yarn init -y`

安装child_process,commander

`yarn add commander`

编辑package.json

```json
{
  "name": "shell-git",
  "version": "1.0.0",
  "main": "index.js",
  "bin": {
    "xxx-cli": "./index.js"
  },
  "repository": "git@github.com:wuhaohao1234/shell-git.git",
  "author": "wuhaohao1234 <1611499758@qq.com>",
  "license": "MIT",
  "dependencies": {
    "child_process": "^1.0.2",
    "commander": "^6.1.0"
  }
}

```
编写index.js

```javascript
#!/usr/bin/env node
console.log('Hello, cli!')
const program = require('commander')
program
 .version(require('./package').version, '-v, --version')  
 .command('init <name>')
 .action((name) => {
   console.log(name)
 })
 
program.parse(process.argv)

```
这里npm必须切换为npm源

```shell
npm login
# 填写npm账号名
# 填写npm密码
# 填写npm邮箱
npm publish
```

全局安装shell-git

`npm i -g shell-git`

使用

```shell
xxx-cli -v

xxx-cli init xxx
```

## 使用shelljs

`yarn add shellljs`

index.js修改为

```javascript
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

```
