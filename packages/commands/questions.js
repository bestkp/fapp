import chalk from 'chalk';
import inquirer from 'inquirer';

export default function () {
    inquirer.prompt([
        {
            name:'your-name',
            type:'confirm',
            message:`Hello, genius man:`,
            validate: function(input){
                if(input.lowerCase !== 'y' && input.lowerCase !== 'n' ){
                    return 'Please input y/n !'
                }
                else{
                    return true;
                }
            }
        },{
            name:'girl-name',
            type:'confirm',
            message:`Hello, girl:`,
            validate: function(input){
                if(input.lowerCase !== 'y' && input.lowerCase !== 'n' ){
                    return 'Please input y/n !'
                }
                else{
                    return true;
                }
            }
        }
    ])
        .then(answers=>{
            console.log('answers',answers);

            // 如果确定覆盖
            if(answers['your-name']){
                console.log(chalk.green(`yyyy`));
            } else {
                console.log(chalk.red('nnnn'));
            }
        })
        .catch(err=>{
            console.log(chalk.red(err));
        })
}