const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }); 
const prefix = 'm!';


client.once('ready', () =>{
    console.log('mommy misato is here!');
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'hi'){ //bot says hello
        message.channel.send('ohaiyo!');
    } else if (command == 'youtube'){ //say my youtube link
        message.channel.send('https://www.youtube.com/channel/UCiR7D8PK1QAlNOJqZemBY8Q/videos');
    } else if(command === 'commands'){
        message.channel.send('here is the list of commands:');
        message.channel.send('m!urname, m!hi, m!youtube, m!misato');
    }else if(command === 'dan'){
        message.channel.send('ara dan-kun >_<');
    }else if(command === 'ryan'){
        message.channel.send('ryan-kun i will beat you ');
    }else if(command === 'vlad'){
        message.channel.send('vlad is a baka');
    }else if(command === 'sawler'){
        message.channel.send('ara sawler-san');
    }else if(command === 'mic'){
        message.channel.send('mic is a rat ');
    }else if(command === 'emery'){
        message.channel.send('rat behavior emery-kun');
    }else if(command === 'rayan'){
        message.channel.send('ohaiyo raydaddy-san-dono-sama');
    }else if(command === 'jamie'){
        message.channel.send('jamie yes');
    }else if(command === 'arthur'){
        message.channel.send('ara ara arthur-san. would u like to be bottom?node');
    }else if(command === 'misato'){
        const randImage = getRandomInt(5);
        if(randImage === 1){
            message.channel.send('https://i.pinimg.com/originals/1d/fa/99/1dfa99352e87c99ca965afa460adf044.jpg');
        }else if(randImage === 2){
            message.channel.send('https://static.wikia.nocookie.net/legendsofthemultiuniverse/images/7/78/1411327022409.jpg/revision/latest?cb=20150516013237');
        }else if(randImage === 3){
            message.channel.send('https://www.google.com/search?q=misato&rlz=1C1CHBF_enCA924CA924&sxsrf=APq-WBtVzFoHHFYM3DSR89tEX24aqYLW1w:1644189053058&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj3r83Dmez1AhWEM30KHV-UBeIQ_AUoAXoECAEQAw&biw=1234&bih=880&dpr=1#imgrc=J3Meqiu0hJyX8M');
        }else if(randImage === 4){
            message.channel.send('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrN1P62LcyPdTfILE1opfiTN0NLAT-zIbK4A&usqp=CAU');
        }else if(randImage === 5){
            message.channel.send('https://cdn.discordapp.com/attachments/805550413730283620/940444360024158208/IMG_9755.jpg');
    
    
        }
    }
});

client.login('OTM5NTE2NDk3NTk0ODM0OTk0.Yf5-7A.399zhXtIzQ5DbizhdNqTzrq0mqY');
