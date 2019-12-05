
//Const Root
const rl = require('readline-sync');
const chalk = require('chalk');
const t = require('node-typewriter');
const log = console.log;
const pause = rl.question
const quest = rl.question

/* Program Prescripts
1. System Message: log(chalk.yellow(''))


*/


//variables
        //characters
            let postava1 = 'Mystery Man';
            let menoh = 'a'

//welcome
log(chalk.greenBright('Database Entered'))
log(chalk.yellow('Insert Name'))
menoh = quest();
``
log(chalk.yellow('Hello person. This is a welcoming message.'))
log(chalk.yellow('>>PRESS ENTER TO CONTINUE<<'))



//Rules
log(chalk.yellow('\n>Here are few rules and mechanics how to play this game:<\n >1.Move to the next step by pressing ENTER<'))
pause()
log(chalk.yellow('2.Great Job! Now this applies to every chat action.'))
pause()
log(chalk.yellow('3'))
pause()

//Name Ask
log(chalk.cyan(postava1 + ': '));
log(chalk.cyan('Hello traveler, what is your name?\n'))
log(`Nice to meet you ${menoh}`);

pause()

//Mystery man speaking
log(`\n${postava1}: `)
log('So anyway, what are you doing here?')
log(chalk.blue("safa"))