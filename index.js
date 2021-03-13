// =============== Bot ===============
const Discord  = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
const token = "BOT_TOKEN";
const ytid = "CHANNEL_ID";
const ytkey = "YouTube_API_KEY";
let url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${ytid}&key=${ytkey}`
let settings = { method: "Get" };
// ==============================

fetch(url, settings)
  .then(res => res.json())
  .then((json) => {
    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
      const activities = [
        { name: `${json.items[0].statistics.videoCount} Videos`, type: 'WATCHING' },
        { name: `${json.items[0].statistics.subscriberCount} Subscribers`, type: 'WATCHING'},
        { name: `${json.items[0].statistics.viewCount} Views`, type: 'WATCHING' },
      ];
      client.user.setPresence({ status: 'idle', activity: activities[0] });  
      let activity = 1;    
      setInterval(() => {
        activities[2] = { name: `${json.items[0].statistics.videoCount} Videos`, type: 'WATCHING' },
        activities[3] = {name: `${json.items[0].statistics.subscriberCount} Subscribers`, type: 'WATCHING'},
        activities[4] = { name: `${json.items[0].statistics.viewCount} Views`, type: 'WATCHING' },
        if (activity > 4) activity = 0;
        client.user.setActivity(activities[activity]);
        activity++;
      }, 5000);
    });
  });

// =============== End ===============
client.login(token);
