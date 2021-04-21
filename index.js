const Discord = require('discord.js');

const client = new Discord.Client({ 
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

const fs = require('fs');

const prefix = 'ky!'

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity("Made by Hanako#0007 <3", {
    type: "PLAYING"
  });
});




client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    if(command === 'mass') {
        message.channel.send('ʚ🍵ɞ﹕Mass Partner with Kyler! \n ・────────────・🍵 ɞ ⊹ \n ・Send your ads in codeblock. \n ・State the servers u wanna mass with. \n ・Prepare yourself for massing. \n ──────・୨୧︰🍵')
    } else if(command === 'massing') {
        message.channel.send('ʚ🌿ɞ﹕Mass Partner with Kyler! \n ・────────────・🌿ɞ ⊹ \n ・Start massing! GO, GO, GO! \n ・Post from bottom to top! \n ・Take your time, and stay safe! \n ──────・୨୧︰🌿')
    } else if(command === 'massed') {
        message.channel.send("ʚ🐸ɞ﹕Mass Partner with Kyler! \n ・────────────・🐸ɞ ⊹ \n ・Thanks for massing with me! \n ・Leave a <#834254770260148226> please! \n ・Kyler will start posting soon. \n ──────・୨୧︰🐸")
    }

});

//made by Hanako#0007 !

client.login('insert-token-here');
