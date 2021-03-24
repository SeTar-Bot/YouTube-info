// =============== Bot ===============
const Discord  = require('discord.js');
const info = require('./info');
const client = new Discord.Client();
const token = "BOT_TOKEN";
const ytid = "CHANNEL_ID";
const ytkey = "YouTube_API_KEY";
let updateTime = 3600000; // Update Youtube Information?
let information;
// ==============================
setInterval(() => {
  information = info(ytid, ytkey);
}, updateTime);

    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
      const activities = [
        { name: `${information.TotalVideos} Videos`, type: 'WATCHING' },
        { name: `${information.Subscribers} Subscribers`, type: 'WATCHING'},
        { name: `${information.TotalViews} Views`, type: 'WATCHING' },
      ];
      let activity = 0;  
      setInterval(() => {
        if (activity > 4) activity = 0;
        client.user.setActivity(activities[activity]);
        activity++;
      }, 5000);
    });

// =============== End ===============
client.login(token);
