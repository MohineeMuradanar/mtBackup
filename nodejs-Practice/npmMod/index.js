
import chalk from 'chalk';
import validator from 'validator';
// const validator = require("validator");
// const chalk = require('chalk');
// console.log(chalk.red.underline.inverse('false'));

const result = validator.isEmail("mohinee@gmail.com");
console.log(result?chalk.green.inverse(result):chalk.red.inverse(result));