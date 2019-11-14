
//Question root
const rl = require('readline-sync');
const chalk = require('chalk');
const log = console.log;

//Rules
log(chalk.yellow('\n>Here are few rules and mechanics how to play this game:<\n >1.Move to the next step by pressing ENTER<'))
rl.question()
log(chalk.yellow('2.Great Job! Now this applies to every chat action.'))
log(chalk.yellow(''))


//characters
let postava1 = 'Mystery Man';

//Name Ask
log(chalk.cyan(postava1 + ': '));
log(chalk.cyan('Hello traveler, what is your name?\n'))
let menoh = rl.question();
log(`Nice to meet you ${menoh}`);



rl.question()


//Mystery man speaking
log(`\n${postava1}: `)
log('So anyway, what are you doing here?')
log(chalk.blue("safa"))