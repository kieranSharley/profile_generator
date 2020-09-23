const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?   ', (answer) => {
  rl.question('What an activity you like doing?   ', (answer2) => {
    rl.question('What do you listen to while doing that?   ', (answer3) => {
      rl.question('Which daily meal is your favourite?   ', (answer4) => {
        rl.question('Which sport is your absolute favourite?   ', (answer5) => {
          rl.question('What is your superpower?   ', (answer6) => {
            console.log(`My name's ${answer}! I enjoy ${answer2} and listening to ${answer3}. My favourite meal is ${answer4} I love ${answer5} and my superpower you ask? ${answer6}`);
            rl.close();
          })
        })
      })
    })
  })
});