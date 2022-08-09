
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

switch (myArgs[ 0 ])
{
    case 'insult':
        console.log(myArgs[ 1 ], 'smells quite badly.');
        break;
    case 'compliment':
        console.log(myArgs[ 1 ], 'is really cool.');
        break;
    default:
        console.log('Sorry, that is not something I know how to do.');
}

rl.question('What is your name ? ', function (name)
{
    rl.question('Where do you live ? ', function (country)
    {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});

rl.on('close', function ()
{
    console.log('\nBYE BYE !!!');
    process.exit(0);
});